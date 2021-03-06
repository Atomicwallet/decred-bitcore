var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ],
  defaultClientPort: 8333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

exports.dcrdlivenet = {
  name: 'dcrdlivenet',
  magic: hex('f900b4d9'),
  addressVersion: 0x073f,
  privKeyVersion: 0x22de,
  P2SHVersion: 0x071a,
  hkeyPublicVersion: 0x02fda926,
  hkeyPrivateVersion: 0x02fda4e8,
  genesisBlock: {
    hash: hex('80d9212bf4ceb066ded2866b39d4ed89e0ab60f335c11df8e7bf85d9c35c8e29'), //
    merkle_root: hex('4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: "207ffffff",
  },
  dnsSeeds: [
    "mainnet-seed.decred.mindcry.org",
    "mainnet-seed.decred.netpurgatory.com",
    "mainnet.decredseed.org",
    "mainnet-seed.decred.org"
  ],
  defaultClientPort: 9108
};

exports.dcrdtestnet = {
  name: 'dcrdtestnet',
  magic: hex('75aa94b1'),
  addressVersion: 0x0f21,
  privKeyVersion: 0x230e,
  P2SHVersion: 0x0efc,
  hkeyPublicVersion: 0x043587d1,
  hkeyPrivateVersion: 0x04358397,
  genesisBlock: {

    hash: hex('ac9ba434b6f7249b9698d1fcec26d6087e8358c811c7e922f4ca1839e5dc49a6'),
    merkle_root: hex('e7dfbceac9fccd6025c70a1dfa9302b3e7b5aa22fa51c98a69164ad403d60a2c'),
    height: 0,
    nonce: 414098458,
    version: 6,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1533513600,
    bits: "1e00ffff",
  },
  dnsSeeds: [
    "testnet-seed.decred.mindcry.org",
    "testnet-seed.decred.netpurgatory.org",
    "testnet.decredseed.org",
    "testnet-seed.decred.org"
  ],
  defaultClientPort: 19108
};
