var singletonMrMeeseeks = require('meeseek');

const Box = (function () {

    var name = "Rick's box";
    var mrMeeseks = null;

    const getMrMeeseks = () => mrMeeseks;
    const getName = () => name;
    const setMrMeeseks = meeseks => mrMeeseks = meeseks;
    const setName = aName => name = aName;

    const createMrMeeseeks = () => {
        if (!mrMeeseks) {
            setMrMeeseks(singletonMrMeeseeks.get());
        }
    }

    const pressButton = (reality) => {
        const mrMee = createMrMeeseeks();
        mrMee.speakOnCreate();
        reality.push(mrMee);
    }

    return function(theName, theMeesek) {

        name = theName || name;
        mrMeeseks = theMeesek || mrMeeseks;

        return {
            getMrMeeseks,
            getName, 
            setMrMeeseks,
            setName,
            createMrMeeseeks,
            pressButton,
        }
    }
})();

var factory = (function singletonBox() {
    
    const prototipo = new Box();
    
    return {
        getInstance: () => prototipo
    }
}());

// node.js modules
module.exports = factory;