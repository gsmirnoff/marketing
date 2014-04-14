/**
 * Created by SNSukhanov on 10.04.14.
 */

APP.SwitcherItem = (function(module){
    var view = {},

        _el = '.switcher-items',
        _template = 'index/switcherItem',
        _partials = [],
        _config = {
            sections:[
                {
                    title:'Архив сбербанка',
                    content:[
                        {
                            type:'text',
                            label:'logo-sberbank.png',
                            uploadImg:'pr-sberbank.jpg',
                            slideContent:[
                                {
                                    type:'paragraph',
                                    content:'Создании единого Архивно-логистического центра по хранению и обработке банковской документации.'
                                },
                                {
                                    type:'list',
                                    content:[
                                        {
                                            classIcon:'pr-ic-robot',
                                            value:'склад-автомат'
                                        },
                                        {
                                            classIcon:'pr-ic-archive',
                                            value:'более 2 млн.коробов с документами'
                                        },
                                        {
                                            classIcon:'pr-ic-oxygen',
                                            value:'зона хранения с пониженным содержанием кислорода'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type:'graph',
                            smallImg:'sber-small.png',
                            mediumImg:null,
                            largeImg:'sber-large.png',
                            linkDetails:''
                        }
                    ]
                },
                {
                    title:'Склад запасных частей Ростельмаш',
                    content:[
                        {
                            type:'text',
                            label:'logo-rostselmash.png',
                            uploadImg:'pr-rostselmash.jpg',
                            slideContent:[
                                {
                                    type:'paragraph',
                                    content:'Ростсельмаш предпринял комплексную реструктуризацию всей логистики запасных деталей.'
                                },
                                {
                                    type:'list',
                                    content:[
                                        {
                                            classIcon:'pr-ic-warehouse',
                                            value:'крупнейший в России склад  зап.частей для сельскохозяйственных машин'
                                        },
                                        {
                                            classIcon:'pr-ic-triangle',
                                            value:'уникальная оптимизация хранения на консольных стеллажах: точность размещения до 1см'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Crocus International',
                    content:[
                        {
                            type:'text',
                            label:'logo-rocus.png',
                            uploadImg:'pr-crocus.jpg',
                            slideContent:[
                                {
                                    type:'paragraph',
                                    content:'Расширение склада и автоматизация складских процессов. Был сооружен 5-проходный автоматический высокостеллажный склад по принципу элеваторной конструкции.'
                                },
                                {
                                    type:'list',
                                    content:[
                                        {
                                            classIcon:'pr-ic-robot',
                                            value:'склад-автомат'
                                        },
                                        {
                                            classIcon:'pr-ic-rule',
                                            value:'самый высокий склад автоматизированного хранения в вост.европе - 43м'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title:'Мироновский хлебопродукт',
                    content:[
                        {
                            type:'text',
                            label:'logo-mironovskij.png',
                            uploadImg:'pr-miro.jpg',
                            slideContent:[
                                {
                                    type:'paragraph',
                                    content:'В зоне хранения специалистами First Line Software создан самый большой в Европе и Азии склад холодного хранения.   Это первый склад в Украине, где работают только роботы.'
                                },
                                {
                                    type:'list',
                                    content:[
                                        {
                                            classIcon:'pr-ic-robot',
                                            value:'склад-автомат'
                                        },
                                        {
                                            classIcon:'pr-ic-warehouse',
                                            value:'крупнейший в Вост.Европе склад-холодильник для хранения замороженных мясопродуктов'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        _render = function(){
            _postRender();
        },

        _postRender = function(){
            var sections = _config.sections;

            for(var j=0; j<sections.length; j++){
                var sectionSwitcher = $(_el).children().eq(j).find('.slides-all');
                for(var i=0; i<sections[j].content.length; i++){
                    var sectionWrap = $('<div/>').addClass('slide-cont cf');
                    if(sections[j].content[i].type == 'text'){
                        _createTextTemplate(sectionWrap, sections[j].content[i]);
                    }else if(sections[j].content[i].type == 'graph'){
                        _createGraphTemplate(sectionWrap, sections[j].content[i]);
                    }
                    sectionSwitcher.append(sectionWrap);
                }
            }
            var sectionsEl = $(_el).find('.project-item');
            var slider = new ContentSwitcher();
            slider.init(sectionsEl.children());
        },

        _createTextTemplate = function(wrap, data){
            var wrapImg = $('<div/>').addClass('project-it-img');
            var wrapText = $('<div/>').addClass('project-it-text');
            var content = [];

            var imgUpload = $('<img/>').attr({
                src:config.imagesUploadFolder + data.uploadImg
            });

            var logoWrap = $('<div/>').addClass('project-it-logo');
            var logo = $('<img/>').attr({
               src:config.imagesFolder + data.label
            });
            logoWrap.append(logo);

            wrapImg.append(imgUpload);
            wrapImg.append(logoWrap);

            for(var i=0; i< data.slideContent.length; i++){
                var type = data.slideContent[i].type;

                if(type == 'paragraph'){
                    var p = $('<p/>').text(data.slideContent[i].content);
                    content.push(p);
                }else if(type == "list"){
                    var ul = $('<ul/>').addClass('project-list');
                    for(var j=0; j<data.slideContent[i].content.length; j++){
                        var li = $('<li/>').addClass(data.slideContent[i].content[j].classIcon);
                        var span = $('<span/>').text(data.slideContent[i].content[j].value);
                        li.append(span);
                        ul.append(li);
                    }
                    content.push(ul);
                }
            }

            wrapText.html(content);
            wrap.append(wrapImg);
            wrap.append(wrapText);

        },

        _createGraphTemplate = function(wrap, data){
            var infoBox = $('<div/>').addClass('info-box');
            if(data.smallImg){
                var smallImage = $('<img/>').addClass('small').attr({
                    src:config.imagesUploadFolder + data.smallImg
                });
                infoBox.append(smallImage);
            }
            if(data.mediumImg){
                var mediumImage = $('<img/>').addClass('medium').attr({
                    src:config.imagesUploadFolder + data.mediumImg
                });
                infoBox.append(mediumImage);
            }
            if(data.largeImg){
                var largeImage = $('<img/>').addClass('large').attr({
                    src:config.imagesUploadFolder + data.largeImg
                });
                infoBox.append(largeImage);
            }
            var link = $('<a/>').text('Подробнее').addClass('slide-btn').attr({
                href:"#"
            });
            infoBox.append(link);
            wrap.append(infoBox);

            (function(){
                link.on('click', function(event){
                    event.preventDefault();
                    console.log(event);
                });
            })();
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