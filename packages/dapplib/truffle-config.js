require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember modify grid arctic bridge town'; 
let testAccounts = [
"0x57daa3daf167ef4532fab29754a857af97a7de0d88b063a0501ade984d4e71ae",
"0xfc99f388694fa58df538b747b81300872a4a329ec0598a323c0ea327e8f82b6b",
"0xefcd3e73ed1fc195a3100c57a877748dcbc824a4a4b0f29e255749291bd9d424",
"0x8fa0bafc3239be95e82a5f0c13e0eaefba3b32c29c548ff4b42f937a0ae728f7",
"0xe6aa6a300a86499515f6aad7a25fa154d59dc8e88a9edf1ffb60db9610903242",
"0x4bb5708a8cc65606bf767c8f3cb9698577b5d5eb3ce0f2eec4326bee1864d84a",
"0x754a1d424c0a61596eab302a20de688c5ec3166bfca4616cbafc220847d85924",
"0xd21e1161612632283a7a2606be690b2624feee8c8b796f3c953000277973322b",
"0x50fe1eeee11a4aca3e4508dae14bdce1af095646f16dea52b87bc26ccad351de",
"0xc1861c7ba10cadedeacf35242e6aca3156e648f89da491ac6ab8e6655b5f2eac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

