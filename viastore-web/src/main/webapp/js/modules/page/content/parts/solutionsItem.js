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
                            }
                        ],
                        links:[
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'Antolin',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_fr/new_installations_case_studies/viastore_FR_EtudesCas81_Magasin_Grande_Hauteur_Antolin_Cambrai.pdf',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'BASF',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_com/new_installations_case_studies/viastore_EN_CaseStudy14_Distribution_Center_BASF_Coatings.pdf',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Claas',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_com/customers_magazine/viastore_EN_intralogistik_news_2008_3.pdf',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Freightliner',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_com/customers_magazine/viastore_EN_intralogistik_news_2009_1.pdf',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Global Ebgine',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_us/new_installations_case_studies/viastore_US_CaseStudy85_Global_Engine_Manufacturing_Association_GEMA.pdf',
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
                                            value:'HANSA-FLEX',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_com/modernization_case_studies/viastore_EN_CaseStudy44_Component_Warehouse_HANSA-FLEX_Hydraulik.pdf',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'John Deere',
                                            href:'http://www.viastore.ru/fileadmin/Mediendatenbank/downloads_com/customers_magazine/viastore_EN_intralogistik_news_2008_3.pdf',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Mekra Lang',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'RECARO',
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
                                            value:'Robert Bosch',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Россельмаш',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'SBS Deutschland',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Vogler',
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
                    title:"Строительство",
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
                                content:'Отрасль производства строительных материалов и конструкций имеет свои законы:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        value:'Взаимозаменяемые товары',
                                        classIcon:''
                                    },
                                    {
                                        value:'Сезонные колебания',
                                        classIcon:''
                                    },
                                    {
                                        value:'Учет специфических свойств продукции, например, минимального срока хранения',
                                        classIcon:''
                                    },
                                    {
                                        value:'Краткосрочные спрос и заказы на отзыв товара',
                                        classIcon:''
                                    },
                                    {
                                        value:'Адресная поставка',
                                        classIcon:''
                                    },
                                    {
                                        value:'Высочайшее качество доставки',
                                        classIcon:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Ваша внутренняя логистика и система управления складом обеспечивают при этом вам поддержку. Получите преимущество, используя наш опыт.'
                            }
                        ],
                        links:[
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'Jung',
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
                                            value:'Conmetall',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Dorma',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Frieking',
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
                                            value:'Keimfarben',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'RIDI-Leuchten',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Sto',
                                            href:'#',
                                            target:'_blank'
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Viega',
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
                    title:"Химия",
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
                                content:'В химической отрасли действуют строгие правила:'
                            },
                            {
                                type:'paragraph',
                                content:' Вы должны отслеживать движение сырья и готовых изделий по всей цепи поставок, контролировать и безошибочно документировать в рамках менеджмента товаров номера партий и серийные номера, а также информацию о минимальном сроке годности и данные BBE. Безопасность и открытость ваших процессов при этом настолько же важны, как и высокая доступность товаров.'
                            },
                            {
                                type:'paragraph',
                                content:' Все это требует продуманной системы внутренней логистики – с системой управления складом, удовлетворяющей строжайшим требованиям систем сертификации и валидации, например, IFS и GAMP, контролирующей комиссионированием ваших товаров согласно FIFO или FEFO и обеспечивающей раздельное хранение несовместимых товаров.'
                            },
                            {
                                type:'paragraph',
                                content:'Для особых требований к хранению, предполагающему контроль температуры, мы предлагаем системы, обеспечивающие поддержание на складе температуры до -42°C.'
                            }
                        ],
                        links:[
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'BASF',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'CHT',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Orochemie',
                                            href:'',
                                            target:''
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    title:"Сбыт запасных частей",
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
                                content:'При обеспечении ваших клиентов запасными частями необходимо гибко, оперативно и компетентно реагировать на индивидуальные пожелания. Ведь ожидание нужных запасных частей стоит денег и нервов.'
                            },
                            {
                                type:'paragraph',
                                content:'Широкий спектр разнородных товаров, быстрая и точная поставка, а также высочайшее качество – это только некоторые требования, которые должны быть удовлетворены.'
                            },
                            {
                                type:'paragraph',
                                content:'Наши инновационные решения в сфере внутренней логистики могут помочь вам в этом, а viad@t обеспечивает максимальную прозрачность запасов и их оптимальную привязку к отправке. Интеллектуальные решения для комиссионирования сокращают продолжительность работ и число ошибок.'
                            },
                            {
                                type:'paragraph',
                                content:'Благодаря этому каждый клиент незамедлительно получает то, что ему нужно – если это ему нужно.'
                            }
                        ],
                        links:[
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'Lufthansa CityLine',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'sbs',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'TRUMPF',
                                            href:'',
                                            target:''
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    title:"Еда и напитки",
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
                                content:'В пищевой промышленности важно оптимально и гибко реагировать на требования торговой сети, гастрономии и потребителей – быстро и надежно предоставлять в различном количестве скоропортящиеся товары.'
                            },
                            {
                                type:'paragraph',
                                content:'Это требует высочайшей эффективности и понимания процесса – и именно в сфере внутренней логистики.'
                            },
                            {
                                type:'paragraph',
                                content:'Мы поставляем энергоэффективные и надежные склады-холодильники и склады глубокой заморозки.'
                            },
                            {
                                type:'paragraph',
                                content:'Безусловно, с системой управления складом, контролирующей номер партии и серийный номер, информацию о минимальном сроке хранения и данные BBE, при помощи которой вы можете отслеживать движение любого товара по всей цепи поставок, и которая контролирует комиссионирование ваших товаров согласно FIFO или FEFO.'
                            },
                            {
                                type:'paragraph',
                                content:'Это обеспечивает прозрачность запасов также и при значительном разнообразии продукции.'
                            }
                        ],
                        links:[
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'Cargill',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'St.Alban',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Farmland',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'GFS',
                                            href:'',
                                            target:''
                                        }
                                    },{
                                        type:'link',
                                        content:{
                                            value:'Hagesud',
                                            href:'',
                                            target:''
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    title:"Торговля и электронная коммерция",
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
                                content:'Требования клиентов в сфере торговли достаточно четки:'
                            },
                            {
                                type:'list',
                                content:[
                                    {
                                        value:'Максимальная доступность товаров при непрерывно расширяющейся палитре единиц учета запасов',
                                        classIcon:''
                                    },
                                    {
                                        value:'Быстрые и ориентированные на спрос поставки',
                                        classIcon:''
                                    },
                                    {
                                        value:'Абсолютная точность при выполнении заказов',
                                        classIcon:''
                                    },
                                    {
                                        value:'Информация о доступности и статусе поставки должна быть доступна в любой момент',
                                        classIcon:''
                                    },
                                    {
                                        value:'Колеблющиеся объемы партий вплоть до единицы',
                                        classIcon:''
                                    },
                                    {
                                        value:'Сильные сезонные колебания количества заказов',
                                        classIcon:''
                                    }
                                ]
                            },
                            {
                                type:'paragraph',
                                content:'Все это ведет к увеличению расходов и требует весьма гибкой и эффективной внутренней логистики.'
                            },
                            {
                                type:'paragraph',
                                content:'Благодаря нашим решениям вы всегда сможете оперативно реагировать на пожелания ваших клиентов. Это обеспечивают комплексная концепция управления с эффективным программным обеспечением, интеллектуальные системы комиссионирования и оптимальная интеграция отгрузки.'
                            },
                        ],
                        links:[
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'AIV',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Boscov`s',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'M.Bach',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Cafepress',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Centraal boekhuis',
                                            href:'',
                                            target:''
                                        }
                                    }
                                ]
                            },
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'Heimburger',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'JBS Packerland',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'J.Rettenmaier & Söhne',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Krüger',
                                            href:'',
                                            target:''
                                        }
                                    }
                                ]
                            },
                            {
                                list:[
                                    {
                                        type:'link',
                                        content:{
                                            value:'Laiterie de Saint Denis de l’Hôtel',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Remstalkellerei',
                                            href:'',
                                            target:''
                                        }
                                    },
                                    {
                                        type:'link',
                                        content:{
                                            value:'Schwan’s',
                                            href:'',
                                            target:''
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
                var navPanel = $('.add-nav-panel').find('a').eq(i);
                var item = $(_el).find('.item').eq(i);
                var wrapper = item.find('.content-box');
                _createContent(wrapper, sections[i].content, _offset, item, navPanel);
            }
        },

        _offset = function(item, nav){
            var offsetTop = item.offset().top;
            var offsetBottom = item.offset().top + item.outerHeight();
            item.attr({
                'data-offset-top':offsetTop,
                'data-offset-bottom':offsetBottom
            });
            nav.attr({
                'data-nav-offset':offsetTop
            });
        },

        _createContent = function(wrap, content, callback, item, nav){
           wrap.append(_createMainContent(content.main));
           wrap.append(_createLinkContent(content.links));

           callback(item, nav);

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