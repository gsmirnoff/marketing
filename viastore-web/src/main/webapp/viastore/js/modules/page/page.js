
APP.Page = (function(module, template){
    var view = {},
        _el = 'body',
        _data = {
            title:"Solutions",
            template:'layout',
            deps:[
                {
                    title:'',
                    template:'header',
                    deps:[
                        {

                        }
                    ]
                },
                {
                    title:'Решения',
                    template:'content',
                    deps:[
                        {
                            title:'Tiele',
                            template:'prometheus',
                            num:1,
                            content:[]
                        },
                        {
                            title:'Tiele',
                            template:'prometheus',
                            num:1,
                            content:[]
                        },
                        {
                            title:'Tiele',
                            template:'prometheus',
                            num:1,
                            content:[]
                        },
                        {
                            title:'Tiele',
                            template:'prometheus',
                            num:1,
                            content:[]
                        }
                    ]
                },
                {
                    title:'',
                    template:'footer',
                    deps:[
                        {

                        }
                    ]
                }
            ]
        },
        _layout = false,
        _typeLoad,
        _settings = [],

        _postRender = function(){
              template.setTemplate({
                  template:_data.template,
                  next:_loadContentPage
              }, 'loadTemplate');

        },

        _loadContentPage = function(html){
            $(_el).html(html);
            _layout = true;
            Tools.fetch(view, 'content');
        },

        _drawContent = function(){

            for(var i=0; i<_data.deps.length; i++){
                APP[_data.deps[i].template].init({
                    template:_data.deps[i].template+'/content',
                    el:'.main-'+_data.deps[i].template,
                    settings:_settings
                });
            }
            _layout = false;
        };

    view.getData = function(){
        var data;
        if(!_layout){
            data = _data;
        }else{
            data = _settings;
        }
        return data;
    };

    view.setData = function(data){
        if(!_layout){
            _data = data;
            return _data;
        }else{
            _settings = data;
            return _settings;
        }
    };

    view.postRender = function(){
        if(!_layout){
            _postRender();
        }else{
           _drawContent();
        }
    };

    view.init = function(type){
       _typeLoad = type;
//        if(_typeLoad === 'load'){
//            Tools.fetch(view, 'pages');
//        }else if(_typeLoad === 'hashchange'){
//            _layout = true;
//            Tools.fetch(view, 'content');
//        }
        Tools.fetch(view, 'pages');
    };

    return view;
})(APP, TEMPLATES);