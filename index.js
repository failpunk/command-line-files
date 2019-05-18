'use strict';

const userInput = require('./command-line-parser');
const chalk = require('chalk');
const CommandLineFileService = require('./file-conversion.service');
const convertFiles = require('./adaptors/file-convert-adaptor');

/**
 * Get an instance of our service.
 */
const fileService = new CommandLineFileService(userInput);

/**
 * Register a new adapter to convert files. Allows operations other than the default of merge.
 */
fileService.registerAdaptor('convert', convertFiles);

/**
 * Process files based on the input.
 */
try {
    fileService.process(userInput);
} catch (error) {
    console.log(chalk.red(error.message));
}
