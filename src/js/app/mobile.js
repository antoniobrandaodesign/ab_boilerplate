var $ = require("jquery");

module.exports = {

	getDevice: function()
	{
		if ( $('html').hasClass('desktop') )
	    {
	        return 'desktop';
	    }
	    else if( $('html').hasClass('tablet') )
	    {
	        return 'tablet';
	    }
	    else if( $('html').hasClass('mobile') )
	    {
	        return 'mobile';
	    }
	},

	setupMobile: function()
	{
		window.addEventListener('orientationchange', handleOrientationChange);

		$('.mobile-nav .background .menu-icon').click( handleMobileMenuClickOpen );
        $('.mobile-nav .background .menu-icon-x').click( handleMobileMenuClickClose );

        $(document)
	    .on('focus', 'input', function(e) {
	        $('.mobile-nav').addClass('touching-inputs');
	    })
	    .on('blur', 'input', function(e) {
	        $('.mobile-nav').removeClass('touching-inputs');
	    });
	},

	adjustLayout: function()
	{
	    // nothing to add at the moment
	}
}

var handleOrientationChange = function()
{
    handleMobileMenuClickClose();

    switch(window.orientation) 
    {  
        case -90:
        case 90:

            App.orientation = 'landscape';
            // adjustLayout();
            
        break; 

        default:
            
            App.orientation = 'portrait';
            // adjustLayout();

        break; 
    }
}

var handleMobileMenuClickOpen = function()
{    
    $('.mobile-nav .drawer').scrollTop( 0 );

    $('.mobile-nav').addClass('open');
    $('.mobile-nav .drawer').css('height', $(window).height() - $('.mobile-nav .background').height());
}

var handleMobileMenuClickClose = function()
{
	$('.main-content-container').removeClass('menu-open');

    $('.mobile-nav').removeClass('open');
    $('.mobile-nav .drawer').css('height', 0);
}