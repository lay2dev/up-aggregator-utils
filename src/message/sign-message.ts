import { ActionType, HashRawData, sha256HashData } from '..';

import { encodePacked, soliditySha3 } from 'web3-utils';
let source = 'unipass-wallet';

export class SignMessage {
  constructor(private inner: HashRawData) {}
  messageHash(): string {
    if (this.inner.action == ActionType.newAdminKeyType) {
      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.keyType, t: 'uint8' },
        { v: this.inner.pubKey, t: 'bytes' }
      )!;
      console.log('-----------data-----------');
      console.log(data);
      const hash: string = soliditySha3(data) as string;
      console.log('-----------hash-----------');
      console.log(hash);
      return hash;
    }

    if (!this.inner.registerEmail || !this.inner.username) {
      throw new Error(`SignMessageError: not find username or registerEmail`);
    }

    if (this.inner.action == ActionType.REGISTER) {
      source = this.inner.source ? this.inner.source : source;
      console.log('------------');

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: source, t: 'string' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (
      this.inner.action == ActionType.ADD_LOCAL_KEY ||
      this.inner.action == ActionType.QUICK_ADD_LOCAL_KEY
    ) {
      if (!this.inner.nonce || !this.inner.pubKey) {
        throw new Error(`SignMessageError: not find nonce or not find pubKey`);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      let data: string = '';
      if (this.inner.ethSig) {
        data = encodePacked(
          { v: this.inner.chainId, t: 'uint8' },
          { v: this.inner.action, t: 'uint8' },
          { v: sha256HashData(this.inner.username), t: 'bytes32' },
          { v: this.inner.nonce, t: 'uint32' },
          { v: this.inner.ethSig, t: 'bytes' }
        )!;
      } else {
        data = encodePacked(
          { v: this.inner.chainId, t: 'uint8' },
          { v: this.inner.action, t: 'uint8' },
          { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
          { v: sha256HashData(this.inner.username), t: 'bytes32' },
          { v: this.inner.nonce, t: 'uint32' },
          { v: this.inner.keyType, t: 'uint8' },
          { v: this.inner.pubKey, t: 'bytes' }
        )!;
      }

      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.DEL_LOCAL_KEY) {
      if (!this.inner.nonce || !this.inner.pubKey) {
        throw new Error(`SignMessageError: not find nonce or not find pubKey`);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }
      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' },
        { v: this.inner.keyType, t: 'uint8' },
        { v: this.inner.pubKey, t: 'bytes' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.UPDATE_RECOVERY_EMAIL) {
      if (!this.inner.nonce || !this.inner.threshold) {
        throw new Error(
          `SignMessageError: not find nonce or nof find threshold `
        );
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const emails = [];
      for (let item of this.inner.recoveryEmail) {
        emails.push(sha256HashData(item));
      }
      console.log(emails);

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' },
        /* tslint:disable-next-line */
        { v: emails as unknown as string, t: 'bytes32[]' },
        { v: this.inner.threshold, t: 'uint8' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.UPDATE_QUICK_LOGIN) {
      if (!this.inner.nonce) {
        throw new Error(`SignMessageError: not find nonce `);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' },
        { v: Number(this.inner.quickLogin), t: 'bool' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.START_RECOVERY_1) {
      if (!this.inner.nonce) {
        throw new Error(`SignMessageError: not find nonce `);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' },
        { v: Number(this.inner.resetKeys), t: 'bool' },
        { v: this.inner.keyType, t: 'uint8' },
        { v: this.inner.pubKey, t: 'bytes' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.CANCEL_RECOVERY) {
      if (!this.inner.nonce) {
        throw new Error(`SignMessageError: not find nonce `);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.BIND_EMAIL) {
      if (!this.inner.nonce) {
        throw new Error(`SignMessageError: not find nonce `);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: sha256HashData(this.inner.bindEmail), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.REMOVE_VERIFIED_KEY) {
      if (!this.inner.nonce) {
        throw new Error(`SignMessageError: not find nonce `);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' },
        { v: this.inner.keyType, t: 'uint8' },
        { v: this.inner.pubKey, t: 'bytes' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else if (this.inner.action == ActionType.REMOVE_VERIFIED_DISCORD) {
      if (!this.inner.nonce) {
        throw new Error(`SignMessageError: not find nonce `);
      }
      if (!this.inner.nonce.startsWith('0x')) {
        throw new Error(`SignMessageError: nonce not hex data`);
      }

      const data: string = encodePacked(
        { v: this.inner.chainId, t: 'uint8' },
        { v: this.inner.action, t: 'uint8' },
        { v: sha256HashData(this.inner.registerEmail), t: 'bytes32' },
        { v: sha256HashData(this.inner.username), t: 'bytes32' },
        { v: this.inner.nonce, t: 'uint32' },
        { v: this.inner.discordUuid, t: 'bytes32' }
      )!;
      console.log('-----------data-----------');
      console.log(data);

      const hash: string = soliditySha3(data) as string;

      console.log('-----------hash-----------');
      console.log(hash);

      return hash;
    } else {
      throw new Error(`SignMessageError: action error`);
    }
  }
}
