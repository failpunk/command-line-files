'use strict';

/**
 * Does some very basic command line parsing.
 */
module.exports = {
    get args() {
        return process.argv.slice(2);
    },

    /**
     * Get user input files
     */
    getInput() {
        return this.args.filter(arg => {
            return arg[0] !== '-';
        });
    },

    /**
     * Get command line flags
     */
    getFlags() {
        return this.args.filter(arg => {
            return arg[0] === '-';
        });
    },
};
