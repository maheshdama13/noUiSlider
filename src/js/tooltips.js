
	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			var index = indexToHandleNumber(handleNumber);

			if ( !tips[index] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			console.log(values, handleNumber, unencoded);

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[index].innerHTML = formattedValue;
		});
	}
