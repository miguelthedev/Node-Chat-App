const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Miguel';
        const text = 'Some message';
        const message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Dev';
        const latitude = 99;
        const longitude = 99;
        var url = 'https://www.google.com/maps?q=99,99';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    })
})