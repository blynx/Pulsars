import child_process = require('child_process')
import psrParameters from './psrcat/PulsarParameters'
import { PsrcatArg, PsrcatArgPlural, PsrcatArgs } from './psrcat/PsrcatArgs'

const executable = './db_psrcat/psrcat'

const execDefaults = {
    maxBuffer: 300*1024 // default: 200*1024
}

const psrcatDefaults = {
    dbFile: 'db_psrcat/psrcat.db',
    outputFormat: 'long_error_csv'
}

interface PsrcatOptionInterface {
    psrcatOptions?: object
    execOptions?: object
}

/**
 
this.query("name=B2351+61, p0, name, dist, filter=p0 > 7 && p0 < 8 ")

./db_psrcat/psrcat 
    -db_file db_psrcat/psrcat.db    // db
    -c "name p0 dist"               // [parametername, parametername, ....] query pulsar parameters
    -l "p0 > 7 && p0 < 8"           // [filter=_]   filter
    -s p0                           // [sortby=_]   parameter for sorting
    -descend                        // [descending] descending order
    B2351+61                        // [name=_]     get data for specific pulsar

*/

export class Psrcat {

    executable: string
    execOptions: object
    psrcatArgs: PsrcatArgs

    /**
     * 
     * @param options 
     */
    constructor(options?: PsrcatOptionInterface) {
        this.executable = executable
        this.execOptions = execDefaults
        this.psrcatArgs = new PsrcatArgs(psrcatDefaults)

        if(options) {
            if(options.execOptions) this.execOptions = Object.assign(this.execOptions, options.execOptions)
            if(options.psrcatOptions) this.psrcatArgs.apply(options.psrcatOptions)
        }
    }



    /**
     * 
     * @param queryString 
     */
    public query(queryString: string) {
        
        let qSegs, command

        qSegs = queryString.split(',')
        qSegs = qSegs.forEach(seg => {
            seg = seg.trim()
            if(seg.indexOf('=') >= 0) {
                seg = seg.split('=')
                seg = { name: seg[0].trim(), value: seg[1] }
            }
            this.psrcatArgs.put(seg)
        })

        command = this.executable + ' ' + this.psrcatArgs.toString()

        return this.exec(command, this.execOptions)
    }



    /**
     * 
     * @param executable 
     * @param execOptions 
     */
    private exec(command: string, execOptions: Object) {

        let stdout = child_process.execSync(command, execOptions)
        let stringOut = stdout.toString()
        return stringOut
    }
}

// `./db_psrcat/psrcat  -o "long_error_csv"  -db_file "db_psrcat/psrcat.db"  "J2353+85"  -l " p0 > 7 && p0 < 8" -c "p0 dist"`