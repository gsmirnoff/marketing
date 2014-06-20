$(document).ready(function () {
  $('[data-clear-input]').clearButton();
});

(function ($) {
  $.fn.extend({
    clearButton: function () {
      return this.each(function () {
        var $clear = $(this),
          inputSelector = $clear.data('clear-input'),
          $input = $(inputSelector);
            
        if ($input.val() == '') {
          $clear.hide();
        }
								
				$clear.click(function(){
          $input.val('').focus();
          $clear.hide();									
				});

        $input.keyup(function () {
          if ($input.val() == '') {
            $clear.hide();
          } else {
            $clear.show();
          }
        });
      });
    }
  });
})(jQuery)
