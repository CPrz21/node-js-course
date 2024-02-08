import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.test.ts', () => {
  it(`should contain the text`, () => {
    expect(emailTemplate).toContain('Hi, ');
  });
});
