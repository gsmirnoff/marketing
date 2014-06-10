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
                _render(event);
            }, false);
            _render(null);
        };

    view.start = function(){
       _startHistory();
    };

    return view;
})();