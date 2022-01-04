const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

// test the get for role
test('get employee role', () => {
    const manager = new Manager('Jared', 1, 'jared.elliott09@gmail.com');

    // expects manager role to = Manager
    expect(manager.getRole()).toEqual("Manager");
    console.log(Manager);
});