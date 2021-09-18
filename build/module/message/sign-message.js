import { StringReader } from '..';
import { RecoveryEmail, RegisterInner, Rsa, RsaPubkey, } from './sign-message-base';
export class SignMessage {
    constructor(inner) {
        this.inner = inner;
    }
    sign() {
        if (this.inner.action == 'register') {
            const rsa = new Rsa(new Uint32Array([this.inner.pubkey.value.e]).reverse().buffer, this.inner.pubkey.value.n.reverse().buffer);
            const pubkey = new RsaPubkey(rsa);
            console.log(pubkey);
            const inner = new RegisterInner(new StringReader(this.inner.username).toArrayBuffer(32), new StringReader(this.inner.registerEmail).toArrayBuffer(32), pubkey, new RecoveryEmail(1, 1, [
                new StringReader(this.inner.registerEmail).toArrayBuffer(32),
            ]));
            console.log(inner);
            const message = inner.serialize().serializeJson();
            console.log(message);
            return message;
        }
        else {
            throw new Error(`SignError: action  error `);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lc3NhZ2Uvc2lnbi1tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBNEMsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxhQUFhLEVBQ2IsYUFBYSxFQUNiLEdBQUcsRUFDSCxTQUFTLEdBQ1YsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLE9BQU8sV0FBVztJQUN0QixZQUFvQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQUcsQ0FBQztJQUM1QyxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDbkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQ2pCLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FDM0MsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQzdCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUN2RCxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFDNUQsTUFBTSxFQUNOLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQzthQUM3RCxDQUFDLENBQ0gsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsTUFBTSxPQUFPLEdBQUksS0FBSyxDQUFDLFNBQVMsRUFBd0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0NBQ0YifQ==