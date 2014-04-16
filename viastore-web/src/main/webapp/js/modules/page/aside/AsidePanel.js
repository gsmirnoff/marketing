/**
 * Created by SNSukhanov on 14.04.14.
 */

APP.Aside = (function(module){
    var view = {},

        _el = '.add-nav-panel',
        _template = 'aside/aside',
        _partials = [],
        _items,
        _listPanel,
        _listPanelWrap,
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
                    value:'Промышленность'
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
            _calculate();
            _handlers();
        },

        _activeItem = function(offset, direction){
            _items = $('.solutions-items').find('.item');
            _listPanel = $(_el).find('li a');
            _listPanelWrap = $(_el).find('li');
            for(var i=0; i<_items.length; i++){
                var top = $(_items[i]).data('offsetTop');
                var bottom = $(_items[i]).data('offsetBottom');

                if(offset >= top && offset < bottom){
                    _listPanel.removeClass('active');
                    $(_listPanel[i]).addClass('active');
                    if($(_listPanel[i]).filter(':hidden').length != 0){
                        var visible = _listPanelWrap.filter(':visible');
                        if(direction == 'down'){
                            var hiddenNextLength = _listPanelWrap.filter(':gt('+(i-1)+')').length;
                            if(visible.length <= hiddenNextLength){
                                visible.slideUp();
                                for(var j = i; j<i+visible.length; j++){
                                    $(_listPanelWrap[j]).slideDown();
                                }
                            }else{
//                                _listPanelWrap.filter(':gt('+(i-1)+')').slideDown();

                            }
                        }else if(direction == 'up'){
                           var hiddenPrevLength = _listPanelWrap.filter(':lt('+(i+1)+')').length;
                            if(visible.length <= hiddenPrevLength){
                                visible.slideUp();
                                for(var k = i; k>i-visible.length-1; k--){
                                    $(_listPanelWrap[k]).slideDown();
                                }
                            }else{
                                _listPanelWrap.filter(':lt('+(i+1)+')').slideDown();
                               for(var b = i; b<i+hiddenPrevLength; b++){
                                   $(visible[b+(visible.length-1)]).slideUp();
                               }
                            }
                        }
                    }

                    return;
                }
            }
        },

        _calculate = function(){
            var win = $(window);
            var ul = $(_el).find('ul');
            var list = ul.find('li');
            var arrows = $(_el).find('.add-nav-arrow');
            var sum = 0;

            if(win.outerHeight() < $(_el).outerHeight()){
                $(_el).css({
                    height:win.outerHeight()-70,
                    marginTop:35,
                    marginBottom:35
                });

                ul.css({
                    height:win.outerHeight()-70,
                    'overflow-y':'hidden'
                });
                arrows.show();

                for(var i=0; i<list.length; i++){
                   sum = sum + 64;
                    if(sum > ul.outerHeight()){
                        $(list[i]).hide();
                    }
                }
            }
        },

        _handlers = function(){
           var currentScroll = $(window).scrollTop();
            var currentOffset;
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
                    if(_listPanel){
                        _listPanel.removeClass('active');
                    }

                }
                if(currentScroll > $(event.currentTarget).scrollTop()){
                     currentOffset = $(_el).offset().top;
                    _activeItem(currentOffset, 'up');
                }else if(currentScroll < $(event.currentTarget).scrollTop()){
                    currentOffset = $(_el).offset().top;
                    _activeItem(currentOffset, 'down');
                }

                currentScroll = $(event.currentTarget).scrollTop()

            });

//            $(window).on('mousewheel', function(event){
//                var currentOffset = $(_el).offset().top;
//                _activeItem(currentOffset);
//                console.log(event);
//            });

            $(_el).find('a').on('click', function(event){
                event.preventDefault();
                var scroll = $(event.currentTarget).data('navOffset');
                $(window).scrollTop(scroll);
                console.log(event);
            });

            $(_el).find('.add-nav-arrow').on('click', function(event){
                event.preventDefault();
                var visible = $(_el).find('li').filter(':visible');
                var hidden =  $(_el).find('li').filter(':hidden');
                var dataArrow = $(event.currentTarget).data('arrow');
                if(dataArrow == 'top'){
                    var prevH = visible.first().prev();
                    if(prevH.length != 0){
                        prevH.slideDown();
                        visible.last().slideUp();
                    }
                }else if(dataArrow == 'bottom'){
                   var nextH = visible.last().next();
                    if(nextH.length != 0){
                        nextH.slideDown();
                        visible.first().slideUp();
                    }
                }
            });

            $(_el).find('ul').on('mousedown mouseup', function(event){
                if(event.type == "mousedown"){
                    $(event.currentTarget).css({
                        cursor:'move'
                    });
                }else if(event.type == "mouseup"){
                    $(event.currentTarget).css({
                        cursor:'default'
                    });
                }
                 console.log(event);
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
