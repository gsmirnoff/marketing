/**
 * Created by SNSukhanov on 04.06.14.
 */

function FileUpload(){
    var view = this,

        settings = {
            tmpl:{

            }
        },
        _modal,

        _container,
        _loaded,

        _render = function(){
            if(!settings.html){
                _createHTML();
            }else{

            }
        },

        _createHTML = function(){
            var wrap = document.createElement('div');
                wrap.className = 'wrap-' + settings.type;

            var input = document.createElement('input');
                input.type = 'file';
                input.id = settings.attr.id;
                input.name = settings.attr.name || settings.attr.id;

            var label = document.createElement('label');
                label.setAttribute('for', settings.attr.id);
                label.innerText = 'Click for choose of image files';

            var drop = document.createElement('div');
                drop.className = 'file-drop-' + settings.type;
                drop.idDrop = settings.attr.id;
                drop.nameDrop = settings.attr.name || settings.attr.id;

            var loaded = document.createElement('div');
                loaded.className = 'loaded-images-' + settings.type;

            var btn = document.createElement('input');
                btn.className = 'send-file-' + settings.type;
                btn.value = 'Load';
                btn.type = 'button';

            _container = drop;
            _loaded = loaded;

            if(settings.drop){
                wrap.appendChild(drop);
            }

            if(settings.input){
               if(settings.before){
                   $(wrap).prepend(label);
                   $(wrap).prepend(input);
               }else{
                   wrap.appendChild(input);
                   wrap.appendChild(label);
               }
            }

            _emptyContainer(drop, label);

            if(workConfig.avatarUrl){
                var wrapperAvatar = document.createElement('div');
                    wrapperAvatar.className = 'current-avatar';
                var currentAvatar = document.createElement('img');
                    currentAvatar.src = workConfig.avatarUrl;
                wrapperAvatar.appendChild(currentAvatar);
            }

            $(settings.wrap).append(wrap);
            $(settings.wrap).append(btn);
            $(settings.wrap).append(loaded);

            (function(){
                input.addEventListener('change', function(event){
                    event.preventDefault();
                    _parseFile(event.currentTarget.files);
                });

                label.addEventListener('click', function(event){
                    event.preventDefault();
                    $(input).trigger('click');
                });

                drop.addEventListener('dragover', function(event){
                    event.preventDefault();
                });

                drop.addEventListener('drop', function(event){
                    event.preventDefault();
                    _parseFile(event.dataTransfer.files);
                });

                btn.addEventListener('click', function(event){
                    event.preventDefault();
                    _saveFile(event);
                });
            })();
        },

        _emptyContainer = function(drop, label){
            var emptyContent = document.createElement('div');
            emptyContent.className = 'empty-content';

            var dropPlace = document.createElement('p');
            dropPlace.innerText = 'Drop a photo here';

            var or = document.createElement('p');
                or.innerText = 'or';

            var fakeFileBtn = document.createElement('div');
            fakeFileBtn.className = 'fake-file-input';
            fakeFileBtn.innerText = 'Select a photo from your computer';

            emptyContent.appendChild(dropPlace);
            emptyContent.appendChild(or);
            emptyContent.appendChild(fakeFileBtn);

            (function(){
                fakeFileBtn.addEventListener('click', function(event){
                    event.preventDefault();
                    $(label).trigger('click');
                });
            })();

            drop.appendChild(emptyContent);
        },

        _showFile = function(file){
            var reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onprogress = function(event){

            };

            reader.onloadstart = function(event){

            };

            reader.onloadend = function(event){
                _loadImage(event.currentTarget.result, file.name);



            };
        },

        _saveFile = function(e){
            var formData = new FormData();
            formData.append('image', $(e.currentTarget).parent().find('img').attr('src'));
            $.ajax({
                beforeSend:function(request){
                    request.setRequestHeader('token', PLATFORM.getToken());
                },
                url:'/api/image',
                type:'POST',
                contentType:false,
                processData:false,
                data:formData,
                success:function(data){
                    workConfig.personalSettings.avatarId = data.response.id;
                    var event = $.Event('changeAvatar');
                        event.avatarId = workConfig.personalSettings.avatarId;
                        event.callbackAvatar = function(){
                          window.modal.delete();
                        };
                    $(document).trigger(event);

                },
                error:function(e){
                    console.log(e);

                }
            });
        },

        _loadImage = function(url, name){
            var num = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
            var figure = document.createElement('figure');
                figure.setAttribute('data-figure', 'figure-' + num);

            var p = document.createElement('p');
            var img  = document.createElement('img');
                img.src = url;

            var figcaption = document.createElement('figcaption');
            figcaption.innerText = name;

            p.appendChild(img);
            figure.appendChild(p);
            figure.appendChild(figcaption);

            //handlers
            (function(){



            })();

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
        };

    view.init = function(options){
        settings = {
            wrap:options.wrap || 'body',
            drop:options.drop || true,
            input:options.input || true,
            html:options.html || false,
            attr:options.attr,
            type: options.type || 'uploader',
            before:options.before || false
        };

        _render();
//        _modal = new Modal();

    };
}
