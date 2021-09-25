"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const _1 = require(".");
const rawDataRegister = {
    type: 'register',
    nonce: '0x1',
    username: '0x231edefda5d8c03e2ca9c5f36c55b0735f5ce3289b21c7f2e153a5cd8a1882f9',
    action: {
        registerEmail: '0xb701f116b2c00668ae2a6fab119af93703df4c37ee79a7d63c4ff971b17a6902',
        quickLogin: false,
        pubkey: {
            rsaPubkey: {
                e: 65537,
                n: '0xc686b98fcdce07eb6c938c010b19dabae7bbfecb6cde8c45c533ab01f740536fd8de2de63395eebfc0c4a3f3ebcd2f60a7debdfd8aa86a592b6a51c135c3bbd8f195f8aef02db7e3eac04d3fff6dff69f6e90f48a31df80c1a5a92adeb051e1dd3242c8adf22259151eda9ce47169f1f198fa634e6e38de4df26738e38dd921269ac01acb7f74c329d93e1353a98aaa5cdae3e6c78ca615955f20adb1058046429542755c3151abade06e0af6470b088ff1781227999e60b17a214b8887739396f699c889125cf4c0dec45190fb079f11b0fec4c204875be6d66f8ad3a5e1523d5017b8989346ad91e7988942b008e6517c1ca1c2a71630e1e9096569583a181',
            },
        },
        recoveryEmail: {
            threshold: 1,
            firstN: 1,
            emails: [
                '0xb701f116b2c00668ae2a6fab119af93703df4c37ee79a7d63c4ff971b17a6902',
            ],
        },
    },
};
const rawDataAddKey = {
    type: 'add_key',
    nonce: '0x2',
    username: '0x231edefda5d8c03e2ca9c5f36c55b0735f5ce3289b21c7f2e153a5cd8a1882f9',
    action: {
        pubkey: {
            rsaPubkey: {
                e: 65537,
                n: '0xc686b98fcdce07eb6c938c010b19dabae7bbfecb6cde8c45c533ab01f740536fd8de2de63395eebfc0c4a3f3ebcd2f60a7debdfd8aa86a592b6a51c135c3bbd8f195f8aef02db7e3eac04d3fff6dff69f6e90f48a31df80c1a5a92adeb051e1dd3242c8adf22259151eda9ce47169f1f198fa634e6e38de4df26738e38dd921269ac01acb7f74c329d93e1353a98aaa5cdae3e6c78ca615955f20adb1058046429542755c3151abade06e0af6470b088ff1781227999e60b17a214b8887739396f699c889125cf4c0dec45190fb079f11b0fec4c204875be6d66f8ad3a5e1523d5017b8989346ad91e7988942b008e6517c1ca1c2a71630e1e9096569583a181',
            },
        },
    },
};
const rawDataDeleteKey = {
    type: 'delete_key',
    nonce: '0x2',
    username: '0x231edefda5d8c03e2ca9c5f36c55b0735f5ce3289b21c7f2e153a5cd8a1882f9',
    action: {
        pubkey: {
            rsaPubkey: {
                e: 65537,
                n: '0xc686b98fcdce07eb6c938c010b19dabae7bbfecb6cde8c45c533ab01f740536fd8de2de63395eebfc0c4a3f3ebcd2f60a7debdfd8aa86a592b6a51c135c3bbd8f195f8aef02db7e3eac04d3fff6dff69f6e90f48a31df80c1a5a92adeb051e1dd3242c8adf22259151eda9ce47169f1f198fa634e6e38de4df26738e38dd921269ac01acb7f74c329d93e1353a98aaa5cdae3e6c78ca615955f20adb1058046429542755c3151abade06e0af6470b088ff1781227999e60b17a214b8887739396f699c889125cf4c0dec45190fb079f11b0fec4c204875be6d66f8ad3a5e1523d5017b8989346ad91e7988942b008e6517c1ca1c2a71630e1e9096569583a181',
            },
        },
    },
};
const rawUpdateRecoveryEmail = {
    type: 'update_recovery_email',
    nonce: '0x2',
    username: '0x231edefda5d8c03e2ca9c5f36c55b0735f5ce3289b21c7f2e153a5cd8a1882f9',
    action: {
        recoveryEmail: {
            threshold: 1,
            firstN: 1,
            emails: [
                '0xb701f116b2c00668ae2a6fab119af93703df4c37ee79a7d63c4ff971b17a6902',
            ],
        },
    },
};
const rawUpdateQuickLogin = {
    type: 'update_quick_login',
    nonce: '0x1',
    username: '0x231edefda5d8c03e2ca9c5f36c55b0735f5ce3289b21c7f2e153a5cd8a1882f9',
    action: {
        registerEmail: '0xb701f116b2c00668ae2a6fab119af93703df4c37ee79a7d63c4ff971b17a6902',
        quickLogin: false,
        pubkey: {
            rsaPubkey: {
                e: 65537,
                n: '0xc686b98fcdce07eb6c938c010b19dabae7bbfecb6cde8c45c533ab01f740536fd8de2de63395eebfc0c4a3f3ebcd2f60a7debdfd8aa86a592b6a51c135c3bbd8f195f8aef02db7e3eac04d3fff6dff69f6e90f48a31df80c1a5a92adeb051e1dd3242c8adf22259151eda9ce47169f1f198fa634e6e38de4df26738e38dd921269ac01acb7f74c329d93e1353a98aaa5cdae3e6c78ca615955f20adb1058046429542755c3151abade06e0af6470b088ff1781227999e60b17a214b8887739396f699c889125cf4c0dec45190fb079f11b0fec4c204875be6d66f8ad3a5e1523d5017b8989346ad91e7988942b008e6517c1ca1c2a71630e1e9096569583a181',
            },
        },
        recoveryEmail: {
            threshold: 1,
            firstN: 1,
            emails: [
                '0xb701f116b2c00668ae2a6fab119af93703df4c37ee79a7d63c4ff971b17a6902',
            ],
        },
    },
};
const sig = {
    signature: '0xb369f79cf1c75b9616139e5a902c1784aa92a4b714c830eb73c508663559ba54f5e76777cdf7c1d087d5f8681d7cea9eca70d7cc3918bd82cb6755b3c73ac993e901ccea773150cf50b79e372a67b9d04253b1d3fd2eeb8ebf41ad825a25b42f87a0931f05275a1a9cae319f832503df83441132da9d8313b467b6227e95cae0b81e6d94f1335bff0d19a1071296d7c6b98068fe19c8a283958b0298bb8f7ffe1dd51bb0c0e5f04d6c2b5d76324eed8048aafedc9aa5621e057f4996308e4f0bd02dbf4b92ec1239c7c9cb90d688f6019956400c7bf179eb7d1ab06a21d8747007489025ec77c225ecd4827bb78d6bbc9cbb7db3d2bc7a8e5dd53fdb4a3d919f',
    emailHeader: 'Delivered-To: aven9241@gmail.com\nReceived: by 2002:a0d:eb13:0:0:0:0:0 with SMTP id u19csp596641ywe;\n        Wed, 22 Sep 2021 05:43:20 -0700 (PDT)\nX-Google-Smtp-Source: ABdhPJwz31BOU4Bm7NpCEDyvoRBkkRMpop8OWVjAe17Shgld7L/yphiVBvnA3o4S4HewC+suy6Aw\nX-Received: by 2002:a17:90b:4d05:: with SMTP id mw5mr10564995pjb.175.1632314600641;\n        Wed, 22 Sep 2021 05:43:20 -0700 (PDT)\nARC-Seal: i=1; a=rsa-sha256; t=1632314600; cv=none;\n        d=google.com; s=arc-20160816;\n        b=erC8Z2t8+4JBtDjV2Rg4C9Qb+wPH41/ExMX7zOvqgQeR/78Xy9+ZOGp0ix2koVn6cF\n         nXdLD36Mt8uIHNIVgvKUVGrj7pL3gdJpMbIrXSY5cRmPYaGN3h97WH7pTQ7Pbi7yjGcU\n         Ese27nysDLvXFV2+zKWglM7oLfXI2WUr0OyVXe49HcRe3r9ux7/WlBS3FZJBm7mKbi/W\n         nBKPYhoRUGzXlqq1NIzTuBCL2DyvINrwz6xpgQTrUZ5i03MpXDGd9rUe7qdgku/QBRax\n         LRG8281VDsFIzJY23E5pCX4hltB8rWuSTTKxyw3EyPZD/wgG4QnSWPDLdB6Qf/JlhH6e\n         01jw==\nARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\n        h=message-id:date:content-transfer-encoding:mime-version:subject:to\n         :from:dkim-signature;\n        bh=DN5Ek5YhafXJOr9c59kk7nop2KBUqjB8A+1MsY5q93o=;\n        b=QLCab4QOisQ6mEmowbtyiIA3iVxB0DGsbXBGxn0cKCKwa3fCS+Nk2BPY3WB58+b/Cw\n         nJheWGq8HSQZ7DVUDwYtB3C+6YWpEcaogF0qsFTDWVhrDANiKX1vvS5S1/51BUYdLr1L\n         IEsHpEJqFJ/VZpCHF+flRoWKpWhO8ZOsGZF/KDkMDRHC1HuBujgTxBIUffy/i6bWZaca\n         tw9Eh7PUI9oyromC93t5F18BXHzlhqaKFrjcDuzTZEDcPVioE0KOy67sIUBSjxEETN9E\n         5pRUPFG+hpVUa/RRrbMOghxT+Md3VcoRHbGgnvxB+OdLA1Mva8gncck6s3cb8BI9pYHK\n         YWJQ==\nARC-Authentication-Results: i=1; mx.google.com;\n       dkim=pass header.i=@foxmail.com header.s=s201512 header.b=EHFDkSqm;\n       spf=pass (google.com: domain of codecup@foxmail.com designates 203.205.221.149 as permitted sender) smtp.mailfrom=codecup@foxmail.com;\n       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=foxmail.com\nReturn-Path: <codecup@foxmail.com>\nReceived: from out203-205-221-149.mail.qq.com (out203-205-221-149.mail.qq.com. [203.205.221.149])\n        by mx.google.com with ESMTPS id o15si2124928plg.395.2021.09.22.05.43.20\n        for <aven9241@gmail.com>\n        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);\n        Wed, 22 Sep 2021 05:43:20 -0700 (PDT)\nReceived-SPF: pass (google.com: domain of codecup@foxmail.com designates 203.205.221.149 as permitted sender) client-ip=203.205.221.149;\nAuthentication-Results: mx.google.com;\n       dkim=pass header.i=@foxmail.com header.s=s201512 header.b=EHFDkSqm;\n       spf=pass (google.com: domain of codecup@foxmail.com designates 203.205.221.149 as permitted sender) smtp.mailfrom=codecup@foxmail.com;\n       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=foxmail.com\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=foxmail.com;\n\ts=s201512; t=1632314599;\n\tbh=DN5Ek5YhafXJOr9c59kk7nop2KBUqjB8A+1MsY5q93o=;\n\th=From:To:Subject:Date;\n\tb=EHFDkSqmJyafTwv9Sr0CDYu3Z/SJ5ORLZfj0hGhjeaN1tG5dX9imamjKQAZGgY7tJ\n\t sB9XaNR4wsdJ0xUgCmXo2+q2dJZ3Rqf2qDoVna6//14v04iqSfh8eqeMMKZ7Jdy63a\n\t JQ34NbMvySbGXE2gpiqMZcBUjjCRJ6hMICT6DnX4=\nX-QQ-FEAT: DI46iX4Hri6fEvFpTDRHmzoOQoMFvnYc\nX-QQ-SSF: 00000000000000F1000000000000\nX-QQ-XMAILINFO: NRINwShgDlQI4BHUEyG2iwUuY+LnUZRvKOMP2p1RxqztE3eX3E33Y3RSjPARxd\n\t DRbTjNiwdPj8rD/gYvUh15pbBnu69LV0LGZBzEIwWZooUjHIPBZMcZrsgrna2+bN3otSFF13s0v2m\n\t e+mts1GIc36XDNqWk64LImV3Qxia6xjtG6RGBUIu3P6/Kl8w/V8Oa1IoltR10gDn9qL94j95B84yo\n\t el+xmus8K9UtVAevTqcZ4szfZ21Eha1RKnj5sEfZiRQ5LBj3VCJmk+0udzSKbBcyV7bod4+jEx1Kr\n\t hEJ/gHFahF4yk+KrPm3GbyOpiW7SMrvfMBU3+ELAEq30/Qegp9YoitexusrwrQwXN3HgdBmKDUHiv\n\t xbNfWofddqE6+uGYWXL08vDze8Neycm5YCsM9ZAlNQs4M4IcALIYScwqdrcj6EUqgC07JSH4wVn7l\n\t GyO2qYjQtRXnrGz3E4g8t0XcJglh+5mot1OdJ0ImYYt4nBRTc7jtx2icThLe/qy2BnXiRXksfJB8W\n\t 62uOI1ftTqigGlRmvkUpb7VSNjma9/NCKC6cDhyR23xvW1mMBx7AdlcZOtS+Qr6/XLdXpDq7MgqJi\n\t yO/wrkJo9k6GxJZPDI9SEX21aDIzKGVPsNiA8UXm8f3vXuA0U8cFZ4sPTELAi2WQ6I7fV8wXWXye5\n\t WQeVAe9GEOY6PathLYekYqb8mEAObHUxCToWcK25EzggHU1PRxvkdxG3l36gmbRylNvpFiUmgj8fq\n\t YaM8vSIyEKBRoI8PeRkjGcYdSoZOznzkrkJjp1X6G4Zp55AFKr8s0UxUgXteJ3uhzBS3ONCwWtAp3\n\t IYClbtm+eX9fSycT+b4eVENPEqQ3YHQAwHB9qRWzAMNhv3ci+UpD+36Kuh94tvc+7P/mSh50qUmr3\n\t r096871XY8=\nX-HAS-ATTACH: no\nX-QQ-BUSINESS-ORIGIN: 2\nX-Originating-IP: 185.22.99.47\nX-QQ-STYLE: \nX-QQ-mid: webmail333t1632314599t3008744\nFrom: "=?gb18030?B?ue3aow==?=" <codecup@foxmail.com>\nTo: "=?gb18030?B?YXZlbjkyNDE=?=" <aven9241@gmail.com>\nSubject: Fw: UniPass0x10d997eeba332bedf98dbd9b6b34f42dc0f1457fc6aa343ebd60f834ad14cec1\nMime-Version: 1.0\nContent-Type: multipart/alternative;\n\tboundary="----=_NextPart_614B24E7_0F936710_1EA27AB9"\nContent-Transfer-Encoding: 8Bit\nDate: Wed, 22 Sep 2021 20:43:19 +0800\nX-Priority: 3\nMessage-ID: <tencent_02E1E7A45C5CA52EA66587A796B8BB79D609@qq.com>\nX-QQ-MIME: TCMime 1.0 by Tencent\nX-Mailer: QQMail 2.x\nX-QQ-Mailer: QQMail 2.x\n\n Unipass Test',
};
const uri = 'http://112.124.64.189:3030';
const rpc = new _1.RPC(uri);
// test('test Transaction formateData', async (t) => {
//   const data = new Transaction(rawData, sig);
//   const formateData = data.transform();
//   const type = (formateData as TransactionParams).inner.type;
//   t.is(type, rawData.type);
// });
// test('test Transaction serializeJson', async (t) => {
//   const data = new Transaction(rawData, sig);
//   const jsonData = data.serializeJson();
//   t.is(jsonData.inner.type, rawData.type);
// });
// test('test Transaction validate', async (t) => {
//   const data = new Transaction(rawData, sig);
//   const transaction = data.validate();
//   t.is(transaction.inner.action.registerEmail, rawData.action.registerEmail);
// });
ava_1.default('test Transaction sendTransaction validate', async (t) => {
    const data = new _1.Transaction(rawUpdateQuickLogin, sig);
    console.log(data.transform().inner);
    console.log(data.transform().inner.action);
    // const ckbTxHash = await data.sendTransaction(rpc);
    // console.log(ckbTxHash);
    t.is(true, true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2FjdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdCQUF3RDtBQUV4RCxNQUFNLGVBQWUsR0FBRztJQUN0QixJQUFJLEVBQUUsVUFBVTtJQUNoQixLQUFLLEVBQUUsS0FBSztJQUNaLFFBQVEsRUFDTixvRUFBb0U7SUFDdEUsTUFBTSxFQUFFO1FBQ04sYUFBYSxFQUNYLG9FQUFvRTtRQUN0RSxVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUU7Z0JBQ1QsQ0FBQyxFQUFFLEtBQUs7Z0JBQ1IsQ0FBQyxFQUFFLG9nQkFBb2dCO2FBQ3hnQjtTQUNGO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRTtnQkFDTixvRUFBb0U7YUFDckU7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUNGLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBQ2YsS0FBSyxFQUFFLEtBQUs7SUFDWixRQUFRLEVBQ04sb0VBQW9FO0lBQ3RFLE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRTtZQUNOLFNBQVMsRUFBRTtnQkFDVCxDQUFDLEVBQUUsS0FBSztnQkFDUixDQUFDLEVBQUUsb2dCQUFvZ0I7YUFDeGdCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLElBQUksRUFBRSxZQUFZO0lBQ2xCLEtBQUssRUFBRSxLQUFLO0lBQ1osUUFBUSxFQUNOLG9FQUFvRTtJQUN0RSxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUU7Z0JBQ1QsQ0FBQyxFQUFFLEtBQUs7Z0JBQ1IsQ0FBQyxFQUFFLG9nQkFBb2dCO2FBQ3hnQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLEtBQUssRUFBRSxLQUFLO0lBQ1osUUFBUSxFQUNOLG9FQUFvRTtJQUN0RSxNQUFNLEVBQUU7UUFDTixhQUFhLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFO2dCQUNOLG9FQUFvRTthQUNyRTtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLEtBQUssRUFBRSxLQUFLO0lBQ1osUUFBUSxFQUNOLG9FQUFvRTtJQUN0RSxNQUFNLEVBQUU7UUFDTixhQUFhLEVBQ1gsb0VBQW9FO1FBQ3RFLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLFNBQVMsRUFBRTtnQkFDVCxDQUFDLEVBQUUsS0FBSztnQkFDUixDQUFDLEVBQUUsb2dCQUFvZ0I7YUFDeGdCO1NBQ0Y7UUFDRCxhQUFhLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFO2dCQUNOLG9FQUFvRTthQUNyRTtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxHQUFHLEdBQUc7SUFDVixTQUFTLEVBQ1Asb2dCQUFvZ0I7SUFDdGdCLFdBQVcsRUFDVCx1d0pBQXV3SjtDQUMxd0osQ0FBQztBQUVGLE1BQU0sR0FBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ3pDLE1BQU0sR0FBRyxHQUFHLElBQUksTUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXpCLHNEQUFzRDtBQUN0RCxnREFBZ0Q7QUFDaEQsMENBQTBDO0FBQzFDLGdFQUFnRTtBQUNoRSw4QkFBOEI7QUFDOUIsTUFBTTtBQUVOLHdEQUF3RDtBQUN4RCxnREFBZ0Q7QUFDaEQsMkNBQTJDO0FBQzNDLDZDQUE2QztBQUM3QyxNQUFNO0FBRU4sbURBQW1EO0FBQ25ELGdEQUFnRDtBQUNoRCx5Q0FBeUM7QUFDekMsZ0ZBQWdGO0FBQ2hGLE1BQU07QUFFTixhQUFJLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzVELE1BQU0sSUFBSSxHQUFHLElBQUksY0FBVyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxTQUFTLEVBQXdCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLHFEQUFxRDtJQUNyRCwwQkFBMEI7SUFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMifQ==