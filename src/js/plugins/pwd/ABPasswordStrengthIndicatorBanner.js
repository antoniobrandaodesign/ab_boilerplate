var $ = require("../../libs/jquery/jquery.js");

var                     indicators_amount = 0;

var color_none          = '#eee';
var color_weak          = '#B22D00';
var color_average       = '#FFBF00';
var color_strong        = '#00B400';
var color_weak_text     = '#B22D00';
var color_average_text  = '#FF8000';
var color_strong_text   = '#00B400';

indicator_meter_full_width = 0;

module.exports = {

    init: function(field)
    {
        if (!field)
        {
            alert("AB Password Strength Indicator says: A password input DOM element needs to be provided in the init parameter");

            return;
        };

        indicators_amount += 1;

        $(field).parent().find('.badge-holder').append
        (
            // '<div class="password-strength-indicator" id="password-strength-indicator-' + indicators_amount + '">' +
                '<span class="info-badge password-info-badge">REQUIRED</span>'// +
            // '</div>'
        );

        // indicator_meter_full_width = $('.sm-rect').width();

        // $('.sm-rect').css('width', '0');

        // var indicator_field = $('#password-strength-indicator-' + indicators_amount);

        // $('.password-info-badge').css('opacity', '0');

        // $(field).css('position', 'relative');
        // indicator_field.css('top', $(field).height() - 3);

        // $(field).focus(function(e) 
        // {
        //     indicator_field.css('opacity', '1');
        // });

        // $(field).blur(function(e) 
        // {
        //     indicator_field.css('opacity', '0'); 
        // });

        $(field).keyup(function(e) 
        {
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            var enoughRegex = new RegExp("(?=.{6,}).*", "g");

            // console.log($('#password-strength-indicator-' + indicators_amount + ' > p'));

            if (false == enoughRegex.test($(this).val()))
            {
                $('.password-info-badge').text('TOO SHORT');
                $('.password-info-badge').removeClass('validated');
                // $('.password-info-badge').css('opacity', '1');
                // $('.password-info-badge').css('color', color_weak_text);
            } 
            else if (strongRegex.test($(this).val())) 
            {
                $('.password-info-badge').text('STRONG');
                $('.password-info-badge').addClass('validated');
                // $('.password-info-badge').css('opacity', '1');
                // $('.password-info-badge').css('color', color_strong_text);
            }
            else if (mediumRegex.test($(this).val())) 
            {
                $('.password-info-badge').text('GOOD');
                $('.password-info-badge').addClass('validated');
                // $('.password-info-badge').css('opacity', '1');
                // $('.password-info-badge').css('color', color_average_text);
            }
            else
            {
                $('.password-info-badge').text('AVERAGE');
                $('.password-info-badge').addClass('validated');
                // $('.password-info-badge').css('opacity', '1');
                // $('.password-info-badge').css('color', color_weak_text);
            }

            if ($(this).val() === '')
            {
                $('.password-info-badge').text('REQUIRED');
            }; 

            return true;
        });
    }
}