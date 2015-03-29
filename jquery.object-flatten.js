/*
 * Flatten Nested Array and Object to 2D, jQuery Plugin
 *
 * Copyright(c) 2015, Rizky Hajar
 * http://riskihajar.com
 *
 * Licensed under the MIT License
 */
(function( $ ) {
	"use strict";

    $.objectFlatten = function(object, prefix, root)
	{
		root = root || {};
        prefix = prefix || '';
        $.each(object, function(key, value){
            if( 'object' === typeof(value) && value )
            {
                root = $.objectFlatten(value, prefix + key + '.', root);
            }else{
                key = prefix + key;
                root[key] = value;
            }
        });

        return root;
    }
 
})( jQuery );