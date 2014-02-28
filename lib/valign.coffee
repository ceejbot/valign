ValignView = require './valign-view'

module.exports =
  valignView: null

  activate: (state) ->
    @valignView = new ValignView(state.valignViewState)

  deactivate: ->
    @valignView.destroy()

  serialize: ->
    valignViewState: @valignView.serialize()
