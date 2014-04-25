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
        _data = {},
        _layout = false,
        _settings = {},

        _postRender = function(){
            console.log('layout');
            console.log(_data);
            TemplateManager.get({mainTemplate:_data.template, partials:[]}, function(tmp){
                var html = tmp(Tools.extend(_settings));
                $(_el).html(html);
                _layout = true;
                _loadContentPage();
            });
        },

        _loadContentPage = function(){
            module.fetch(view, 'content');
        },

        _drawContent = function(){
            var reg = /main/;
            console.log('draw');
            console.log(_settings);
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