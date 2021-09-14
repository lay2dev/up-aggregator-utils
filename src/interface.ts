export interface UserInfoResult {
  registerEmail: string;
  quickLogin: boolean;
  localKeys: string[];
  recoveryEmail: {
    threshold: number;
    firstN: number;
    emails: string[];
  };
  pendingState: {
    pendingKey: string;
    replaceOld: boolean;
    timeCell: string;
  };
}

export interface Targets {
  to: string;
  amount: string;
}

export interface Message {
  message: string;
}

export interface TransactionInner {
  type: string;
  nonce: string;
  username?: string;
  pubkey?: pubkey;
  action: Action;
}
export interface pubkey {
  type: string;
  value: any;
}

export interface Action {
  registerEmail: string;
  username?: string;
  pubkey: string;
  recoveryEmail: string | null;
  quickLogin: boolean;
}

export interface TxStatus {
  ckbTxHash: string;
  status: string;
}

export interface TransactionResult {
  transactionInner: TransactionInner;
  txStatus: TxStatus;
}

export interface ResponseInfo {
  jsonrpc: string;
  result: string | UserInfoResult | TransactionResult | TransactionResult[];
  id: number;
}

export interface TransactionParams {
  inner: TransactionInner;
  sig: string;
}

export interface UniTokenModel {
  transform(): any;
  serializeJson(): object | string;
}

export interface FormatOptions {
  section?: 'integer' | 'decimal';
  pad?: boolean;
  commify?: boolean;
  fixed?: number;
}
