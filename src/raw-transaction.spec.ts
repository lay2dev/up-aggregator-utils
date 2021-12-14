import test from 'ava';
import {
  TransactionResult,
  TransactionTemple,
  UserInfoResult,
} from './interface';
import { RawTransaction } from './raw-transaction';

const txRawData = {
  id: 2,
  jsonrpc: '2.0',
  result: {
    transaction_inner: {
      nonce: '0x1',
      type: 'register',
      action: {
        register_email: 'johnz@lay2.dev',
        pubkey: '0x01415498a39E37B7C17b586AB8AB77BE0B518DBDFc',
        recovery_email: null,
        quick_login: true,
      },
    },
    tx_status: {
      ckb_tx_hash:
        '0x067da578be477e3b0596a282e0fea6c33121f40df2e9dbe787f00d1249af01a2',
      status: 'pending',
    },
  },
};

const historyTxRawStringData = {
  id: 2,
  jsonrpc: '2.0',
  result: [
    {
      transaction_inner: {
        nonce: '0x1',
        type: 'register',
        action: {
          register_email: 'johnz@lay2.dev',
          pubkey: '0x01415498a39E37B7C17b586AB8AB77BE0B518DBDFc',
          recovery_email: null,
          quick_login: true,
        },
      },
      tx_status: {
        ckb_tx_hash:
          '0x067da578be477e3b0596a282e0fea6c33121f40df2e9dbe787f00d1249af01a2',
        status: 'pending',
      },
    },
    {
      transaction_inner: {
        nonce: '0x1',
        type: 'register',
        action: {
          register_email: 'johnz@lay2.dev',
          pubkey: '0x01415498a39E37B7C17b586AB8AB77BE0B518DBDFc',
          recovery_email: null,
          quick_login: true,
        },
      },
      tx_status: {
        ckb_tx_hash:
          '0x067da578be477e3b0596a282e0fea6c33121f40df2e9dbe787f00d1249af01a2',
        status: 'pending',
      },
    },
  ],
};

