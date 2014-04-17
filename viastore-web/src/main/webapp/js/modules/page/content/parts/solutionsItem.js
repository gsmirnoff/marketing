/**
 * Created by SNSukhanov on 14.04.14.
 */

APP.solutionsItem = (function(module){
    var view = {},

        _el = '.solutions-items',
        _template = 'solutions/items',
        _partials = [],
        _config = {
            item:'.item',
            wrapperContent:'.content-box',
            navPanel:'.add-nav-panel'
        },

        _render = function(){
            TemplateManager.get({mainTemplate:_template, partials:_partials}, function (tmp) {
                var html = tmp(Tools.extend(_config));
                $(_el).html(html);
                _postRender();
            });
        },

        _postRender = function(){
           var sections = _config.sections;
            for(var i=0; i<sections.length; i++){
                var navPanel = $(_config.navPanel).find('a').eq(i);
                var item = $(_el).find(_config.item).eq(i);
                var wrapper = item.find(_config.wrapperContent);
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
                switch(content[i].type){
                    case 'image':{
                        var wrapImg = $('<div/>').addClass('left-img-box');
                        var img = $('<img/>').attr({
                            src:config.imagesUploadFolder + content[i].content.url,
                            alt:content[i].content.alt
                        });
                        wrapImg.append(img);
                        left.append(wrapImg);
                    }
                        break;
                    case 'paragraph':{
                        var p = $('<p/>').text(content[i].content);
                        main.append(p);
                    }
                        break;
                    case 'list':{
                        var ul = $('<ul/>');
                        for(var j=0; j<content[i].content.length; j++){
                            var li = $('<li/>').text(content[i].content[j].value);
                            ul.append(li);
                            main.append(ul);
                        }
                    }
                        break;
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
        REQUEST.initRequest({
            url:'pages/solutions',
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