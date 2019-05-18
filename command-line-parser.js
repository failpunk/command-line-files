'use strict';

const parseArgs = require('minimist');

// default operation is merge
const defaults = { default: { o: 'merge' } };

/**
 * Does some very basic command line parsing.
 */
module.exports = {
    /**
     * Returns parsed arguments
     */
    get args() {
        return parseArgs(process.argv.slice(2), defaults);
    },

    /**
     * Get user input files
     */
    get files() {
        return this.args._;
    },

    get operation() {
        return this.args.o;
    },

    getFlag(name) {
        return this.args[name];
    },

    hasFlag(name) {
        return this.getFlag(name) !== undefined;
    },
};
