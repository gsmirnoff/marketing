/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.Route = (function(){
    var view = {},

        _routes = {},

        _render = function(event){
           PLATFORM.page.init(_routes);
        },

        _startHistory = function(){
            window.addEventListener('hashchange', function(event){
                localStorage.typeEventLoad = event.type;
                _render(event);
            }, false);
            _render(null);
        };

    view.start = function(){
        _routes = workConfig.routes;
        localStorage.typeEventLoad = 'load';
       _startHistory();
    };

    return view;
})();