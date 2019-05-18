# Simple Command Line File Processer

A very basic but extensible command line file processing utility.

## Getting Started

```
$ git clone git@github.com:failpunk/command-line-files.git
$ cd command-line-files
$ npm i
```
or
```
$ git clone git@github.com:failpunk/command-line-files.git
$ cd command-line-files
$ yarn
```

## Examples

### Merge Files

```
# default operation is merge
$node file-util.js file1 file2 file3
```

### Convert Files

```
# defaults to text
$node file-util.js file1 file2 -o=convert

# convert to type csv
$node file-util.js file1 file2 -o=convert --type=csv
```

## Adding New Functionality

You can register new file adaptors, say to encrypt a file...
``` javascript
const excryptAdaptor = (files, { type }) => {
    console.log(`Do some encrypting of type ${type}...`, files);
};
fileService.registerAdaptor('encrypt', excryptAdaptor);
```

```
# encrypt your file using new adaptor
$node file-util.js file1 -o=encrypt --type=SHA-256
```
