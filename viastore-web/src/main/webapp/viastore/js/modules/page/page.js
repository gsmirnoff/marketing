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
        settings = {},

        _postRender = function(){
           console.log(_data);
        };

    view.getData = function(){
        return _data;
    };

    view.setData = function(data){
       _data = data;
        return _data;
    };

    view.postRender = function(){
        _postRender();
    };

    view.init = function(){
        module.fetch(view);
    };

    return view;
})(APP);