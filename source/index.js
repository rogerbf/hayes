const factory = require(`protostar`)
const hayes = require(`./hayes`)

module.exports = hayes.bind(null, factory)
