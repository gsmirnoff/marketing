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
            $('.prod-wide').each(function(index, elem){
                _toggle($(elem));
            });
        },

        _tabs = function(tab){
            var links = $(tab).find('.product-pr');
            var tabs = $(tab).find('.product-description');
            for(var i=0; i<links.length; i++){
                $(links[i]).attr('data-link', 'tab'+i);
                $(tabs[i]).attr('data-tab', 'tab'+i);
            }

            $(links).on('click', function(event){
                var activeLink = $(event.currentTarget);
                var activeTab = $(tabs).filter('[data-tab="'+activeLink.data('link')+'"]');
                if(activeLink.hasClass('active')){
                    activeLink.toggleClass('active');
                    activeTab.slideToggle(400);
                }else{
                    $(links).not(activeLink).removeClass('active');
                    $(tabs).not(activeTab).slideUp(400);
                    activeLink.addClass('active');
                    activeTab.slideDown(400);
                }
            });

        },
        _toggle = function(link){
            $(link).on('click', function(event){
                $(event.currentTarget).toggleClass('active');
                $(event.currentTarget).next().slideToggle(400);
            });
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