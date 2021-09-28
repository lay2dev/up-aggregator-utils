import test from 'ava';
import { SignMessage } from '.';
import { ActionType, KeyType } from '..';
const NodeRSA = require('node-rsa');
const rsaKey = new NodeRSA(
  `-----BEGIN PRIVATE KEY-----
  MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6HH82NIk1cm+OGE1mvNewjM4wJjwmI4lfctbY+6+5LGw9qfJ6jQX0/na8eSBQPnhooiTIqxNHKTarP5q9Ca4wih9ns4qOT6o9U00fsx4fgTLNArdVAETuhpbxgnfCnMZ/H7ktoacKVQQYArU1GGiWCSAgB47QOBW6dJlXlfPFSe29nIEPc+mm+UXW2xq/iZfxY9f92ALvMw84hoQv7CmpkAi1qw/8n+DD03ruxBZz0FI7fxgqY/vrKXqFu/0n7H2jAokTGKZHGUHwPNvLrDJ0P7Y1+h2/C1Y8n40EiEf+TutSWfhTUwnU5Rz82m4IMThSqxrj6QN2QXJ49wB56XObAgMBAAECggEAQaED8RL0oZ7RnNuQC98i9lSo7wzEoDRe4IRIJCsY6+Uw5EvWQIYTaDIFn+/cx79HyaoH66V8PldXumrK/8d2oBJNAc4r2YRZRZfm9fs9b6GpTucazEQ0iqJ2fwLhhYSwcKq4q9E57OhO8cKesPMDCol8RR81KtLkQqSUYHD2DgcpINaL1SFZNn9RcrOs53Ma1b27WOt+TivUDOLsAt9AvtVuzr5S2jUjnLVvNngGbmamotfuhDYAV9SzeYiwFOpfPnsw+4Lq7egWVXGfUZcR962xxzjvDaGuNUsif8rcTMxKl9aywYWfPNMUByeCmspbf+eWqp11VHWevrDVfyxQEQKBgQD5Ba6uzKb25dS3lkU3acigKHFKk5JXtSdraO0cEEcYHCqVJFBUBW3zZ0eMFQkFY4WJFJDGIy11A9w3LVvd3PbT2Hm/H5zXgzIAhCGS4YLmcBVn3Zrg8HHdlYxknUaJ57JjQceAtQ/RcidMdcGdx6IX+4sOTv99qEpyXT8Yn0OZ6wKBgQC/U4jEfXD8qMGGpcZFqoFl7Wsgfb37RkBGv7WTxSbvwTmAQqTRTjZSQSWH0oiPqnxu9LYtVr9JIh8P6T3TbeoO31O1DqbPYclmWQx4v9HkOygDdtIpHGt91kmktnGfbi0DSUdaAwzLhmPWAiRokOy5wFdVsdEagvS+cz5/UBLxEQKBgQDelXCtN6op2AcJzhyySjCUz3FsWnmdQgQpItGFmxsg9tQtGRdf8rZzsSYnlQnKMknC3IoHQJw6Eqg8/aM2rXJGqyEvb39OtyrzgSdNVZsehKLtgwwT8Xeluy2RJW9OhrZRuBMt/SlVafashjj44d8GFsYVlRETbWCV1rk2Ne1D3wKBgEsscTJy7y/2xoM3I15ADjOUQ2EyxrCx+5NQw/FZp2DQlN02UjgC+Qj8m9hv+kQogle+Qs4xpVsA0x+XTzmBmFNboDIlnZkiHNXf6yyOgdOhAqnJx+1rQzjgN3NGVAKGcZ0275gIVsCo/xUZJmEHgFvDnQ0IntZB2hPyh/3R4n9hAoGBAIZZHGa9X8PzspJUjyuvn2k/HQIj8hsymtCJPbzTc4NSqlIj2EfrN07WhoaT81bfZ4NGMgIE/2UCbk4iUJNJUJrg8UHQscIXJajd4pBESbVcPgPH2nbNpW5qKDrL5fWA4AGjoWqeGnnb1aUPMllS1rbjVdnb3RzVblre6V4lGNaD
  -----END PRIVATE KEY-----`
);
rsaKey.setOptions({ signingScheme: 'pkcs1-sha256' });

const rawData = {
  action: ActionType.REGISTER,
  username: 'code',
  registerEmail: 'hi.ellen@qq.com',
};

test('test Transaction getSignMessage validate', async (t) => {
  console.log(rawData);
  const data = new SignMessage(rawData);
  const hash = await data.messageHash();
  const sig = rsaKey.sign(hash.hexToBuffer(), 'hex');
  console.log('hash', hash);
  console.log('rsaSig', sig);
  t.is(hash.length, 748);
});
