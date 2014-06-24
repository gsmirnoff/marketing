/**
 * Created by SNSukhanov on 19.06.14.
 */

PLATFORM.content = (function(){
    var view = {},
        _el,
        _tab,

        _settings = {},

        _render = function(){
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
        _load();
    };

    view.init = function(tab){
        _el = document.getElementById('content');
        if(localStorage.newUser == 'true'){
            _tab = 'settings';
        }else{
            _tab = tab;
        }
        _render();
    };

    return view;
})();
