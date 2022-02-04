module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },

  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      enabled: true,
      runs: 200

    }
  }
}
