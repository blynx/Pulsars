import child_process = require('child_process')

export default class Psrcat {

    execFile: String = './db_psrcat/psrcat'
    dbFile: String = 'db_psrcat/psrcat.db'
    testArgs: String = '-c "name p0 dm"'

    execOptions = {
        maxBuffer: 300*1024
    }

    constructor() {
    
    }

    compileCommand() {

    }

    exec() {
        child_process.exec('./db_psrcat/psrcat -db_file "db_psrcat/psrcat.db"', ,(error, stdout, stderr) => {
            if(error) {
                console.log("ja, error.")
                console.log(error)
            }
            console.log(stdout)
        })
    }

    query() {
        
    }
}


// const child_process = require('child_process')

// let psrcat_args = [
//     '-db_file "db_psrcat/psrcat.db"',
    
// ]