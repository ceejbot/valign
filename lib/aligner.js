
// Given a block of text, align it.

var initialWhitespace = /^(\s+)/;

var aligner = module.exports = function aligner(type, text)
{
    var lines = text.split(/\n|\r\n/);
    if (!lines.length) return text;

    var indent = '';
    var matches = initialWhitespace.exec(lines[0]);
    if (matches) indent = matches[1];




    return lines.join(indent + '\n');
};
