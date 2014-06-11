/**
 * Created by SNSukhanov on 11.04.14.
 */

APP.service = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'service/content',
        _partials = [],
        _config = {

        },

        _render = function(){
            $('.product-links').each(function(index, elem){
                _tabs(elem);
            });
            $('.prod-wide').each(function(index, elem){
                _toggle($(elem));
            });

            $('.toggle-header').on('click', function(event){
                $(event.currentTarget).toggleClass('active');
                $(event.currentTarget).siblings('.wrap-table').slideToggle(300);
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
                    activeTab.toggle(400);
                }else{
                    $(links).not(activeLink).removeClass('active');
                    $(tabs).not(activeTab).slideUp(400, function(){
                        activeLink.addClass('active');
                        activeTab.slideDown(400);
                    });
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