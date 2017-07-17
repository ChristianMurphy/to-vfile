'use strict';

var buffer = require('is-buffer');
var string = require('x-is-string');
var vfile = require('vfile');

module.exports = toVFile;

/* Create a virtual file from a description.
 * If `options` is a string or a buffer, it’s used as the
 * path.  In all other cases, the options are passed through
 * to `vfile()`. */
function toVFile(options) {
  if (string(options) || buffer(options)) {
    options = {path: String(options)};
  }

  return vfile(options);
}
