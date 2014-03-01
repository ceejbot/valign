var
    ValignView = require('./valign-view')
    ;

var VAligner = module.exports = function VAligner()
{
        valignView: null,

        activate: function(state)
        {
        }
};

VAligner.prototype.view = null;

VAligner.prototype.activate = function activate()
{
    this.valignView = new ValignView(state.valignViewState);

};

VAligner.prototype.deactivate = function deactivate()
{
    this.view.destroy();
};

VAligner.prototype.serialized = function serialized()
{
    return { valignViewState: this.valignView.serialize() };
};


var types =
{
    '=': { symbol: '=', align: 'right', rightSpace: true, leftSpace: true, prefixes: [] },
    ':': { symbol: ':', align: 'left', rightSpace: true, leftSpace: false, prefixes: [ '+', '-', '&', '|', '<', '>', '!', '~', '%', '/', '*', '.'] },
    '=>': { symbol: '=>', align: 'right', rightSpace: true, leftSpace: true, prefixes: [] },
};


/*

RangeFinder = require './range-finder'

module.exports =
  activate: ->
    atom.workspaceView.command 'sort-lines:sort', '.editor', ->
      editor = atom.workspaceView.getActivePaneItem()
      sortLines(editor)

sortLines = (editor) ->
  sortableRanges = RangeFinder.rangesFor(editor)
  sortableRanges.forEach (range) ->
    textLines = editor.getTextInBufferRange(range).split("\n")
    textLines.sort (a, b) -> a.localeCompare(b)
    editor.setTextInBufferRange(range, textLines.join("\n"))

{Range} = require 'atom'

module.exports =
class RangeFinder
  # Public
  @rangesFor: (editor) ->
    new RangeFinder(editor).ranges()

  # Public
  constructor: (@editor) ->

  # Public
  ranges: ->
    selectionRanges = @selectionRanges()
    if selectionRanges.length is 0
      [@sortableRangeForEntireBuffer()]
    else
      selectionRanges.map (selectionRange) =>
        @sortableRangeFrom(selectionRange)

  # Internal
  selectionRanges: ->
    @editor.getSelectedBufferRanges().filter (range) ->
      not range.isEmpty()

  # Internal
  sortableRangeForEntireBuffer: ->
    @editor.getBuffer().getRange()

  # Internal
  sortableRangeFrom: (selectionRange) ->
    startRow = selectionRange.start.row
    startCol = 0
    endRow = if selectionRange.end.column == 0
      selectionRange.end.row - 1
    else
      selectionRange.end.row
    endCol = @editor.lineLengthForBufferRow(endRow)

    new Range [startRow, startCol], [endRow, endCol]


*/
