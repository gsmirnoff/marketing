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
                                    url:'img_001.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'image',
                                content:{
                                    url:'img_002.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'paragraph',
                                content:'Буферные склады для продукции, снабжение участков монтажа, склады инструментов или сбыт запасных частей: к&nbsp;внутренней логистике производителей автомобильной техники и коммерческого автотранспорта, а также поставщиков предъявляются четкие требования:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        value:'Интеграция различных производственных методов',
                                        classIcon:''
                                    },
                                    {
                                        value:'Философия полного отсутствия ошибок',
                                        classIcon:''
                                    },
                                    {
                                        value:'Комплексные структуры',
                                        classIcon:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Наши системы внутренней логистики завоевали доверие многих известных производителей и поставщиков - они также полностью удовлетворят Вашим требованиям. Все это подтверждается сертификатами и гарантийными обязательствами.'
                            },
                            {
                                type:'paragraph',
                                content:'Также и в программном обеспечении: от ПЛК и до ERP ваша система полностью интегрирована в&nbsp;ваши процессы. Являясь поставщиками, заслужившими доверие в&nbsp;поставке системы управления складом viad@t и&nbsp;партнером SAP уже на протяжении 20 лет, мы понимаем, что Вам необходимо.'
                            },
                        ],
                        links:[
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                        ]
                    }
                },
                {
                    title:"Автомобильная техника и коммерческий транспорт",
                    content:{
                        main:[
                            {
                                type:'image',
                                content:{
                                    url:'img_001.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'image',
                                content:{
                                    url:'img_002.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'paragraph',
                                content:'Буферные склады для продукции, снабжение участков монтажа, склады инструментов или сбыт запасных частей: к&nbsp;внутренней логистике производителей автомобильной техники и коммерческого автотранспорта, а также поставщиков предъявляются четкие требования:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        value:'Интеграция различных производственных методов',
                                        classIcon:''
                                    },
                                    {
                                        value:'Философия полного отсутствия ошибок',
                                        classIcon:''
                                    },
                                    {
                                        value:'Комплексные структуры',
                                        classIcon:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Наши системы внутренней логистики завоевали доверие многих известных производителей и поставщиков - они также полностью удовлетворят Вашим требованиям. Все это подтверждается сертификатами и гарантийными обязательствами.'
                            },
                            {
                                type:'paragraph',
                                content:'Также и в программном обеспечении: от ПЛК и до ERP ваша система полностью интегрирована в&nbsp;ваши процессы. Являясь поставщиками, заслужившими доверие в&nbsp;поставке системы управления складом viad@t и&nbsp;партнером SAP уже на протяжении 20 лет, мы понимаем, что Вам необходимо.'
                            },
                        ],
                        links:[
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                        ]
                    }
                },
                {
                    title:"Автомобильная техника и коммерческий транспорт",
                    content:{
                        main:[
                            {
                                type:'image',
                                content:{
                                    url:'img_001.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'image',
                                content:{
                                    url:'img_002.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'paragraph',
                                content:'Буферные склады для продукции, снабжение участков монтажа, склады инструментов или сбыт запасных частей: к&nbsp;внутренней логистике производителей автомобильной техники и коммерческого автотранспорта, а также поставщиков предъявляются четкие требования:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        value:'Интеграция различных производственных методов',
                                        classIcon:''
                                    },
                                    {
                                        value:'Философия полного отсутствия ошибок',
                                        classIcon:''
                                    },
                                    {
                                        value:'Комплексные структуры',
                                        classIcon:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Наши системы внутренней логистики завоевали доверие многих известных производителей и поставщиков - они также полностью удовлетворят Вашим требованиям. Все это подтверждается сертификатами и гарантийными обязательствами.'
                            },
                            {
                                type:'paragraph',
                                content:'Также и в программном обеспечении: от ПЛК и до ERP ваша система полностью интегрирована в&nbsp;ваши процессы. Являясь поставщиками, заслужившими доверие в&nbsp;поставке системы управления складом viad@t и&nbsp;партнером SAP уже на протяжении 20 лет, мы понимаем, что Вам необходимо.'
                            },
                        ],
                        links:[
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                        ]
                    }
                },
                {
                    title:"Автомобильная техника и коммерческий транспорт",
                    content:{
                        main:[
                            {
                                type:'image',
                                content:{
                                    url:'img_001.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'image',
                                content:{
                                    url:'img_002.jpg',
                                    alt:'Автомобильная техника и коммерческий транспорт'
                                }
                            },
                            {
                                type:'paragraph',
                                content:'Буферные склады для продукции, снабжение участков монтажа, склады инструментов или сбыт запасных частей: к&nbsp;внутренней логистике производителей автомобильной техники и коммерческого автотранспорта, а также поставщиков предъявляются четкие требования:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        value:'Интеграция различных производственных методов',
                                        classIcon:''
                                    },
                                    {
                                        value:'Философия полного отсутствия ошибок',
                                        classIcon:''
                                    },
                                    {
                                        value:'Комплексные структуры',
                                        classIcon:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Наши системы внутренней логистики завоевали доверие многих известных производителей и поставщиков - они также полностью удовлетворят Вашим требованиям. Все это подтверждается сертификатами и гарантийными обязательствами.'
                            },
                            {
                                type:'paragraph',
                                content:'Также и в программном обеспечении: от ПЛК и до ERP ваша система полностью интегрирована в&nbsp;ваши процессы. Являясь поставщиками, заслужившими доверие в&nbsp;поставке системы управления складом viad@t и&nbsp;партнером SAP уже на протяжении 20 лет, мы понимаем, что Вам необходимо.'
                            },
                        ],
                        links:[
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                            },
                            {
                                list:[
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
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
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
                        ]
                    }
                }

            ]
        },

        _render = function(){
          _postRender();
        },

        _postRender = function(){
           var sections = _config.sections;
            for(var i=0; i<sections.length; i++){
                var wrapper = $(_el).find('.item').eq(i).find('.content-box');
                _createContent(wrapper, sections[i].content);
            }
        },

        _createContent = function(wrap, content){
           wrap.append(_createMainContent(content.main));
           wrap.append(_createLinkContent(content.links));

        },

        _createMainContent = function(content){
            var item = [];
            var left = $('<div/>').addClass('left-col');
            var main = $('<div/>').addClass('main-col');

            for(var i=0; i<content.length; i++){
                if(content[i].type == 'image'){
                    var wrapImg = $('<div/>').addClass('left-img-box');
                    var img = $('<img/>').attr({
                        src:config.imagesUploadFolder + content[i].content.url,
                        alt:content[i].content.alt
                    });
                    wrapImg.append(img);
                    left.append(wrapImg);
                }else if(content[i].type == 'paragraph'){
                    var p = $('<p/>').text(content[i].content);
                    main.append(p);
                }else if(content[i].type == 'list'){
                    var ul = $('<ul/>');
                    for(var j=0; j<content[i].content.length; j++){
                        var li = $('<li/>').text(content[i].content[j].value);
                        ul.append(li);
                        main.append(ul);
                    }
                }
            }

            item.push(left);
            item.push(main);
           return item;
        },

        _createLinkContent = function(content){
            var wrap = $('<div/>').addClass('links-box cf');
            var h3 = $('<h3/>').addClass('simple-h3').text('Внедрения:');
                wrap.append(h3);
            for(var i=0; i<content.length; i++){
                var linkBox = $('<div/>').addClass('links-col');
                for(var j=0; j<content[i].list.length; j++){
                    var a = $('<a/>').attr({
                        href:content[i].list[j].content.href,
                        target:content[i].list[j].content.target
                    }).text(content[i].list[j].content.value);
                    linkBox.append(a);
                }
                wrap.append(linkBox);
            }
            return wrap;
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