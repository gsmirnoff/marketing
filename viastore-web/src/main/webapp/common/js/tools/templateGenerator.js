/**
 * Created by SNSukhanov on 20.05.14.
 */

function TemplateGenerator(){
    var view = this,
        _module,


        _add = function(obj, view){
            _module = view;
            TEMPLATES.setTemplate({
                template:obj.template,
                next:_renderTemplate
            }, 'loadTemplate');
        },

        _renderTemplate = function(tmpl){
            console.log(tmpl);
            _module.showContent();
        };

    view.init = function(){
        var methods = {
           add:_add
        };

       return methods;
    };
}
