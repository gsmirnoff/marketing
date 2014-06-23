/**
 * Created by SNSukhanov on 23.06.14.
 */

window.EDITOR = {};

EDITOR.profile = (function(module){
    var view = {},
        formData = {},
        fields,

        _parseForm = function(){
            var wrap = $('.data-profile');
                fields = wrap.find('.write');
            for(var i=0; i<fields.length; i++){
                $(fields[i]).attr({
                    'contenteditable':'true'
                }).addClass('now');
                var currentObj = $(fields[i]).data('type');
                EDITOR.profile[currentObj]().create(fields[i]);
            }
            var save = document.getElementById('saveProfile');
            var reset = document.getElementById('resetProfile');

            if(!save && !reset){
                (function(){
                    var save = document.createElement('input');
                    save.type = 'button';
                    save.id = 'saveProfile';
                    save.value = 'Save profile';
                    save.className = 'button-default';

                    var reset = document.createElement('input');
                    reset.type = 'button';
                    reset.id = 'resetProfile';
                    reset.value = 'Reset profile';
                    reset.className = 'button-default';

                    save.addEventListener('click', function(event){
                        $(save).hide();
                        $(reset).hide();
                       _save();
                    });

                    reset.addEventListener('click', function(event){
                        _reset();
                        $(save).hide();
                        $(reset).hide();
                    });

                    wrap.append(save);
                    wrap.append(reset);
                })();
            }else{
                $(save).show();
                $(reset).show();
            }

        },

        _text = {
            create:function(field){
                _text.events(field);
            },

            events:function(field){
                field.addEventListener('keyup', function(event){
                    console.log(event);
                });
                field.addEventListener('focus', function(event){
                    console.log(event);
                    $(field).attr('data-val', event.currentTarget.innerText);
                });
                field.addEventListener('blur', function(event){
                    formData[$(event.currentTarget).data('id')] = event.currentTarget.innerText;
                });
            }
        },

        _reset = function(){
            for(var i=0; i<fields.length; i++){
               $(fields[i])
                   .removeClass('now')
                   .removeAttr('contenteditable');

               if($(fields[i]).data('val') !== undefined){
                   fields[i].innerText = $(fields[i]).data('val');
               }
           }
        },

        _save = function(){
            for(var i=0; i<fields.length; i++){
                $(fields[i])
                    .removeClass('now')
                    .removeAttr('contenteditable')
                    .removeAttr('data-val');
            }

        },



        _startEdit = function(){
            console.log('start');
            _parseForm();
        },

        _endEdit = function(){
           console.log('stop');
        };

    view.text = function(){
      return _text;
    };

    view.init = function(){
      return {
          start:_startEdit,
          stop:_endEdit
      };
    };

    return view;
})(EDITOR.profile);