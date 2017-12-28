const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Miguel';
        const text = 'Some message';
        const message = generateMessage(from, text);

        expect(message.createdAt).toBeA('string');
        expect(message).toInclude({ from, text });
    })
})