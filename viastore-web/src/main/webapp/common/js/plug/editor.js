/**
 * Created by SNSukhanov on 23.06.14.
 */

window.EDITOR = {};

EDITOR.profile = (function(module){
    var view = {},
        formData = {},
        fields,
        buttons = [],

        _parseForm = function(callback){
            var wrap = $('.data-profile');
                fields = wrap.find('.write');
            var row = fields.parent();
                row.show();
            callback(wrap);
        },

        _edit = function(wrap){
            buttons = [];
            for(var i=0; i<fields.length; i++){
                $(fields[i]).attr({
                    'contenteditable':'true'
                }).addClass('now');
                var currentObj = $(fields[i]).data('type');
                EDITOR.profile[currentObj]().create(fields[i]);
            }
            var save = document.getElementById('saveProfile');
            var reset = document.getElementById('resetProfile');

            if(buttons.length === 0){
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
                        _save();
                        _endEdit();
                    });

                    reset.addEventListener('click', function(event){
                        _reset();
                        _endEdit();
                    });

                    wrap.append(save);
                    wrap.append(reset);

                    buttons.push(save);
                    buttons.push(reset);
                })();
            }else{
               $(buttons).show();
            }
        },

        _check = function(){
             for(var i=0; i<fields.length; i++){
                 var val = fields[i].innerText;
                 if(val === ""){
                     $(fields[i]).parent().hide();
                 }
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
            var currentSettings = workConfig.personalSettings;
               delete currentSettings.avatarUrl;
            for(var i=0; i<fields.length; i++){
                $(fields[i])
                    .removeClass('now')
                    .removeAttr('contenteditable')
                    .removeAttr('data-val');
                var id = $(fields[i]).data('id');
                var val = $(fields[i]).text();
                if(val === ""){
                    currentSettings[id] = "";
                }else{
                    if(id === 'name'){
                        var fullName = val.split(' ');
                        currentSettings.firstName = fullName[0];
                        if(fullName[1]){
                            currentSettings.lastName = fullName[1];
                        }
                    }else{
                        currentSettings[id] = val;
                    }
                }
            }

            console.log(currentSettings);

            userSettings.setProfile(currentSettings, function(){
                _endEdit();
            });
        },



        _startEdit = function(){
            _parseForm(_edit);
        },

        _checkForm = function(){
          _parseForm(_check);
        },

        _endEdit = function(){
           for(var i=0; i<buttons.length; i++){
               $(buttons[i]).hide();
           }
            _checkForm();

        };

    view.text = function(){
      return _text;
    };

    view.init = function(){
      return {
          start:_startEdit,
          stop:_endEdit,
          check:_checkForm
      };
    };

    return view;
})(EDITOR.profile);