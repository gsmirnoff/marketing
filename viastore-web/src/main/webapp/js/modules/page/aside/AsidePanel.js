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
                    value:'Автомобильная&nbsp;техника и&nbsp;коммерческий&nbsp;транспорт'
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
                    value:'Сбыт&nbsp;запасных&nbsp;частей'
                },
                {
                    classIcon:'item-food',
                    value:'Еда&nbsp;и&nbsp;напитки'
                },
                {
                    classIcon:'item-ecommerce',
                    value:'Торговля&nbsp;и&nbsp;электронная коммерция'
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
                    value:'Промышленность'
                },
                {
                    classIcon:'item-logistics',
                    value:'Поставщик&nbsp;услуг в&nbsp;сфере&nbsp;логистики'
                },
                {
                    classIcon:'item-temperature',
                    value:'Склады&nbsp;с&nbsp;контролируемой&nbsp;температурой, склады&nbsp;глубокой&nbsp;заморозки'
                },
                {
                    classIcon:'item-other',
                    value:'Другие&nbsp;сферы'
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
