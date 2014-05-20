
APP.Page = (function(module, template){
    var view = {},
        _el = 'body',
        _data = {},
        _layout = false,
        _settings = {},

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
                APP[_data.deps[i]].init({
                    template:_data.deps[i]+'/content',
                    el:'.main-'+_data.deps[i],
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

    view.init = function(){
        Tools.fetch(view, 'pages');
    };

    return view;
})(APP, TEMPLATES);