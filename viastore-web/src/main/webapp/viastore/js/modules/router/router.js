/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */


APP.Router = (function(){
    var view = {},

        routes = {
            '':'home',
            'home':'home',
            'solutions':'solutions',
            'about':'about',
            'products':'products',
            'service':'service',
            'contacts':'contacts',
            'admin':'admin',
            'login':'session'
        },

        validationHash = function(){
            var hash = Tools.hash();
            if(routes[hash]){
                APP.Page.init();
            }else{
               Tools.hashChange('notFound');
               APP.Page.init();
            }
        };

    view.start = function(){
        $(window).on('hashchange load', function(event){
           validationHash();
        });
    };

    return view;
})();