export enum SDKActionType {
  REGISTER = 'register',
  ADD_KEY = 'add_key',
  ADD_LOCAL_KEY = 'add_local_key',
  DEL_KEY = 'delete_key',
  UPDATE_QUICK_LOGIN = 'update_quick_login',
  UPDATE_RECOVERY_EMAIL = 'update_recovery_email',
  START_RECOVERY = 'start_recovery',
  CANCEL_RECOVERY = 'cancel_recovery',
  COMPLETE_RECOVERY = 'complete_recovery',
}

export interface UserInfoResult {
  registerEmail: string;
  quickLogin: boolean;
  localKeys: Pubkey[];
  recoveryEmail: RecoveryEmail;
  username: string;
  nonce: string;
  pendingState?: {
    pendingKey: string;
    replaceOld: boolean;
    timeCell: string;
  };
}
export interface RecoveryEmail {
  threshold: number;
  firstN: number;
  emails: string[];
}

export interface Pubkey {
  rsaPubkey?: { e: number; n: string };
  secp256k1?: string;
  secp256r1?: string;
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
  username: string;
  pubkey?: pubkey;
  action: Action;
}
export interface pubkey {
  type: string;
  value: any;
}

export interface registerInner {
  action: string;
  pubKey: string;
  keyType: string;
  username: string;
  registerEmail?: string;
  nonce?: string;
  quickLogin?: boolean;
  recoveryEmail?: string | null;
}

export interface Action {
  registerEmail?: string;
  username?: string;
  pubkey?: Pubkey;
  recoveryEmail?: RecoveryEmail | null;
  quickLogin?: boolean;
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
  result: string | UserInfoResult[] | TransactionResult | TransactionResult[];
  id: number;
}

export interface TransactionParams {
  inner: TransactionInner;
  sig: Sign;
}
export interface Sign {
  signature: string;
  emailHeader?: string;
  oldkeySignature?: string;
  unipassSignature?: string;
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
