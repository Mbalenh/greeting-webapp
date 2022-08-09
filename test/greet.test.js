const assert = require('assert');

const Greeting = require('../greet');


describe("The Greeting Function", function(){
    it ('should return a greeting in the selected language with the name', function() {
        let greeting = Greeting([]);
        
        assert.equal(greeting.greet('Mbali', 'english'), 'Hello, Mbali')
    })
    it ('should return a greeting in the selected language with the name', function() {
        let greeting = Greeting([]);
        assert.equal(greeting.greet('Khanya', 'isizulu'), 'Sawubona, Khanya')
    })
    it ('should return a greeting in the selected language with the name', function() {
        let greeting = Greeting([]);
        assert.equal(greeting.greet('Khanya','isixhosa'), 'Molo, Khanya')
    })
    it ('should return an error if language is not selected', function() {
        let greeting = Greeting([]);
        assert.equal(greeting.greet('Mbali', null ), 'please select language')

    })
    it ('should return an error message,if the name is not entered', function() {
        let greeting = Greeting([]);
        assert.equal(greeting.greet('','english'), 'please enter username')
    })
    it ('should return an error message,if the name is not entered and language is not selected', function() {
        let greeting = Greeting([]);
        assert.equal(greeting.greet('',''), 'please enter username')
    })
    it ('should return an error message "invalid usernamee",if the name contain number', function() {
        let greeting = Greeting([]);
        assert.equal(greeting.greet('khanya44',''), 'invalid username')
    })
})