const userInfoRawData = {
  jsonrpc: '2.0',
  result: [
    {
      commit_status: 'committed',
      local_keys: [
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xce36924f79b815139d38da4c05e6a4c78b78828f6f714fbd91c16cc01321eabb3783ddd7aabf2729c0d706fc4dca20a09da9df0fddaeff876e31388b5affe40cc7f463ef87d4370835cdae2dc4f3b9ebd4d3ec3ab0dd65e6d193bd1ccfd98b66bac4f5410cceb3e344c4142b0d019ee865b20f19f4ab2c0586056d68229a9085a0fe207c27bfac7a0e1ede3e4152e4503f7a83047252531a02073cb9a0c686aa4be85cbb26ee5c5917bf53edcd26a57978df6bc022c4a2d9df6b4a1fd6b571ea8de8dd678a0e796b6f1c7cf57f887dd7b3d71983dca2fae31357eefbbc0c50cb69a39442d62148fa6ec296e4158f60285edff7575660bc07d5b4722f07b06b9d',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0x919219b4f107eb95c1c4221dc448a1c18f9d0b03a64b1cc20ceb98348183808ad8ddfeea3310b7ab3ec1b2f1b8602dae01b497c67d5adc91d498bada6b8ba456ebeb1d8f0dc22a6a3e8082d15446d533378d2a7f790d1f58ce43133276ac95f3a7306403889f2e44cf3b417e7297127a5dce36b719adc9f2e40168af1b3667341860c43f569f4a87f3559333380520a902a7e03ff1cb54fc6f31f4f9aab99afdd231025f5e529878c7804e8991a2ad0e731aee8667cb0972b414c3242fc6b05547efb747cbc69ff2649ede2bccffdcf84e1d7670b253ddc5c2df3aef97d88488528abbdaf8f742af68968931b46221050d51628671713d6a03d45389a86bc363',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xb1b6e0dbb3e93d8a1b3d98785014d353ab41ec284960dcf6e6ae1341aa1d0170ae22472ac503dd4489da304c228b6f6998f437fd2fd23a715108a65b5a170ebfc86c83cc52fc1045afae912703e002b29db37ba7b7068146d636de37aa5fb192a2d7ebf0d81b838a668ca97c08adfae548f8b62aed0058c4712e98705446217da6cc8a2ffa95007f9d923ac1afc391c6b3b491ca1d7c6fc74a0cfbc782c25462558fc0152e6c535639db656350ff60c2df736ae42719f59c4cba2b6d136c4d4775175eb55dfa6567ff12d075aa55f2ab3380d2fd15bdae34bb534bc17c4b66ce1f709e8b264d6d41fcb4294b370d6c5a2fb089b4897ec89d4c384430fe239e21',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xb7dec4b5b730d3e70c6c686381c1b032ff43cc799cb433a3c3639ce1b912ebd739fa732e2dd6dae188f2338b1b37f73c0255a9e6383d5221d4f30073490ee69c9fe91cd32d664a8f20e1c0a1173c2dbbee34b777f7b727e86c3c90240ac5653f2088728e5774517e88793bd9d512571f05b487c82caf4d76679ab0557c60c0ab6af727ade24790b442a099870f11313b6b3ae1befe9c645ae3b069f3437a45af5f1901e8de5de4063e46b28298d854632904bbb8a3dd9b06491e89120d0902fa730566926eb73441b0ff7691002b1b19c2b31fb341f2204e79d1331e9df3ced5b14dd7f17c8ef767646906687c0e02d88b3fb7b0aac0926032518130a1731c9f',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xab877f8afcd3f8b95de9b365b9550955129aa932d7e732848cb83bbc6f1e9068f4c55cec21957c402d2bacad5056cc36786b2a2bd2d1bf8c9676d7b6f29d956396a4c120066ed5e2c1abe0fc7680b9d2a725a9abab1e0b3604da3a5d934db405dffb3734e0feb1aaf6752fc88b9dc9e4a957d1d2da0cf94befe14dda2048e57f8951cec5ab568ef324cc8e14d41ebc9d56db00f4400f4ab9b944b7425ae854108fc39db47ca3ebfef488024805d6e9a0f8a94e64180f73feca1ecf9592a7add211f15ab7305a6a231aeec5bda8f1876c4f8688a36e2a02df14fe92a10df9c2318fea7963fbd6eb58f13e17a8112ead21b8071f7a7232d3e3699a80ebe2ff15f7',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xde13be4a8fc9c5186fe77c3528d5a624fb5163ec5825dca894e96b5d3bf2b3d695369117c68eaa4917848fbc517d4437bdc464bb20374916dc8375db4e3415c56cf2718d949584ae9427f99a7b1055fef8e3135976a4588825ed2ed02926f5792b840d3ef7cb5a522bb4f7c101772a49ccd8f45ecab3c443a482b5a7808b173bc3ec82c34309cd2a764ba648d7ffb82b2d385ccb2c4e3bcedf573996a7de688b8b634fa730718b78ef4c3dcb6c65224498ab7b3ef5a727356da02c22dd732b937ed150c461b2dee751109c4fc1d0dbb20dc0df2618586d8ea9c0990103608e6d01d3e367e3581b0cfb77eefe9db6df3d7b157335b819e4d8c29a41c529eee769',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xb751b8e80195c1dd399b1a46fb664491d53abbcb25cfc21ef8da2483f12a0a3fdadb7347c52298e4286357309fa44b676db8e6dc17d611ebe6b57962cbb6125a679d3e00264451cf46a3ac92f06d2f3f56b0fdc1d5ec4b59c345568f79234eb0acd17a64e39430b41db32e457e0262122d3f3370fc138978fb5f8cd2d044769f4fd5f859cddba89dade75065cfafb099b1971fe1daa11a5934acaa2b7df4d142419db68bcdd140ffa849eefef9d2144f1634b06feb360f3fd93fabb55c2f6495d61f3562e15ebe884d31f0120744ecb541a703536ba25fa17f1a91416cabb9019c1f26e86681a449f4cb83c2c7a197a7781ea14ce8c75ed50ec693fcf90dabe9',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xe2e36ef807e2a5834abb30227351374c8cb605a78cd1cb994be1ec1b1c3ea380b08d0b8f475005031dd92a09e8858daa4cf456277c6173997c73cdd2c0a567bbe4349cbc446677919e9a675133261401392650ffdb0b0206b0b70d7e07e625bd18001097d25f868b2e934f6f157a24f9d0f5b041213dd9a2939ee9abd105e1ef3518fc942dcac758a8a5a6aa55c8056124611e6aaf2a0fe16c1bf960970ef56ad5c552cafa23e82f3773be406890b2c1043602e46b4bd8a9a9aed6e403a88e3fccce19c64c1a62db367dc643834dca5a428ea65fcb7182ce23b1813c32d17644572ce449e7d024d77617faab7bb90f1991f7754481f404de1cbe21177af801d5',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0x9906f925f9acd2ed5191b1c01ee983ed25c63fba1ed9bbf0f3f03f5073ab91d1fe2a6a3f8fc3ed19a95a40b0e6a117d0746f1fb787f8dff8326c87e112074773d0ca9a3cd31a9aa97dfd6d2d51aec86daed64bf3e39934fdf687a27f745ad4106b45ca396efa5e71153c1669b44971d43c9b76d4515f5042e71c8f92cb8ce1a810107acc8e1dde09fe631a7eb922e472e18eacfcc04df80ab23fb63b125547b7345bf37be2f351ed11146231b44f04ffed8cece2a332c6b356da774d438ca110977df3874da53feb0996acf9f06eb620b9a7038f898cfe44a3c06402e51f3b7a303669d95de1e0cded1b5ec36f2a6575f04831b3c7e70d81b1064ab9c6143625',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xbd680e294f6fe569e39b397919107ef0324feb8c537c0a5b992f806be85b0caad9a56d07a1b6622f3c3bdb5f73408fe46ebaaabc80c66949bf306d307251bdddbd1bcef6b2f43d1c005e30ba1544f6db8abc71531230afc33f58a47ca3af47e35604d605e3255f7456ac09afdebb5db30a0e6a346f8b7e0cc68860ab916c116ddcdf3171b69e1275ca861a1d18ae1336a90e1cb1044715410f4006c789e82dff8de3f3e78362eb5c1079e6115d13c3644c8074ae286f3868dc5c719246938a539ce08b1ea61f6762f5476c93eab032bc2642e67aff5d397a83afa2986f33a82e130024d4dbe755784db8b2b9aac692fdb7607b16cd1f5c8818f1eea2ece5fb9f',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0x9e66aaedbd48628c65589aac0c9134b2959a5e2d33f42585fe9550eb2d3a341e13c805218776d501174341cfe778f89f3867c9b60d6941403c742af0273a75bdff01758f4733ddc2928cd692bbbbc53c2500a9a950f8462de7b2637b00518ec1f1b621eb076c9826f7f6772c5717c8168f3fa62ed3908203bbb1e80e3e46d633425f5053dc5fffb47f97019f3d4eefc96ad5d26bc863fc0c2bcba25f52bd5cda052bb9bba8b7b6ade5a3916ce7192428c911877a59fa5079f8c7db55083484abbe14de615761f098f6f66fb4d7080ca1a306dba8717a0bbd25deb4e46881678558c3ae23d4e7c3c4ef0156d4a722b58dbe3ba999a321a5c918bd13b268f39e83',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xd5ea922c64663990a38efd946a99b1bb4d74f3401f95ae785e8e820bebcda73a9cf567211dbfaee30f6a1a2e89f5350503c547b1a9620149baa4dda32ee807303366aab5a10756cc18b507c44e5495532eedc9ca5c417e7c38e58193ead5c2d0a8448c2cd4f0c6e90ac4f8db5cf3c1df0497e663c1135544f57f18137474239e601840caf6d1e865b8e5c4972617555109d40566d20c28b65f572388221556295644fabc3894a35a2565da468c41285190ce8ca1cb5413c9c48d068080cc80b146bd23e60d3e65f4a28b8423f861fe0f1e7d674a640316a9cb9a89b03538c2cd59d968087b4489bac375f18ccb29effe507529ff78e1383e7172c78d455e96e5',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xb3c4989dfe06629bc789789e2d5e5413656ccae94f60f33b44b541e908c38489376e2f4d63fedc0d11c6c9e9f4b7c5368bb6271e6ef8c29594a123039e1b44ece66589974b6f5fa757221740fce33f2da69fdd449507ebc33d849e9ebf75583471ec3115c8f9bbbce50f780c2a9a8b4203fe0498bff6188064a0c008254d1275ea51962ff9984d873542ec8b8e1959a907c08d359efc8477024a94a2a3bb10ccc94d022bf671bfd0b789ebdbecc1cf753ab11b930b3ca715ba48185bb7ce1b317bf9d41cdb9f86c95bcf82f534f47ec280fff2ee0b8d0a42f3f817f6e9a530bdb10fbcf13736be4ec296f2445ec33d8fc07780a8a1f1b7897e05625aea2eb879',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xc10ddc9fa686aa0cfdaa22894852259a76e456f889f1484717a8eee6b6510471c08bd3df99c13c1fe9839654e04904f9692648c1ebda04b5396cfbee904dc23d6f118a75f753c70b4b5caee870f04b796f15dfda1d0d76f1c7755f356f0a97a229a2ee5e5961ba0a3ee99a4346d6a73e43530d141f18e83af8f6c1aab9c7ac9c855b5c070b4e068702e89c4767d18e914c21c60aadc2258fafc0fd8734780cc89841ba74d345450e5904560d5b9298a6466306c1100dc8d3cc1fe2505d29356b948f3db3d2021bd772fe2ca58c5f196e0856e1e04d6cf3b5a4de33d9962377dff8f36ac3f04cf204c7a32ac508d9e064e77c2a77c4b90a2e99cd831e2913a139',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0x98a94f99fc40b3f92f0ea816425f1f4c11a11a5a4f93baa643bf7245e333985117ce59f54d3b31e49fbff2e5cb0e9a796702a6a6fb7730f7efcd5dec6b4898ffdfb9e3792d9822d7769b7f93b28d2b758cb94c1a98b21b4ef693c0f633f55e8f42d42e09ce2fc123bf3bc0b3cadcaaa73c7736ca7ee00b298778359c699bd0b8d6537419de622d880ded0b5b96ac3fa8956104fb550c33f38aa6038f2c57f5fe1c22e09f63d6eead9b1441da36e396ea5e1bb2043b59ba1f5ad53e79d708b2aef2f4beabe5aed83cc18b2e8b533c02c70c5d3946f56c4a58fefc56a350e12d4132027fb6c21bc34ea636a985b46dd9fb45b3c62a2cf9f82a085ca3da624e0acf',
          },
        },
        {
          rsa_pubkey: {
            e: 65537,
            n: '0xa6c6ad1bab5e8d44b690bddd4a981dcfddd213a8114b2ec4c8600e7f5793a4dc03c56822e214cdb381a691150720bf20be4d3c0678cfeb9d828acfa2880164f85532e14e23666ddddbfc1eeaaeaadd14f0ec085719d97992ed938f14fb8462cd5bbda9df3651951563cda3f0d2ebea29fcde545c904b327bfefd0bd6eec29f4766af37be23531bdf62115cff08310417451613030793e57919f525c6b06fd7118d01d471c7939805fee61bb7b38882438da9574dc54cae5eb92b9a29b0de74d435b1ead74879172a0c6622096d062be899d26d91cc8e2480410a9358c240c2efd9b8e320ab0037165bff049dee546142f06fd1654bc374b82051d81c01fa54cd',
          },
        },
      ],
      nonce: '0x24',
      pending_state: {
        pending_key: {
          rsa_pubkey: {
            e: 65537,
            n: '0xadb2bfd29b475a914362ead86131a7227f5e8e4b524b70bbc879cd233da9e71ab9f122ee72dc25230c5dea5a7e56960abcba0f97cc47b9df185a0d49cd650aae8cc3c88ff97abd4e1554e831d2f345ee3f744d9f6e62bea0cdc7c5c833306b11196aa55a4a2dc6648c662bb198a66267d3289eef97d1f69cb2732ae1e2c1abde7ce0a80ed6967b93c6dda1f7fae4dbf6a1c7b2dee96f7c1df03281f2b9ee6de3720500a66f35583b971ad437a27b5847a11cbdff5282f3555ed190491f6b43595ff4a0a145ba442c6a47a0bb059e05bc908d352209934f90553eff5dad8ac896e9f6890e9402cdefab0942e229a31689dfddde42a35759f1b1203e1e8d50c50d',
          },
        },
        replace_old: false,
        start_block: 1637046564031,
      },
      quick_login: true,
      recovery_email: {
        emails: [
          '0x0d5cf706ba79f08c89e7dcfb5a5bbc709a1cc0a26587024600515f2649cb66ab',
        ],
        threshold: 1,
      },
      register_email:
        '0x0d5cf706ba79f08c89e7dcfb5a5bbc709a1cc0a26587024600515f2649cb66ab',
      username:
        '0xd8b9aaff7a55c04c060b9182e3da4e8f52251068c27077c87d6d901bac319db9',
    },
  ],
  id: 4456459,
};

