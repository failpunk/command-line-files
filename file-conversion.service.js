'use strict';

const fileMergeAdaptor = require('./adaptors/file-merge-adaptor');

/**
 * Basic Servis to process files.
 * Allows us to extend it with new adpators by registering them.
 * Has a build-in adapter out of the box.
 */
module.exports = class FileConversionService {
    constructor(config = {}) {
        this.fileAdaptors = {};

        // We can choose to not register any adapters and instead register
        // them all manually.  Good for tests.
        if (config.skip_registration !== true) {
            this.registerDefaultAdaptors();
        }
    }

    registerDefaultAdaptors() {
        this.registerAdaptor('merge', fileMergeAdaptor);
    }

    /**
     * Lets us register new adaptors after-the-fact
     */
    registerAdaptor(name, adaptor) {
        if (this.fileAdaptors[name]) {
            throw new Error(`Adaptor ${name} already registered!`);
        }

        this.fileAdaptors[name] = adaptor;
    }

    /**
     * Generic method to call a given adaptor
     * @param {Object} This should be the object from command-line-parser.js.
     */
    process(input) {
        if (!this.fileAdaptors[input.operation]) {
            throw new Error(
                `No adaptor has been registered with the name "${
                    input.operation
                }"!`
            );
        }

        this.fileAdaptors[input.operation](input.files, input.args);
    }
};
