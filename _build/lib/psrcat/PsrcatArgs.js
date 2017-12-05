"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PsrcatPulsarParameters_1 = require("./PsrcatPulsarParameters");
class PsrcatArgBase {
    constructor(init) {
        this.name = init.name;
        this.alias = init.alias;
    }
    /** */
    escape(str) {
        return str.replace('"', '').replace("'", '').replace(';', '');
    }
}
class PsrcatArg extends PsrcatArgBase {
    toString() {
        if (this.value === undefined)
            return '';
        let escapedVal = this.escape(this.value);
        return this.alias + ` "${escapedVal}"`;
    }
    put(v) {
        this.value = v;
    }
}
exports.PsrcatArg = PsrcatArg;
class PsrcatArgPlural extends PsrcatArgBase {
    constructor() {
        super(...arguments);
        this.values = [];
    }
    toString() {
        if (this.values.length > 0) {
            let out = this.values.reduce((acc, v) => {
                v = this.escape(v);
                return acc += (" " + v);
            });
            return this.alias + ` "${out}"`;
        }
    }
    add(v) {
        this.values.push(v);
    }
}
exports.PsrcatArgPlural = PsrcatArgPlural;
class PsrcatArgs {
    constructor(newPsrcatArgs) {
        this.args = {
            outputFormat: new PsrcatArg({ alias: '-o', name: 'outputFormat' }),
            descend: new PsrcatArg({ alias: '-descend', name: 'descend' }),
            dbFile: new PsrcatArg({ alias: '-db_file', name: 'dbFile' }),
            name: new PsrcatArg({ alias: '', name: 'name' }),
            sortby: new PsrcatArg({ alias: '-s', name: 'sortby' }),
            filter: new PsrcatArg({ alias: '-l', name: 'filter' }),
            pulsarParams: new PsrcatArgPlural({ alias: '-c', name: 'pulsarParams' })
        };
        this.psrParameterList = PsrcatPulsarParameters_1.default;
        this.apply(newPsrcatArgs);
    }
    apply(newPsrcatArgs) {
        for (let argkey in newPsrcatArgs) {
            this.args[argkey].put(newPsrcatArgs[argkey]);
        }
    }
    put(arg) {
        if (typeof arg == 'string') {
            if (this.psrParameterList.indexOf(arg.toUpperCase()) >= 0) {
                this.args.pulsarParams.add(arg);
            }
        }
        else {
            this.args[arg.name].put(arg.value);
        }
    }
    toString() {
        let out = '';
        for (let argName in this.args) {
            out += ' ' + this.args[argName].toString();
        }
        return out;
    }
    getArgs() {
        return this.args;
    }
}
exports.PsrcatArgs = PsrcatArgs;
//# sourceMappingURL=PsrcatArgs.js.map