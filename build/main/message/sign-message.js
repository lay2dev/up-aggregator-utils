"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignMessage = void 0;
const __1 = require("..");
const web3_utils_1 = require("web3-utils");
let source = 'unipass-wallet';
class SignMessage {
    constructor(inner) {
        this.inner = inner;
    }
    messageHash() {
        if (!this.inner.registerEmail || !this.inner.username) {
            throw new Error(`SignMessageError: not find username or registerEmail`);
        }
        if (this.inner.action == __1.ActionType.REGISTER) {
            source = this.inner.source ? this.inner.source : source;
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: source, t: 'string' });
            return hash;
        }
        else if (this.inner.action == __1.ActionType.ADD_LOCAL_KEY ||
            this.inner.action == __1.ActionType.QUICK_ADD_LOCAL_KEY) {
            if (!this.inner.nonce || !this.inner.pubKey) {
                throw new Error(`SignMessageError: not find nonce or not find pubKey`);
            }
            if (!this.inner.nonce.startsWith('0x')) {
                throw new Error(`SignMessageError: nonce not hex data`);
            }
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: this.inner.nonce, t: 'uint' }, { v: this.inner.keyType, t: 'uint8' }, { v: this.inner.pubKey, t: 'bytes' });
            return hash;
        }
        else if (this.inner.action == __1.ActionType.DEL_LOCAL_KEY) {
            if (!this.inner.nonce || !this.inner.pubKey) {
                throw new Error(`SignMessageError: not find nonce or not find pubKey`);
            }
            if (!this.inner.nonce.startsWith('0x')) {
                throw new Error(`SignMessageError: nonce not hex data`);
            }
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: this.inner.nonce, t: 'uint' }, { v: this.inner.keyType, t: 'uint8' }, { v: this.inner.pubKey, t: 'bytes' });
            return hash;
        }
        else if (this.inner.action == __1.ActionType.UPDATE_RECOVERY_EMAIL) {
            if (!this.inner.nonce || !this.inner.threshold) {
                throw new Error(`SignMessageError: not find nonce or nof find threshold `);
            }
            if (!this.inner.nonce.startsWith('0x')) {
                throw new Error(`SignMessageError: nonce not hex data`);
            }
            const emails = [];
            for (let item of this.inner.recoveryEmail) {
                emails.push(__1.sha256HashData(item));
            }
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: this.inner.nonce, t: 'uint' }, { v: '0x' + emails.join(), t: 'bytes' }, { v: this.inner.threshold, t: 'uint' });
            return hash;
        }
        else if (this.inner.action == __1.ActionType.UPDATE_QUICK_LOGIN) {
            if (!this.inner.nonce) {
                throw new Error(`SignMessageError: not find nonce `);
            }
            if (!this.inner.nonce.startsWith('0x')) {
                throw new Error(`SignMessageError: nonce not hex data`);
            }
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: this.inner.nonce, t: 'uint' }, { v: Number(this.inner.quickLogin), t: 'bool' });
            return hash;
        }
        else if (this.inner.action == __1.ActionType.START_RECOVERY) {
            if (!this.inner.nonce) {
                throw new Error(`SignMessageError: not find nonce `);
            }
            if (!this.inner.nonce.startsWith('0x')) {
                throw new Error(`SignMessageError: nonce not hex data`);
            }
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: this.inner.nonce, t: 'uint' }, { v: Number(this.inner.resetKeys), t: 'bool' }, { v: this.inner.keyType, t: 'uint8' }, { v: this.inner.pubKey, t: 'bytes' });
            return hash;
        }
        else if (this.inner.action == __1.ActionType.CANCEL_RECOVERY) {
            if (!this.inner.nonce) {
                throw new Error(`SignMessageError: not find nonce `);
            }
            if (!this.inner.nonce.startsWith('0x')) {
                throw new Error(`SignMessageError: nonce not hex data`);
            }
            const hash = web3_utils_1.soliditySha3({ v: this.inner.action, t: 'uint8' }, { v: __1.sha256HashData(this.inner.registerEmail), t: 'bytes32' }, { v: __1.sha256HashData(this.inner.username), t: 'bytes32' }, { v: this.inner.nonce, t: 'uint' });
            return hash;
        }
        else {
            throw new Error(`SignMessageError: action error`);
        }
    }
}
exports.SignMessage = SignMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lc3NhZ2Uvc2lnbi1tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUE2RDtBQUU3RCwyQ0FBMEM7QUFDMUMsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7QUFFOUIsTUFBYSxXQUFXO0lBQ3RCLFlBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBRyxDQUFDO0lBQzFDLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLGNBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3hELE1BQU0sSUFBSSxHQUFXLHlCQUFZLENBQy9CLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFDcEMsRUFBRSxDQUFDLEVBQUUsa0JBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFDeEQsRUFBRSxDQUFDLEVBQUUsa0JBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFDN0QsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FDMUIsQ0FBQztZ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