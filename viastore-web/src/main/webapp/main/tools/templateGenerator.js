/**
 * Created by SNSukhanov on 20.05.14.
 */

function TemplateGenerator(){
    var view = this,


        _add = function(obj){
            TEMPLATES.setTemplate({
                template:obj.template,
                next:_renderTemplate
            }, 'loadTemplate');

        },

        _renderTemplate = function(tmpl){
            console.log(tmpl);
        };

    view.init = function(){
        var methods = {
           add:_add
        };

       return methods;
    };
}