var $ = require("../../libs/jquery/jquery.js");

(function(window){

    ABPasswordStrengthIndicator.indicators_amount = 0;

    ABPasswordStrengthIndicator.color_none          = '#eee';
    ABPasswordStrengthIndicator.color_weak          = '#B22D00';
    ABPasswordStrengthIndicator.color_average       = '#FFBF00';
    ABPasswordStrengthIndicator.color_strong        = '#00B400';
    ABPasswordStrengthIndicator.color_weak_text     = '#B22D00';
    ABPasswordStrengthIndicator.color_average_text  = '#FF8000';
    ABPasswordStrengthIndicator.color_strong_text   = '#00B400';


    ABPasswordStrengthIndicator.indicator_meter_full_width = 0;

    function ABPasswordStrengthIndicator()
    {

    }

    ABPasswordStrengthIndicator.init = function(field)
    {
        if (!field)
        {
            alert("AB Password Strength Indicator says: A password input DOM element needs to be provided in the init parameters");
        };

        ABPasswordStrengthIndicator.indicators_amount += 1;

        

        $(field).after
        (
            '<div class="password-strength-indicator" id="password-strength-indicator-' + ABPasswordStrengthIndicator.indicators_amount + '">' +
                '<div class="strength-meter">' +
                    '<div class="sm-rect sm-rect1"></div>' +
                    '<div class="sm-rect sm-rect2"></div>' +
                    '<div class="sm-rect sm-rect3"></div>' +
                '</div>' +
                '<span class="display-text">Minimum 6 characters</span>' +
            '</div>'
        );

        ABPasswordStrengthIndicator.indicator_meter_full_width = $('.sm-rect').width();

        $('.sm-rect').css('width', '0');

        var indicator_field = $('#password-strength-indicator-' + ABPasswordStrengthIndicator.indicators_amount);


        $(field).css('position', 'relative');
        indicator_field.css('top', $(field).height() - 3);



        $(field).focus(function(e) 
        {
            indicator_field.css('opacity', '1');
        });

        $(field).blur(function(e) 
        {
            indicator_field.css('opacity', '0'); 
        });

        $(field).keyup(function(e) 
        {
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            var enoughRegex = new RegExp("(?=.{6,}).*", "g");

            // console.log($('#password-strength-indicator-' + ABPasswordStrengthIndicator.indicators_amount + ' > p'));

            if (false == enoughRegex.test($(this).val())) 
            {
                indicator_field.children('.display-text').text('Minimum 6 characters');
                indicator_field.children('.display-text').css('color', ABPasswordStrengthIndicator.color_weak_text);

                $('.sm-rect').css('width', '0');
                $('.strength-meter').css('margin-right', '0px');

                $('.sm-rect1').css('background-color', ABPasswordStrengthIndicator.color_none);
                $('.sm-rect2').css('background-color', ABPasswordStrengthIndicator.color_none);
                $('.sm-rect3').css('background-color', ABPasswordStrengthIndicator.color_none);
            } 
            else if (strongRegex.test($(this).val())) 
            {
                indicator_field.children('.display-text').text('password strength: strong');
                indicator_field.children('.display-text').css('color', ABPasswordStrengthIndicator.color_strong_text);

                $('.sm-rect').css('width', ABPasswordStrengthIndicator.indicator_meter_full_width);
                $('.strength-meter').css('margin-right', '10px');

                $('.sm-rect1').css('background-color', ABPasswordStrengthIndicator.color_strong);
                $('.sm-rect2').css('background-color', ABPasswordStrengthIndicator.color_strong);
                $('.sm-rect3').css('background-color', ABPasswordStrengthIndicator.color_strong);
            }
            else if (mediumRegex.test($(this).val())) 
            {
                indicator_field.children('.display-text').text('password strength: average');
                indicator_field.children('.display-text').css('color', ABPasswordStrengthIndicator.color_average_text);

                $('.sm-rect').css('width', ABPasswordStrengthIndicator.indicator_meter_full_width);
                $('.strength-meter').css('margin-right', '10px');

                $('.sm-rect1').css('background-color', ABPasswordStrengthIndicator.color_average);
                $('.sm-rect2').css('background-color', ABPasswordStrengthIndicator.color_average);
                $('.sm-rect3').css('background-color', ABPasswordStrengthIndicator.color_none);
            }
            else
            {
                indicator_field.children('.display-text').text('password strength: weak');
                indicator_field.children('.display-text').css('color', ABPasswordStrengthIndicator.color_weak_text);

                $('.sm-rect').css('width', ABPasswordStrengthIndicator.indicator_meter_full_width);
                $('.strength-meter').css('margin-right', '10px');
                
                $('.sm-rect1').css('background-color', ABPasswordStrengthIndicator.color_weak);
                $('.sm-rect2').css('background-color', ABPasswordStrengthIndicator.color_none);
                $('.sm-rect3').css('background-color', ABPasswordStrengthIndicator.color_none);
            }

            return true;
        });

    };


    window.ABPasswordStrengthIndicator = ABPasswordStrengthIndicator;

}(window));
