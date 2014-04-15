/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */


APP.Router = (function(){
    var view = {},
        _isHeader = true,
        _isFooter = true,
        _isBanner = true,
        _isAside = true,

        routes = {
            '':'home',
            '#':'home',
            '#home':'home',
            '#solutions':'solutions',
            '#about':'about',
            '#products':'products',
            '#service':'service',
            '#contacts':'contacts',
            '#admin':'admin',
            '#login':'session'
        },

        _token,

        _render = function(e){

        },

        _loadPage = function(page){
//            _hashChange(page);
            var is = _checkPartsPage(page);
            APP.Page.init(page, is);
        },

        _listenChangeLocation = function(e){
            var hash = location.hash;
            if(routes[hash] !== undefined){
                if(_token.accessToken){
                    _loadPage(routes[hash]);
                }else{
                   if(routes[hash] == 'admin'){
                       view.hashChange('home');
                       _loadPage('home');
                   }else{
                       _loadPage(routes[hash]);
                   }
                }
            }else{

                _loadPage('notfound');
            }
        },

        _hashChange = function(hash){
            location.hash = hash;
        },

        _checkPartsPage = function(page){
            var is = {};
           switch(page){
               case 'home':is = {
                   header:_isHeader = true,
                   footer:_isFooter = true,
                   banner:_isBanner = true,
                   aside:_isAside = false
               };
               break;
               case 'notfound':is = {
                   header:_isHeader = true,
                   footer:_isFooter = false,
                   banner:_isBanner = false,
                   aside:_isAside = false
               };
               break;
               case 'solutions':is = {
                   header:_isHeader = true,
                   footer:_isFooter = true,
                   banner:_isBanner = false,
                   aside:_isAside = true
               };
               break;
               case 'session':is = {
                   header:_isHeader = false,
                   footer:_isFooter = false,
                   banner:_isBanner = false,
                   aside:_isAside = false
               };
                   break;
               default : is = {
                   header:_isHeader = true,
                   footer:_isFooter = true,
                   banner:_isBanner = false,
                   aside:_isAside = false
               };
           }

           return is;
        },

        _handlers = function(){
           $(window).on('hashchange load', function(event){
               _token = APP.getToken();
               _render(event);
               _listenChangeLocation(event);
           });
        };

     view.hashChange = function(hash){
            location.hash = hash;
     };

    view.start = function(){
       _handlers();
    };

    return view;
})();