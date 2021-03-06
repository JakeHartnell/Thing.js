const Thing = require('../../dist/Thing.js');

module.exports = new Thing({
	properties: {
		name: "Adder"
	},

	initialize: function () {
		console.log('Adder initialized');
	},

    add: function (listOfValues) {
    	var value = 0;
    	for (var i = listOfValues.length - 1; i >= 0; i--) {
    		value += listOfValues[i]
    	}
        return value;
    }
});
