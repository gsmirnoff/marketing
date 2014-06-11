/**
 * Created by SNSukhanov on 06.06.14.
 */


ADMIN.route = (function(){
    var view = {},

        _header = false,

        _routes = {
            '':'settings',
            'constructor':'constructor',
            'fileManager':'fileManager',
            'settings':'settings',
            'statistics':'statistics'
        },

        _indexedRouter = function(){
            var hash = Tools.hashh();
            if(!_header){
                ADMIN.headLine.init();
                _header = true;
            }
            if(hash === _routes[hash]){
                ADMIN[hash].init();
            }

        },

        _render = function(){
            $(window).on('hashchange load', function(){
                _indexedRouter();
            });
        };

    view.start = function(){
       _render();
    };

    return view;
})();