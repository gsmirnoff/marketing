
$(document).ready(function () {
    $('input[placeholder]').labelPlaceHolder();
});

(function ($) {
    $.fn.extend({
        labelPlaceHolder: function () {
            return this.each(function () {
                var $input = $(this).addClass('has-placeholder');
                var labelElement = '<label class="placeholder" for=' + $input.attr('id') + '>' + $input.attr('placeholder') + '</label>';
                var $label = $(labelElement).css({
                    'position': 'absolute',
                    'top': $input.position().top,
                    'left': $input.position().left
                }).insertBefore($input);

                if ($input.val()) {
                    $label.hide();
                }
								
				$label.click(function(){
						$input.focus();									
				});

                $input.focus(function () {
                    $label.hide();
                    
                }).blur(function () {
                    if (!$input.val()) {
                        $label.show();
                    }

                }).change(function () {
                    if (!$input.val() && !$input.is(':focus')) {
                        $label.show();
                    }
                });
            });
        }
    });
})(jQuery)
