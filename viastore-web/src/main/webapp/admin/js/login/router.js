/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.RouteLogin = (function(){
    var view = {},

        _routes = {
            '':'login',
            'login':'login',
            'register':'register',
            'forgot':'forgot'
        },

        _render = function(event){
           var hash = Tools.hash();
            ToolsAdmin.routeHash(hash, _routes);
            ToolsAdmin.title(hash);
        },

        _startHistory = function(){
            window.addEventListener('hashchange', function(event){
                localStorage.typeEventLoad = event.type;
                _render(event);
            }, false);
            _render(null);
        };

    view.start = function(){
        localStorage.typeEventLoad = 'load';
       _startHistory();
    };

    return view;
})();