export default [

    // psrcat documentation:
    // http://www.atnf.csiro.au/research/pulsar/psrcat/psrcat_help.html?type=normal#par_list

    'NAME',         // Pulsar name.  The B name if exists, otherwise the J name.
    'JNAME',        // Pulsar name based on J2000 coordinates
    'RAJ',          // Right ascension (J2000) (hh:mm:ss.s) 
    'DECJ',         // Declination (J2000) (+dd:mm:ss) 
    'PMRA',         // Proper motion in the right ascension direction (mas/yr) 
    'PMDEC',        // Proper motion in declination (mas/yr) 
    'PX',           // Annual parallax (mas) 
    'POSEPOCH',     // Epoch of position, defaults to PEpoch (MJD) 
    'ELONG',        // Ecliptic longitude (degrees)
    'ELAT',         // Ecliptic latitude (degrees) 
    'PMELONG',      // Proper motion in the ecliptic longitude direction (mas/yr) 
    'PMELAT',       // Proper motion in ecliptic latitude (mas/yr) 
    'GL',           // Galactic longitude (degrees) 
    'GB',           // Galactic latitude (degrees) 
    'RAJD',         // Right ascension (J2000) (degrees)
    'DECJD',        // Declination (J2000) (degrees)
    
    // Timing solution and profile parameters:
    
    'P0',           // Barycentric period of the pulsar (s)
    'P1',           // Time derivative of barcycentric period (dimensionless)
    'F0',           // Barycentric rotation frequency (Hz)
    'F1',           // Time derivative of barycentric rotation frequency (s-2)
    'F2',           // Second time derivative of barycentric rotation frequency (s-3)
    'F3',           // Third time derivative of barycentric rotation frequency (s-4)
    'PEPOCH',       // Epoch of period or frequency (MJD)
    'DM',           // Dispersion measure (cm-3 pc)
    'DM1',          // First time derivative of dispersion measure (cm-3 pc yr-1)
    'RM',           // Rotation measure (rad m-2)
    'W50',          // Width of pulse at 50% of peak (ms). Note, pulse widths are a function of both observing frequency and
                    // observational time resolution,so quoted widths are indicative only. Refer to the original reference for details.
    'W10',          // Width of pulse at 10% (ms). Note the comments above for W50.
    'UNITS',        // Timescale for period/frequency and epoch data: TCB or TDB.
                    // See Hobbs, Edwards & Manchester (2006) for a discussion of the relationship between TCB and TDB.
    'TAU_SC',       // Temporal broadening of pulses at 1 GHz due to interestellar scattering (s)
    'S400',         // Mean flux density at 400 MHz (mJy)
    'S1400',        // Mean flux density at 1400 MHz (mJy)
    'S2000',        // Mean flux density at 2000 MHz (mJy)
    
    // Binary system parameters:
    
    'BINARY',       // Binary model (usually one of several recognised by the pulsar timing programs TEMPO or TEMPO2).
                    // Modified versions of standard models are often used - refer to the source paper for details of the binary model used.  
    'T0',           // Epoch of periastron (MJD)
    'PB',           // Binary period of pulsar (days)
    'A1',           // Projected semi-major axis of orbit (lt s)
    'OM',           // Longitude of periastron (degrees)
    'ECC',          // Eccentricity
    'TASC',         // Epoch of ascending node(MJD) - ELL1 binary model
    'EPS1',         // ECC x sin(OM) - ELL1 binary model
    'EPS2',         // ECC x cos(OM) - ELL1 binary model
    'MINMASS',      // Minimum companion mass assuming i=90 degrees and neutron star mass is 1.35 Mo
    'MEDMASS',      // Median companion mass assuming i=60 degrees
    'BINCOMP',      // Companion type
    
    // Distance parameters:
    
    'DIST',         // Best estimate of the pulsar distance using the YMW16 DM-based distance as default (kpc)
    'DIST_DM',      // Distance based on the YMW16 electron density model. 
                    // In 'LONG' or 'PUBLICATION QUALITY' modes, lower limits from the distance model are preceded by a '+' sign.
    'DMSINB',       // DM x sin(b) (cm-3 pc)
    'ZZ',           // Distance from the Galactic plane, based on Dist
    'XX',           // X-Distance in X-Y-Z Galactic coordinate system (kpc)
    'YY',           // Y-Distance in X-Y-Z Galactic coordinate system (kpc)
    
    // Associations and survey parameters:
    
    'ASSOC',        // Names of other objects, e.g., supernova remnant, globular cluster or gamma-ray source 
                    // associated with the pulsar
    'SURVEY',       // Surveys that detected the pulsar (discovery survey first). Click here for currently defined surveys.
    'OSURVEY',      // Surveys that detected the pulsar encoded as bits in integer
    'DATE',         // Date of discovery publication.
    'TYPE',         // Type codes for the pulsar. Click here for available types.
    'NGLT',         // Number of glitches observed for the pulsar
    
    // Derived parameters:
    
    'R_LUM',        // Radio luminosity at 400 MHz (mJy kpc2)
    'R_LUM14',      // Radio luminosity at 1400 MHz (mJy kpc2)
    'AGE',          // Spin down age (yr) []
    'BSURF',        // Surface magnetic flux density (Gauss) []
    'EDOT',         // Spin down energy loss rate (ergs/s)
    'EDOTD2',       // Energy flux at the Sun (ergs/kpc2/s)
    'PMTOT',        // Total proper motion (mas/yr)
    'VTRANS',       // Transverse velocity - based on DIST (km/s)
    'P1_I',         // Period derivative corrected for Shklovskii (proper motion) effect 
    'AGE_I',        // Spin down age from P1_i (yr)
    'BSURF_I',      // Surface magnetic dipole from P1_i (gauss)
    'B_LC'          // Magnetic field at light cylinder
]