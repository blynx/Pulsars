"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    // psrcat documentation:
    // http://www.atnf.csiro.au/research/pulsar/psrcat/psrcat_help.html?type=normal#par_list
    'NAME',
    'JNAME',
    'RAJ',
    'DECJ',
    'PMRA',
    'PMDEC',
    'PX',
    'POSEPOCH',
    'ELONG',
    'ELAT',
    'PMELONG',
    'PMELAT',
    'GL',
    'GB',
    'RAJD',
    'DECJD',
    // Timing solution and profile parameters:
    'P0',
    'P1',
    'F0',
    'F1',
    'F2',
    'F3',
    'PEPOCH',
    'DM',
    'DM1',
    'RM',
    'W50',
    // observational time resolution,so quoted widths are indicative only. Refer to the original reference for details.
    'W10',
    'UNITS',
    // See Hobbs, Edwards & Manchester (2006) for a discussion of the relationship between TCB and TDB.
    'TAU_SC',
    'S400',
    'S1400',
    'S2000',
    // Binary system parameters:
    'BINARY',
    // Modified versions of standard models are often used - refer to the source paper for details of the binary model used.  
    'T0',
    'PB',
    'A1',
    'OM',
    'ECC',
    'TASC',
    'EPS1',
    'EPS2',
    'MINMASS',
    'MEDMASS',
    'BINCOMP',
    // Distance parameters:
    'DIST',
    'DIST_DM',
    // In 'LONG' or 'PUBLICATION QUALITY' modes, lower limits from the distance model are preceded by a '+' sign.
    'DMSINB',
    'ZZ',
    'XX',
    'YY',
    // Associations and survey parameters:
    'ASSOC',
    // associated with the pulsar
    'SURVEY',
    'OSURVEY',
    'DATE',
    'TYPE',
    'NGLT',
    // Derived parameters:
    'R_LUM',
    'R_LUM14',
    'AGE',
    'BSURF',
    'EDOT',
    'EDOTD2',
    'PMTOT',
    'VTRANS',
    'P1_I',
    'AGE_I',
    'BSURF_I',
    'B_LC' // Magnetic field at light cylinder
];
//# sourceMappingURL=PulsarParameters.js.map