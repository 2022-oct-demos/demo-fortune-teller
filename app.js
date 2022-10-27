/* Get DOM Elements */
const submitBtn = document.getElementById('submit');
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');

/* Events */

//  function examples
function doSomething() {
    console.log('doing something');
    return 42;
}

const doSomething2 = () => {
    console.log('doing something (2)');
};

const doSomething3 = function () {
    console.log('doing something (3)');
};
const myName = 'Julia';

const thing = doSomething;
console.log(thing());

submitBtn.addEventListener('click', () => {
    // add the hide class to prompt
    promptSection.classList.toggle('hide');
    // remove the hide class from fortune
    fortuneSection.classList.toggle('hide');
});
