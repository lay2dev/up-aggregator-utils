import { ArrayBufferReader, Reader, registerInner, StringReader } from '..';
import {
  RecoveryEmail,
  RegisterInner,
  Rsa,
  RsaPubkey,
} from './sign-message-base';

export class SignMessage {
  constructor(private inner: registerInner) {}
  sign(): string {
    if (this.inner.action == 'register') {
      const rsa = new Rsa(
        new Uint32Array([this.inner.pubkey.value.e]).reverse().buffer,
        this.inner.pubkey.value.n.reverse().buffer
      );
      const inner = new RegisterInner(
        new StringReader(this.inner.username).toArrayBuffer(32),
        new StringReader(this.inner.registerEmail).toArrayBuffer(32),
        new RsaPubkey(rsa),
        new RecoveryEmail(1, 1, [
          new StringReader(this.inner.registerEmail).toArrayBuffer(32),
        ])
      );
      const message = (inner.serialize() as ArrayBufferReader).serializeJson();

      return message;
    } else {
      throw new Error(`SignError: action  error `);
    }
  }
}