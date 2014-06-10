/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.login = (function(){
    var view = {},

        _el = 'wrapper',

        _settings = {

        },

        _render = function(tmpl){
           console.log(tmpl);
            var wrapper = document.getElementById(_el);

            wrapper.innerHTML = tmpl;
        },

        _animateSwing = function(wrapper){
             var form = $(wrapper).find('form');
            
        };

    view.init = function(){
        ToolsAdmin.loadTemplate(config.pathTemplate, {
            template:'login/login',
            callback:_render,
            settings:_settings
        });
    };

    return view;
})();