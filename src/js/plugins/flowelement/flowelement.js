/*
* FlowElement.JS v1.0
* Copyright 2013-2014, Antonio Brandao http://antoniobrandao.com/
*
* FlowElement.JS by Antonio Brandao (http://antoniobrandao.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*/

(function($) {
   $.fn.flowelement = function(options) {

      // Establish default settings/variables
      // ====================================
      var settings = $.extend(
      {
         property    : 'width',     // target element's property to 'flow'
         max_value   : 40,          // max value property can have
         min_value   : 20,          // min value property can have
         max_range   : 1280,        // max reference value to consider
         min_range   : 300,         // max reference value to consider
         value_type  : 'px',        // type of value to apply. Can be 'straight', 'percentual', or 'px'
         src_el      : window,      // reference element to get state from
         src_prop    : 'width',     // reference element's property to use as reference
         debug       : false,       // whether to print console logs

      }, options),

      // Do the magic math
      // =================
      changes = function(el) 
      {
         // get target element and window size
         var $el                  = $(el);
         var _src_value           = $(settings.src_el)[settings.src_prop]();

         if (settings.debug) 
         {
            console.log('------------------------------');
            console.log('min_value: ' + settings.min_value);
            console.log('max_value: ' + settings.max_value);
            console.log('-');
            console.log('min_range: ' + settings.min_range);
            console.log('max_range: ' + settings.max_range);
            console.log('-');
            console.log('_src_value (original): ' + _src_value);
         }

         // reset working value to valid range
         if (_src_value > settings.max_range) { _src_value = settings.max_range };
         if (_src_value < settings.min_range) { _src_value = settings.min_range };

         // ranges
         var _val_range          = settings.max_value - settings.min_value;
         var _src_range          = settings.max_range - settings.min_range;
         
         // position within value range
         var _position_capped    = _src_value - settings.min_range;

         // position's percent value in the range
         var _position_p         = (_position_capped * 100) / _src_range;

         // get equivalent position in destination range
         var _equivalent_val     = (_position_p * _val_range) / 100;

         var _result             = settings.min_value + _equivalent_val;

         if (settings.debug)
         {
            console.log('_src_value (limited): ' + _src_value);
            console.log('_val_range: '           + _val_range);
            console.log('_src_range: '           + _src_range);
            console.log('_position_capped: '     + _position_capped);
            console.log('_position_p: '          + _position_p);
            console.log('_equivalent_val: '      + _equivalent_val);
            console.log('_result: '              + _result);
         };

         _result                 = String(_result);

         switch(settings.value_type)
         {
            case 'percentual':
               _result = _result + '%';
            break;

            case 'px':
               _result = _result + 'px';
            break;
         }

         // apply calculated value !
         $el.css(settings.property, _result);
      };



      // Make the magic visible
      // ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Make changes upon orientation change
         window.addEventListener('orientationchange', changes(that));
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));