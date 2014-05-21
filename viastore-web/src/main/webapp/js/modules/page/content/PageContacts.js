/**
 * Created by SNSukhanov on 11.04.14.
 */

APP.contacts = (function(module){
    var view = {},

        _el = '.main-content',
        _template = 'contacts/content',
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
            ymaps.ready(_postRender);
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
                    activeTab.slideUp(400);
                }else{
                    $(links).not(activeLink).removeClass('active');
                    $(tabs).not(activeTab).slideUp(400, function(){

                    });
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
            var map = new ymaps.Map("map", {
                center: [55.778882, 37.693714],
                zoom: 14
            });
            var myPlacemark = new ymaps.Placemark([55.778882, 37.693714], {
                hintContent: 'ул. Фридриха Энгельса, д.75 к.20'
            });

            map.geoObjects.add(myPlacemark);

            var map2 = new ymaps.Map("map2", {
                center: [59.96312, 30.320189],
                zoom: 14
            });
            var myPlacemark2 = new ymaps.Placemark([59.96312, 30.320189], {
                hintContent: 'г. Санкт-Петербург, ул. Рентгена, 5А'
            });

            map2.geoObjects.add(myPlacemark2);
        };

    view.init = function(){
        TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
            var html = tmp(Tools.extend(_config));
            $(_el).html(html).addClass('contacts-page');
            _render();
        });
    };

    return view;
})(APP);