"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Psrcat_1 = require("./lib/Psrcat");
const psrcat = new Psrcat_1.Psrcat();
console.log(psrcat.query("p0, dist, filter = p0 > 7 && p0 < 8, descend"));
//# sourceMappingURL=index.js.map