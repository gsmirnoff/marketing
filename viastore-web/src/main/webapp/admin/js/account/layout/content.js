/**
 * Created by SNSukhanov on 19.06.14.
 */

PLATFORM.content = (function(){
    var view = {},
        _el,
        _tab,

        _settings = {},

        _render = function(){
           console.log(_tab);
            _load();
        },

        _load = function(){
            ToolsAdmin.loadTemplate(workConfig.templatesFolder, {
                template:'account/' + _tab,
                callback:_postRender,
                settings:_settings
            });
        },

        _postRender = function(tmpl){
            ToolsAdmin.insertTmpl(tmpl, _el, function(){
                PLATFORM[_tab].init();
            }, 'insert');
        };

    view.changeContent = function(tab){
        _tab = tab;
        console.log(_tab);
        _load();
    };

    view.init = function(tab){
        _el = document.getElementById('content');
        _tab = tab;
        _render();
    };

    return view;
})();
