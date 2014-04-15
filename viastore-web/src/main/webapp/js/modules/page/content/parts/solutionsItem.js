/**
 * Created by SNSukhanov on 14.04.14.
 */

APP.solutionsItem = (function(module){
    var view = {},

        _el = '.solutions-items',
        _template = 'solutions/items',
        _partials = [],
        _config = {
            sections:[
                {
                    title:"Автомобильная техника и коммерческий транспорт",
                    content:{
                        main:[
                            {
                                type:'image',
                                content:{
                                    url:'img_001.jpj',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'image',
                                content:{
                                    url:'img_002.jpj',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'paragraph',
                                content:'Буферные склады для продукции, снабжение участков монтажа, склады инструментов или сбыт запасных частей: к&nbsp;внутренней логистике производителей автомобильной техники и&nbsp;коммерческого автотранспорта, а&nbsp;также поставщиков предъявляются четкие требования:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        classIcon:'Интеграция различных производственных методов',
                                        value:''
                                    },
                                    {
                                        classIcon:'Философия полного отсутствия ошибок',
                                        value:''
                                    },
                                    {
                                        classIcon:'Комплексные структуры',
                                        value:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Наши системы внутренней логистики завоевали доверие многих известных производителей и&nbsp;поставщиков&nbsp;&mdash; они также полностью удовлетворят Вашим требованиям. Все это подтверждается сертификатами и&nbsp;гарантийными обязательствами.'
                            },
                            {
                                type:'paragraph',
                                content:'Также и&nbsp;в&nbsp;программном обеспечении: от&nbsp;ПЛК и&nbsp;до&nbsp;ERP ваша система полностью интегрирована в&nbsp;ваши процессы. Являясь поставщиками, заслужившими доверие в&nbsp;поставке системы управления складом viad@t и&nbsp;партнером SAP уже на&nbsp;протяжении 20&nbsp;лет, мы&nbsp;понимаем, что Вам необходимо.'
                            },
                        ],
                        links:[
                            {
                                type:'link',
                                content:{
                                    value:'Antolin',
                                    href:'#',
                                    target:'_blank'
                                }
                            },
                            {
                                type:'link',
                                content:{
                                    value:'BASF',
                                    href:'#',
                                    target:'_blank'
                                }
                            },
                            {
                                type:'link',
                                content:{
                                    value:'Claas',
                                    href:'#',
                                    target:'_blank'
                                }
                            }
                        ]
                    }
                }
            ]
        },

        _render = function(){

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