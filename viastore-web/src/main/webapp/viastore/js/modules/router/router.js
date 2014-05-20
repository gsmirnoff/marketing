
APP.Router = (function(){
    var view = {},

        routes = {
            '':'home',
            'home':'home',
            'solutions':'solutions',
            'about':'about',
            'products':'products',
            'service':'service',
            'contacts':'contacts'
        },

        validationHash = function(type){
            var hash = Tools.hash();
            if(routes[hash]){
                APP.Page.init(type);
            }else{
               Tools.hashChange('notFound');
               APP.Page.init(type);
            }
        };

    view.start = function(){
        $(window).on('hashchange load', function(event){
           validationHash(event.type);
        });
    };

    return view;
})();