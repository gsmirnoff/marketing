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

        _render = function(){
            if(!settings.html){
                _createHTMLAvatar();
            }else{

            }
        },

        _createHTMLAvatar = function(){
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

            if(settings.drop){
                wrap.appendChild(drop);
            }

            if(settings.input){
               if(settings.before){
                   wrap.prependChild(label);
                   wrap.prependChild(input);
               }else{
                   wrap.appendChild(input);
                   wrap.appendChild(label);
               }
            }

            $(settings.wrap).append(wrap);
        },

        _createHTMLUploader = function(){

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

            var uploadedImg = document.createElement('div');
                uploadedImg.className = 'uploaded-image';

            if(!_localStorage.check()){
                _emptyContainer(drop);
            }

            fileUploadWrap.appendChild(input);
            fileUploadWrap.appendChild(label);
            fileUploadWrap.appendChild(drop);

            settings.wrap.appendChild(fileUploadWrap);
            settings.wrap.appendChild(btn);
            settings.wrap.appendChild(uploadedImg);

            _getFile(uploadedImg);

            //main handlers
            (function(){


                input.addEventListener('change', function(event){
                    event.preventDefault();
                    _parseFile(event.currentTarget.files);
                });

                label.addEventListener('click', function(event){
                    event.preventDefault();
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
                    event.preventDefault();
                    _saveFile(event);
                });
            })();
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

        _getFile = function(wrap){
            $.ajax({
                beforeSend:function(request){
                    request.setRequestHeader('token', localStorage.token);
                },
                url:'api/image/' + '53906010e82e62ca35ac915a',
                type:'GET',
                contentType:'application/json',
                success:function(data){
                  var img =$('<img/>').attr({
                        src:data.response.data
                    });
                    $(wrap).append(img);
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
                img.className = 'progress';

            //edit layout
            var editLayout = document.createElement('div');
                editLayout.className = 'edit-layout';
            var editBtn = document.createElement('span');
                editBtn.className = 'edit';
            var deleteBtn = document.createElement('span');
                deleteBtn.className = 'delete';

            editLayout.appendChild(editBtn);
            editLayout.appendChild(deleteBtn);

            var figcaption = document.createElement('figcaption');
            figcaption.innerText = name;

            p.appendChild(img);
            p.appendChild(editLayout);
            figure.appendChild(p);
            figure.appendChild(figcaption);

            //handlers
            (function(){
                figure.addEventListener('dragover', function(event){
                   console.log(event);
                });

                editLayout.addEventListener('mouseover', function(event){
                    if(event.target === event.currentTarget){
                        $(this).animate({
                            opacity:0.6
                        });
                    }

                });

                editLayout.addEventListener('mouseout', function(event){
                    var edit = event.currentTarget.children[0];
                    var del = event.currentTarget.children[1];

                    if(event.target === event.currentTarget){
                        if((event.toElement != edit) && (event.toElement != del)){
                            $(this).animate({
                                opacity:0
                            });
                        }
                    }
                });

                editBtn.addEventListener('click', function(event){
                    $(event.currentTarget.parentNode).animate({
                        opacity:0
                    });
                    _modal.newModal().create(function(wrap){
                        _contentModal(event, wrap);
                    });
                });

                deleteBtn.addEventListener('click', function(event){
                    console.log(event);
                });


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

        _contentModal = function(event, wrap){
            var figure = $(event.currentTarget).parents('figure');

            var wrapModalImg = document.createElement('div');
            wrapModalImg.className = 'wrap-modal-img';
            var titleModal = document.createElement('h2');
            titleModal.setAttribute('contenteditable', 'true');
            titleModal.innerText = figure.find('figcaption').text();

            var imgModal = document.createElement('img');
            imgModal.setAttribute('data-modal-figure', $(figure).data('figure'));
            imgModal.src = figure.find('img').attr('src');

            wrapModalImg.appendChild(titleModal);
            wrapModalImg.appendChild(imgModal);

            var wrapModalEdit = document.createElement('div');
            wrapModalEdit.className = 'wrap-modal-edit';

            wrap.appendChild(wrapModalImg);
            wrap.appendChild(wrapModalEdit);
            _modal.newModal().setModal(wrap);
        },

        _parseFile = function(files){
            for(var i=0; i<files.length; i++){
                _showFile(files[i]);
            }
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