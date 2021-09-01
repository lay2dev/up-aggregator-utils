"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawTransaction = void 0;
const _1 = require(".");
class RawTransaction {
    constructor(transactionResult) {
        this.transactionResult = transactionResult;
    }
    raw() {
        return this.transactionResult;
    }
    transform() {
        if (typeof this.transactionResult.result == 'string') {
            return this.transactionResult.result;
        }
        return _1.transaction.TransformRawTransaction(this.transactionResult.result);
    }
    serializeJson() {
        if (typeof this.transactionResult.result == 'string') {
            return this.transactionResult.result;
        }
        return _1.transaction.TransformRawTransaction(this.transactionResult.result);
    }
}
exports.RawTransaction = RawTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LXRyYW5zYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Jhdy10cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3QkFBNkQ7QUFFN0QsTUFBYSxjQUFjO0lBQ3pCLFlBQTRCLGlCQUFzQjtRQUF0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQUs7SUFBRyxDQUFDO0lBRXRELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7U0FDdEM7UUFDRCxPQUFPLGNBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxjQUFXLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDRjtBQXBCRCx3Q0FvQkMifQ==