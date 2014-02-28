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
