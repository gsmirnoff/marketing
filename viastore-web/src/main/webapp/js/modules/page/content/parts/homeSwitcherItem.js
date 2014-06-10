/**
 * Created by SNSukhanov on 10.04.14.
 */

APP.SwitcherItem = (function(module){
    var view = {},

        _el = '.switcher-items',
        _template = 'index/switcherItem',
        _partials = [],
        _config = {},

        _render = function(){
            TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
                var html = tmp(Tools.extend(_config));
                $(_el).html(html);
                _postRender();
            });
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

        _getHome = function(view){
            var self = this;
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
                href:config.docsFolder + data.linkDetails,
                target:data.linkTarget
            });
            infoBox.append(link);
            wrap.append(infoBox);

            (function(){
                link.on('click', function(event){

                    console.log(event);
                });
            })();
        };

//    view.createUpdateSection = function(){
//        var data = _config.sections[2];
//        var newSlide = {
//            largeImg:'crocus-large.png',
//            linkDetails:null,
//            linkTarget:'_blank',
//            mediumImg:null,
//            smallImg:'crocus-small.png',
//            type:'graph'
//        };
//        data.content.push(newSlide);
//        console.log(data);
//        view.update('4', data);
//    };

//    view.update = function(id, dataID){
//        REQUEST.initRequest({
//            url:'content/home/'+id,
//            data:JSON.stringify(dataID),
//            success:function(data){
//                console.log(data);
//            },
//            error:function(error){
//                console.log(error);
//            }
//        }, 'PUT', 'json');
//    };

    view.init = function(){
        REQUEST.initRequest({
            url:'content/home',
            success:function(data){
                _config.sections = data;
            },
            next:function(){
                _render();
            }
        }, 'GET', 'json');
    };

    return view;
})(APP);