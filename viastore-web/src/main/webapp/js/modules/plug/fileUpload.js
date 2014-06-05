/**
 * Created by SNSukhanov on 04.06.14.
 */

function FileUpload(options){
    var view = this,

        settings = {
            wrap:options.wrap || 'body',
            drag:options.drag || true,
            input:options.input || true,
            html:options.html || false,
            attr:options.attr
        },

        _container,

        _render = function(){
            if(!settings.html){
                _createHTML();
            }else{

            }
        },

        _createHTML = function(){
            var fileUploadWrap = document.createElement('div');
            fileUploadWrap.className = 'file-upload-wrap';

            var input = document.createElement('input');
            input.type = 'file';
            input.id = settings.attr.id;
            input.name = settings.attr.name || settings.attr.id;

            var label = document.createElement('label');
            label.setAttribute('for', settings.attr.id);
            label.innerText = 'Click for choose of image files';

            var drop = document.createElement('div');
            drop.className = 'file-drop';
            drop.idDrop = settings.attr.id;
            drop.nameDrop = settings.attr.name || settings.attr.id;

            _container = drop;
            var btn = document.createElement('input');
            btn.className = 'send-files';
            btn.value = 'Send';
            btn.type = 'button';

            if(!_localStorage.check()){
                _emptyContainer(drop);
            }

            fileUploadWrap.appendChild(input);
            fileUploadWrap.appendChild(label);
            fileUploadWrap.appendChild(drop);

            settings.wrap.appendChild(fileUploadWrap);
            settings.wrap.appendChild(btn);
            _handlers(input, label, drop, btn);
        },

        _emptyContainer = function(drop){
            var emptyContent = document.createElement('p');
            emptyContent.className = 'empty-content';
            emptyContent.innerText = 'Drop here image files';

            drop.appendChild(emptyContent);
        },

        _showFile = function(file){
            var reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onprogress = function(event){
                _progressImage(event);
            };

            reader.onloadstart = function(event){

            };

            reader.onloadend = function(event){
                _loadImage(event.currentTarget.result, file.name);



            };
        },

        _preloader = {
            start:function(){
                var preload = document.createElement('img');
                preload.src = 'img/254.GIF';
                preload.className = 'preloader-gif';
                return preload;
            },

            stop:function(){
                $('.preloader-gif').remove();
            }
        },

        _progressImage = function(event){

        },

        _saveFile = function(e){
            var formData = new FormData();
            formData.append('image', $(e.currentTarget).parent().find('img').attr('src'));
            $.ajax({
                beforeSend:function(request){
                    request.setRequestHeader('token', localStorage.token);
                },
                url:'api/image',
                type:'POST',
                contentType:false,
                processData:false,
                data:formData,
                success:function(data){
                    console.log(data);
                },
                error:function(e){
                    console.log(e);

                }
            });
        },

        _loadImage = function(url, name){
            var num = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
            var figure = document.createElement('figure');
                $(figure).attr({
                   'data-figure':'figure-' + num
                });
            var p = document.createElement('p');
            var img  = document.createElement('img');
            img.src = url;
            img.className = 'progress';

            var figcaption = document.createElement('figcaption');
            figcaption.innerText = name;

            p.appendChild(img);
            figure.appendChild(p);
            figure.appendChild(figcaption);

//            (function(){
//                figure.addEventListener('dragover', function(event){
//                    var figures = event.currentTarget.parentElement;
//                    var currentData = $(event.currentTarget).data('figure');
//
//
//                    for(var i=0; i<figures.children.length; i++){
//                        var item = $(figures.children[i]).data('figure');
//                        if(currentData == item){
//                            if((event.x >= figure.offsetHeight)){
//                                $(event.currentTarget).remove();
//                            }
//                        }
//                    }
//
//                });
//            })();

            if($(_container).find('.empty-content').length !== 0){
                $(_container).empty();
                _container.appendChild(figure);
            }else{
                _container.appendChild(figure);
            }

            $(img).animate({
                opacity:1
            }, 1000, function(){
                $(img).removeClass('progress');
            });

        },

        _parseFile = function(files){
            for(var i=0; i<files.length; i++){
                _showFile(files[i]);
            }
        },

        _handlers = function(input, label, drop, btn){
            input.addEventListener('change', function(event){
                event.preventDefault();
                console.log(event.currentTarget.files);
                _parseFile(event.currentTarget.files);
            });

            label.addEventListener('click', function(event){
                $(input).trigger('change');
            });

            drop.addEventListener('dragover', function(event){
                event.preventDefault();
            });

            drop.addEventListener('drop', function(event){
                event.preventDefault();
                _parseFile(event.dataTransfer.files);
            });

            btn.addEventListener('click', function(event){
                _saveFile(event);
            });
        },

        _localStorage = {
            check:function(){
                if(localStorage.files){
                    return true;
                }else{
                    return false;
                }
            },

            add:function(event, file){
                if(_localStorage.check()){
                    var localFiles = JSON.parse(localStorage.files);
                    localFiles.push({
                        url:event.currentTarget.result,
                        name:file.name
                    });
                    localStorage.files = JSON.stringify(localFiles);
                }else{
                    var arr = [
                        {
                            url:event.currentTarget.result,
                            name:file.name
                        }
                    ];
                    localStorage.files = JSON.stringify(arr);
                }
            },

            remove:function(){

            }
        };

    view.init = function(){
        _render();
    };

    view.init();


}