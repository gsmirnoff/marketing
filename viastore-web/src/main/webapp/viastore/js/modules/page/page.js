/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */

APP.Page = (function(module){
    var view = {},
        _el = 'body',
        _data = {
            template:'layout',
            deps:['header', 'footer', 'content']
        },
        _layout = false,
        _settings = {},

        _postRender = function(){
            TemplateManager.get({mainTemplate:_data.template, partials:[]}, function(tmp){
                var html = tmp(Tools.extend(_settings));
                $(_el).addClass(Tools.hash()).html(html);
                _layout = true;
                _loadContentPage();
            });
        },

        _loadContentPage = function(){
            module.fetch(view, 'content');
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
        module.fetch(view, 'pages');
    };

    return view;
})(APP);