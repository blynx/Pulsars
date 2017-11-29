define(["require", "exports", "child_process"], function (require, exports, child_process) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Psrcat {
        constructor() {
            this.execFile = './db_psrcat/psrcat';
            this.dbFile = 'db_psrcat/psrcat.db';
            this.testArgs = '-c "name p0 dm"';
            this.execOptions = {
                maxBuffer: 300 * 1024
            };
        }
        compileCommand() {
        }
        exec() {
            child_process.exec('./db_psrcat/psrcat -db_file "db_psrcat/psrcat.db"', , (error, stdout, stderr) => {
                if (error) {
                    console.log("ja, error.");
                    console.log(error);
                }
                console.log(stdout);
            });
        }
        query() {
        }
    }
    exports.default = Psrcat;
});
// const child_process = require('child_process')
// let psrcat_args = [
//     '-db_file "db_psrcat/psrcat.db"',
// ] 
//# sourceMappingURL=Psrcat.js.map