/**
 * Created by SNSukhanov on 22.04.14.
 */

APP.productsItem = (function(module){
    var view = {},

        _el = '.products-container',
        _template = 'products/items',
        _partials = [],
        _config = {

            sections:[
                {
                    title:'Управление складом',
                    callback:''
                },
                {
                    title:'Специализированные логистические решения',
                    callback:''
                },
                {
                    title:'SAP Logistics Solutions',
                    callback:''
                }
            ]
        },

        _render = function(){
            TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
                var html = tmp(Tools.extend(_config));
                $(_el).html(html);
                _postRender();
            });
        },

        _postRender = function(){
//            REQUEST.initRequest({
//               url:config.apiFolder + 'pages/products/reduced',
//                success:function(data){
//                    console.log(data);
//                }
//            },'GET');
        };



    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $(_el).html(html);
            _render();
        });
    };

    return view;
})(APP);