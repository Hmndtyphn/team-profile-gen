const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

// test the get for role
test('get employee role', () => {
    const intern = new Intern('Jared', '10', 'jared.elliott09@gmail.com', 'Wash U');

    // expects intern role to = Intern
    expect(intern.getRole()).toEqual("Intern");
    console.log(intern);
});