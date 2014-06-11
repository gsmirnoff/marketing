/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.RouteAccount = (function(){
    var view = {},

        _routes = {
            '':'constructor',
            'constructor':'constructor',
            'fileManager':'fileManager',
            'settings':'settings',
            'statistics':'statistics'
        },

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
        localStorage.typeEventLoad = 'load';
        _startHistory();
    };

    return view;
})();