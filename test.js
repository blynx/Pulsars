let child_process = require('child_process')

child_process.exec('./db_psrcat/psrcat -h', '', (error, stdout, stderr) => {
    if(error) {
        console.log(error)
    }
    console.log(stdout)
})