"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = exports.TransformTransaction = exports.TransformSign = exports.TransformInner = exports.TransformAction = exports.transformRecoveryEmailInner = exports.transformPubkey = exports.TransformRsaPubkey = exports.TransformRawTransaction = exports.TransformRowTransaction = exports.TransformPendingState = exports.TransformRecoveryEmail = exports.TransformTxStatus = exports.TransformInnerRaw = exports.TransformRowAction = void 0;
const validators_1 = require("./validators");
function invokeSerializeJson(debugPath, value) {
    if (value instanceof Object && value.serializeJson instanceof Function) {
        value = value.serializeJson.call(value);
        return value;
    }
    return value;
}
function transformObject(debugPath, object, keys, hintNull) {
    object = invokeSerializeJson(debugPath, object);
    if (!(object instanceof Object)) {
        throw new Error(`Transformed ${debugPath} is not an object1!`);
    }
    const result = {};
    for (const [key, f] of Object.entries(keys)) {
        let value = object[key];
        if (!value) {
            const camelKey = key.replace(/(_[a-z])/g, (group) => group.toUpperCase().replace('_', ''));
            value = object[camelKey];
        }
        if (hintNull) {
            if (value)
                result[key] = f(`${debugPath}.${key}`, value);
        }
        else {
            result[key] = f(`${debugPath}.${key}`, value);
        }
    }
    return result;
}
function transformRawObject(debugPath, object, keys) {
    object = invokeSerializeJson(debugPath, object);
    if (!(object instanceof Object)) {
        throw new Error(`Transformed ${debugPath} is not an object1!`);
    }
    const result = {};
    for (const [key, f] of Object.entries(keys)) {
        let value = object[key];
        if (!value) {
            const camelKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
            value = object[camelKey];
        }
        result[key] = f(`${debugPath}.${key}`, value);
    }
    return result;
}
function toInvoke(transform) {
    return function (debugPath, value) {
        return transform(value, {
            validation: false,
            debugPath,
        });
    };
}
function TransformRowAction(target, { debugPath = 'row_action' } = {}) {
    const formatAction = transformRawObject(debugPath, target, {
        registerEmail: invokeSerializeJson,
        pubkey: invokeSerializeJson,
        recoveryEmail: invokeSerializeJson,
        quickLogin: invokeSerializeJson,
    });
    return formatAction;
}
exports.TransformRowAction = TransformRowAction;
function TransformInnerRaw(target, { debugPath = 'raw' } = {}) {
    const formatRowInner = transformRawObject(debugPath, target, {
        nonce: invokeSerializeJson,
        type: invokeSerializeJson,
        action: toInvoke(TransformRowAction),
    });
    return formatRowInner;
}
exports.TransformInnerRaw = TransformInnerRaw;
function TransformTxStatus(target, { debugPath = 'raw' } = {}) {
    const formatRow = transformRawObject(debugPath, target, {
        ckbTxHash: invokeSerializeJson,
        status: invokeSerializeJson,
    });
    return formatRow;
}
exports.TransformTxStatus = TransformTxStatus;
function TransformRecoveryEmail(target, { debugPath = 'raw' } = {}) {
    const formatRecoveryEmail = transformRawObject(debugPath, target, {
        threshold: invokeSerializeJson,
        firstN: invokeSerializeJson,
        emails: invokeSerializeJson,
    });
    return formatRecoveryEmail;
}
exports.TransformRecoveryEmail = TransformRecoveryEmail;
function TransformPendingState(target, { debugPath = 'raw' } = {}) {
    const formatRecoveryEmail = transformRawObject(debugPath, target, {
        pendingKey: invokeSerializeJson,
        replaceOld: invokeSerializeJson,
        timeCell: invokeSerializeJson,
    });
    return formatRecoveryEmail;
}
exports.TransformPendingState = TransformPendingState;
function toTxRowArray(array) {
    const data = array.map((item, i) => {
        return TransformRowTransaction(item);
    });
    return data;
}
function TransformRowTransaction(rawTransaction, { debugPath = 'raw' } = {}) {
    const formateTransaction = transformRawObject(debugPath, rawTransaction, {
        transactionInner: toInvoke(TransformInnerRaw),
        txStatus: toInvoke(TransformTxStatus),
    });
    return formateTransaction;
}
exports.TransformRowTransaction = TransformRowTransaction;
// raw transaction
function TransformRawTransaction(rawTransaction, { debugPath = 'raw_transaction' } = {}) {
    let formateTransaction = {};
    if (rawTransaction.tx_status) {
        formateTransaction = TransformRowTransaction(rawTransaction);
    }
    else if (rawTransaction.register_email) {
        formateTransaction = transformRawObject(debugPath, rawTransaction, {
            registerEmail: invokeSerializeJson,
            quickLogin: invokeSerializeJson,
            localKeys: invokeSerializeJson,
            recoveryEmail: toInvoke(TransformRecoveryEmail),
            pendingState: toInvoke(TransformPendingState),
        });
    }
    else {
        formateTransaction = toTxRowArray(rawTransaction);
    }
    return formateTransaction;
}
exports.TransformRawTransaction = TransformRawTransaction;
function TransformRsaPubkey(target, { debugPath = 'action' } = {}) {
    const rsaPubkey = transformObject(debugPath, target, {
        e: invokeSerializeJson,
        n: invokeSerializeJson,
    });
    return rsaPubkey;
}
exports.TransformRsaPubkey = TransformRsaPubkey;
function transformPubkey(target, { debugPath = 'pubkey' } = {}) {
    const pubkey = transformObject(debugPath, target, {
        rsa_pubkey: toInvoke(TransformRsaPubkey),
        secp256k1: invokeSerializeJson,
        secp256r1: invokeSerializeJson,
    }, true);
    return pubkey;
}
exports.transformPubkey = transformPubkey;
function transformRecoveryEmailInner(target, { debugPath = 'recovery' } = {}) {
    const formatAction = transformObject(debugPath, target, {
        threshold: invokeSerializeJson,
        first_n: invokeSerializeJson,
        emails: invokeSerializeJson,
    });
    return formatAction;
}
exports.transformRecoveryEmailInner = transformRecoveryEmailInner;
function TransformAction(target, { validation = true, debugPath = 'action' } = {}) {
    const formatAction = transformObject(debugPath, target, {
        register_email: invokeSerializeJson,
        quick_login: invokeSerializeJson,
        pubkey: toInvoke(transformPubkey),
        recovery_email: toInvoke(transformRecoveryEmailInner),
    });
    if (validation) {
        validators_1.validators.ValidateAction(formatAction, {
            debugPath: `(transformed) ${debugPath}`,
        });
    }
    return formatAction;
}
exports.TransformAction = TransformAction;
function TransformInner(target, { validation = true, debugPath = 'inner' } = {}) {
    const formatInner = transformObject(debugPath, target, {
        type: invokeSerializeJson,
        nonce: invokeSerializeJson,
        username: invokeSerializeJson,
        action: toInvoke(TransformAction),
    });
    if (validation) {
        validators_1.validators.ValidateInner(formatInner, {
            debugPath: `(transformed) ${debugPath}`,
        });
    }
    return formatInner;
}
exports.TransformInner = TransformInner;
function TransformSign(target, { validation = true, debugPath = 'sign' } = {}) {
    // todo  way
    let formatSign;
    if (target.emailHeader) {
        if (target.unipassSignature) {
            // add key 2
            formatSign = transformObject(debugPath, target, {
                signature: invokeSerializeJson,
                email_header: invokeSerializeJson,
                unipass_signature: invokeSerializeJson,
            });
        }
        else {
            // register
            formatSign = transformObject(debugPath, target, {
                signature: invokeSerializeJson,
                email_header: invokeSerializeJson,
            });
        }
    }
    else {
        // add key 1
        formatSign = transformObject(debugPath, target, {
            signature: invokeSerializeJson,
            oldkey_signature: invokeSerializeJson,
        });
    }
    if (validation) {
        if (target.emailHeader) {
            if (target.unipassSignature) {
                // add key 2
                validators_1.validators.ValidatSignAddKey2(formatSign, {
                    debugPath: `(transformed) ${debugPath}`,
                });
            }
            else {
                // register
                validators_1.validators.ValidatSignRegister(formatSign, {
                    debugPath: `(transformed) ${debugPath}`,
                });
            }
        }
        else {
            // add key 1
            validators_1.validators.ValidatSignAddKey1(formatSign, {
                debugPath: `(transformed) ${debugPath}`,
            });
        }
    }
    return formatSign;
}
exports.TransformSign = TransformSign;
function TransformTransaction(transaction, { validation = true, debugPath = 'transaction' } = {}) {
    const formateTransaction = transformObject(debugPath, transaction, {
        inner: toInvoke(TransformInner),
        sig: toInvoke(TransformSign),
    });
    if (validation) {
        validators_1.validators.ValidateTransaction(formateTransaction, {
            debugPath: `(transformed) ${debugPath}`,
        });
    }
    return formateTransaction;
}
exports.TransformTransaction = TransformTransaction;
exports.transaction = {
    TransformTransaction,
    TransformRawTransaction,
    TransformInner,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3RyYW5zZm9ybWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEM7QUFFMUMsU0FBUyxtQkFBbUIsQ0FBQyxTQUFpQixFQUFFLEtBQVU7SUFDeEQsSUFBSSxLQUFLLFlBQVksTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLFlBQVksUUFBUSxFQUFFO1FBQ3RFLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQ3RCLFNBQWlCLEVBQ2pCLE1BQVcsRUFDWCxJQUFTLEVBQ1QsUUFBa0I7SUFFbEIsTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDLEVBQUU7UUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLFNBQVMscUJBQXFCLENBQUMsQ0FBQztLQUNoRTtJQUNELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVsQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbEQsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3JDLENBQUM7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