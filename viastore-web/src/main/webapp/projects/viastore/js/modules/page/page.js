
APP.Page = (function(module, template){
    var view = {},
        _el = 'body',
        _data = {},
        _layout = false,
        _typeLoad,
        _settings = [],
        _fakeData = [
            {
                type:'header',
                template:''
            }
        ],

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
                var deps = [];
                for(var j=0; j<_settings.length; j++){
                    if(_settings[j].type === _data.deps[i].template){
                        deps.push(_settings[j]);
                    }
                }
                APP[_data.deps[i].template].init({
                    template:_data.deps[i].template+'/content',
                    el:'.main-'+_data.deps[i].template,
                    settings:deps
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
        Tools.generator = new TemplateGenerator().init();
        if(_typeLoad === 'load'){
            Tools.fetch(view, 'pages');
        }else if(_typeLoad === 'hashchange'){
            _layout = true;
            Tools.fetch(view, 'content');
        }
    };

    return view;
})(APP, TEMPLATES);