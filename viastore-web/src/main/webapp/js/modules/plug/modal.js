/**
 * Created by SNSukhanov on 05.06.14.
 */

function Modal(){
    var view = this,

        _render = function(){

        },

        _newModal = {
            create:function(callback){
                $(document.body).append(_createModal(callback));
            },

            setModal:function(modal){
               console.log(modal);
                var marginTop = 100 + window.scrollY;
                var marginLeft = (window.outerWidth/2)-(500/2);
                $(modal).css({
                    'margin-top':marginTop,
                    'margin-left':marginLeft
                });
            },

            delete:function(m){
               $(m).remove();
            }
        },

        _createModal = function(callback){
            var m = [];
            var layout = document.createElement('div');
                layout.className = 'layout-modal modal';
            var close = document.createElement('div');
                close.className = 'close-modal modal';
            var modal = document.createElement('div');
                modal.className = 'modal-window modal';
            m.push(layout);
            m.push(close);
            m.push(modal);

            (function(){
                layout.addEventListener('click', function(event){
                    $(m).fadeOut(400, function(){
                        _newModal.delete(m);
                    });
                });
                layout.addEventListener('keyup', function(event){
                    if(event.keyCode == 27){
                        $(m).fadeOut(400, function(){
                            _newModal.delete(m);
                        });
                    }
                });

                close.addEventListener('click', function(event){
                   console.log(event);
                    $(m).fadeOut(400, function(){
                        _newModal.delete(m);
                    });
                });
            })();

            callback(modal);

            $(m).show();

            return m;
        };

    view.newModal = function(){
         return _newModal;
    };

    view.init = function(){

    };

    view.init();
}