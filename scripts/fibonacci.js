(function () {
	'use strict';
			
	// Fibonacci closure
	var Fibonacci = function () {
		var value = 0, prev = 0, next = 1;
		
		// default element id to render the sequence
		var _elementId = 'serie';

		function operate(id) {
			_elementId = id;
			if (value === 0) {
				print(prev);
				print(next);
				value += next;
				prev = value;
				print(value);
			} else {
				value = prev + next;
				print(value);
				next = prev;
				prev = value;
			}
			while (value <= 1000) {
				operate(id);
			}
		};

		function print(value) {
			var serie = document.getElementById(_elementId);
			serie.innerText += ((value > 0) ? ' | ' : '') + value;
		};

		return { start: operate }
	};

	// Page load	
	var serie = Fibonacci();
	serie.start('serie');	
})();