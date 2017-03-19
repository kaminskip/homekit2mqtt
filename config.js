var pkg = require('./package.json');
var config = require('yargs')
    .usage(pkg.name + ' ' + pkg.version + '\n' + pkg.description + '\n\nUsage: $0 [options]')
    .describe('v', 'possible values: "error", "warn", "info", "debug"')
    .describe('m', 'JSON file containing HomeKit Services to MQTT mapping definitions. See Readme.')
    .describe('n', 'instance name. used as mqtt client id and as prefix for connected topic')
    .describe('u', 'mqtt broker url. See https://github.com/mqttjs/MQTT.js#connect-using-a-url')
    .describe('s', 'directory to store homekit data')
    .describe('h', 'show help')
    .alias({
        'h': 'help',
        'n': 'name',
        'm': 'mapfile',
        'u': 'url',
        'v': 'verbosity',
        'c': 'pincode',
        'a': 'username',
        'b': 'bridgename',
        'p': 'port',
        's': 'storagedir'
    })
    .default({
        'c': '239-05-734',
        'u': 'mqtt://127.0.0.1',
        'n': 'homekit',
        'm': __dirname + '/homekit2mqtt.json',
        'v': 'debug',
        'a': 'C2:21:33:E3:C1:F0',
        'b': 'Pandora',
        'p': 51826,
        's': __dirname + "/data"
    })
    //.config('config')
    .version()
    .help('help')
    .argv;

module.exports = config;