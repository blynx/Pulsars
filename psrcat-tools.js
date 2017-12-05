#!/usr/bin/env node
import { Psrcat }  from './lib/Psrcat'

const cli = require('cli')
const psrcat = new Psrcat()

// set some test values to argv
process.argv[2] = 'do-it'
process.argv[3] = '-e'
process.argv[4] = 'bla bla bla'

// set version of this script (cli shall not look for package.json)
cli.setApp('psrcat-tools', '0.0.1')

// define commands
cli.parse(null, ['do-it'])

// options & args
cli.parse({
    echo: ['e', 'Echo the echo.', 'string', '"echo?"']
    // echo: ['e', 'Say echo.', 'echo', 'Echo.']
})

cli.main((args, options) => {
    let command = cli.command
    console.log(options)

    // console.log(psrcat.query("p0, dist, filter = p0 > 7 && p0 < 8, descend"))
})
