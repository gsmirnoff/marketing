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
          $('.product-links').each(function(index, elem){
              _tabs(elem);
          });
        },

        _tabs = function(tab){
            var links = $(tab).find('.product-pr');
            var tabs = $(tab).find('.product-description');
            for(var i=0; i<links.length; i++){
                $(links[i]).attr('data-link', 'link'+i);
                $(tabs[i]).attr('data-tab', 'tab'+i);

                if(i === 0){
                    $(links[i]).addClass('active');
                    $(tabs[i]).show();
                }
            }
        },

        _postRender = function(){

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