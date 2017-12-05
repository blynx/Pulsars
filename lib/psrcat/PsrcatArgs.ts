import psrParameterList from './PulsarParameters'



class PsrcatArgBase {
    name: string    // long name like "pulsarParams"
    alias: string   // psrcar alias like "-c"

    constructor(init: {name, alias}) {
        this.name = init.name
        this.alias = init.alias
    }
}



export class PsrcatArg extends PsrcatArgBase {
    value: string

    toString(): string {
        if(this.value === undefined) return ''
        let escapedVal = this.value
            .replace('"', '')
            .replace("'", '')
            .replace(';', '')
        return this.alias + ` "${escapedVal}"`
    }

    put(v: string) {
        this.value = v
    }
}



export class PsrcatArgPlural extends PsrcatArgBase {
    values: string[] = []

    toString(): string {
        if(this.values.length > 0) {
            let out = this.values.reduce((acc, v) => {
                v = v.replace('"', '')
                    .replace("'", '')
                    .replace(';', '')
                return acc += (" " + v)
            })
            return this.alias + ` "${out}"`
        }
    }

    add(v: string) {
        this.values.push(v)
    }
}



interface PsrcatArgsInterface {
    outputFormat?: PsrcatArg|string
    dbFile?: PsrcatArg|string
    filter?: PsrcatArg|string
    sortby?: PsrcatArg|string
    name?: PsrcatArg|string
    
    pulsarParams?: PsrcatArgPlural
    
    descend?: PsrcatArg|string
}



export class PsrcatArgs {

    args: PsrcatArgsInterface = {
        outputFormat: new PsrcatArg({alias: '-o', name: 'outputFormat'}),
        descend: new PsrcatArg({alias: '-descend', name: 'descend'}),
        dbFile: new PsrcatArg({alias: '-db_file', name: 'dbFile'}),
        name: new PsrcatArg({alias: '', name: 'name'}),
        sortby: new PsrcatArg({alias: '-s', name: 'sortby'}),
        filter: new PsrcatArg({alias: '-l', name: 'filter'}),
        pulsarParams: new PsrcatArgPlural({alias: '-c', name: 'pulsarParams'})
    }

    psrParameterList = psrParameterList

    constructor(newPsrcatArgs: PsrcatArgsInterface) {
        this.apply(newPsrcatArgs)
    }

    apply(newPsrcatArgs: PsrcatArgsInterface) {
        for(let argkey in newPsrcatArgs) {
            this.args[argkey].put(newPsrcatArgs[argkey])
        }
    }

    put(arg: string|{name:string, value:string}) {
        if(typeof arg == 'string') {
            if(this.psrParameterList.indexOf(arg.toUpperCase()) > -1) {
                this.args.pulsarParams.add(arg)
            }
        } else {
            this.args[arg.name].put(arg.value)
        }
    }

    toString(): string {
        let out = ''
        for(let argName in this.args) {
            out += ' ' + this.args[argName].toString()
        }
        return out
    }

    getArgs() {
        return this.args
    }
}