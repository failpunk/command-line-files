'use strict';

const commandLineParser = require('./command-line-parser');
const FileProcessingService = require('./file-conversion.service');
const convertFiles = require('./file-convert-adaptor');

/**
 * Parse user input and validate.
 */
const inputFiles = commandLineParser.getInput();
console.log('inputFiles', inputFiles);

/**
 * Get an instance of our service.
 */
const fileService = new FileProcessingService();

/**
 * Merge input files
 */
fileService.process('merge', inputFiles);

/**
 * Add new adapter to convert files, then use it.
 */
fileService.registerAdaptor('convert', convertFiles);
fileService.process('convert', inputFiles, 'text');
