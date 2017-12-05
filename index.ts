import { Psrcat }  from './lib/Psrcat'

const psrcat = new Psrcat()

console.log(psrcat.query("p0, dist, filter = p0 > 7 && p0 < 8, descend"))