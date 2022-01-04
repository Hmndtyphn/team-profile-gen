const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

// test the get for role
test('get employee role', () => {
    const engineer = new Engineer('Jared', '5', 'jared.elliott09@gmail.com', 'Hmndtyphn');

    // expects manager role to = Manager
    expect(engineer.getRole()).toEqual("Engineer");
    console.log(engineer);
});