const TxIndoRawData = {
  jsonrpc: '2.0',
  result: [
    {
      hash: '0x...',
      child_tx: '0x...',
      tx_status: 'comitted',
    },
  ],
  id: 4627112,
};

interface stringResult {
  result: string;
}

const stringRawData = { jsonrpc: '2.0', result: '0x2cb4', id: 2 };

// test('test rawTransaction tx txRawData', async (t) => {
//   const data = new RawTransaction(txRawData);
//   const formateData = data.transform() as TransactionResult;
//   console.log(formateData);
//   t.is(formateData.txStatus.ckbTxHash, txRawData.result.tx_status.ckb_tx_hash);
// });

// test('test rawTransaction historyTxRawData ', async (t) => {
//   const data = new RawTransaction(historyTxRawStringData);
//   const formateData = data.transform() as TransactionResult[];
//   console.log(formateData);
//   t.is(
//     formateData[0].txStatus.ckbTxHash,
//     historyTxRawStringData.result[0].tx_status.ckb_tx_hash
//   );
// });

test('test rawTransaction userInfoRawData ', async (t) => {
  const data = new RawTransaction(userInfoRawData);
  const formateData = data.transform() as UserInfoResult[];
  console.log(formateData[0].pendingState);

  t.is(formateData[0].registerEmail, userInfoRawData.result[0].register_email);
});

//

// test('test rawTransaction userInfoRawData ', async (t) => {
//   const data = new RawTransaction(TxIndoRawData);
//   const formateData = data.transform() as TransactionTemple[];
//   console.log(formateData);
//   console.log(formateData[0].txStatus, TxIndoRawData.result[0].tx_status);

//   t.is(formateData[0].txStatus, TxIndoRawData.result[0].tx_status);
// });

// test('test rawTransaction stringRawData ', async (t) => {
//   const data = new RawTransaction(stringRawData);
//   const formateData = data.transform();
//   console.log(formateData);
//   t.is(formateData, stringRawData.result);
// });
