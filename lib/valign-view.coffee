{View} = require 'atom'

module.exports =
class ValignView extends View
  @content: ->
    @div class: 'valign overlay from-top', =>
      @div "The Valign package is Alive! It's ALIVE!", class: "message"

  initialize: (serializeState) ->
    atom.workspaceView.command "valign:toggle", => @toggle()

  # Returns an object that can be retrieved when package is activated
  serialize: ->

  # Tear down any state and detach
  destroy: ->
    @detach()

  toggle: ->
    console.log "ValignView was toggled!"
    if @hasParent()
      @detach()
    else
      atom.workspaceView.append(this)
