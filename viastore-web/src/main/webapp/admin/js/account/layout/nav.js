/**
 * Created by SNSukhanov on 11.06.14.
 */

PLATFORM.nav = (function(){
    var view = {},

        _render = function(){
            var menu = document.getElementById('menuNav');
            var list = $(menu).find('a');
            var hash = Tools.hash();
            Tools.location(list, hash, 'Admin panel');

            (function(){
                list.on('click', function(event){
                    list.not($(event.currentTarget)).removeClass('active');
                    $(event.currentTarget).addClass('active');
                    $('title').text('Admin panel | ' + $(event.currentTarget).text());
                });
            })();
        };

    view.init = function(page){
       _render();
    };

    return view;
})();
