/**
 * Created by SNSukhanov on 14.04.14.
 */

APP.Aside = (function(module){
    var view = {},

        _el = '.add-nav-panel',
        _template = 'aside/aside',
        _partials = [],
        _config = {
            navigation:[
                {
                    classIcon:'item-auto',
                    value:'Автомобильная техника и коммерческий транспорт'
                },
                {
                    classIcon:'item-building',
                    value:'Строительство'
                },
                {
                    classIcon:'item-chemistry',
                    value:'Химия'
                },
                {
                    classIcon:'item-spares',
                    value:'Сбыт запасных частей'
                },
                {
                    classIcon:'item-food',
                    value:'Еда и напитки'
                },
                {
                    classIcon:'item-ecommerce',
                    value:'Торговля и электронная коммерция'
                },
                {
                    classIcon:'item-health',
                    value:'Здравоохранение'
                },
                {
                    classIcon:'item-industry',
                    value:'Промышленность'
                },
                {
                    classIcon:'item-goods',
                    value:'Потребительские товары'
                },
                {
                    classIcon:'item-logistics',
                    value:'Поставщик услуг в сфере логистики'
                },
                {
                    classIcon:'item-temperature',
                    value:'Склады с контролируемой температурой, склады глубокой заморозки'
                },
                {
                    classIcon:'item-other',
                    value:'Другие сферы'
                }
            ]
        },

        _render = function(){
            $(window).on('scroll', function(event){
                if($(event.currentTarget).scrollTop() >= parseInt($(_el).data('offset'))){
                    $(_el).css({
                        'position':'fixed',
                        'top':0
                    });
                }else if($(event.currentTarget).scrollTop() < parseInt($(_el).data('offset'))){
                    $(_el).css({
                        'position':'absolute',
                        'top':200
                    });
                }
            });
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
