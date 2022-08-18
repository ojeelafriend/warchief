import { Credentials } from '../../../src/Operators/domain/Credentials';

describe('Credentials creational entity: ', () => {
  const wrapper = {
    incompleteId: 'operator#23',
    completeId: 'operator#3702',
    exceeded: 'operator#37022222',
  };

  function createCredentials(discordId: string) {
    const credentials = new Credentials(discordId);
    return credentials.value();
  }

  test('should not create entity discordId incomplete', () => {
    expect(() => {
      createCredentials(wrapper.incompleteId);
    }).toThrow();
  });

  test('should not create entity discordId exceeded', () => {
    expect(() => {
      createCredentials(wrapper.exceeded);
    }).toThrow();
  });

  test('should create entity discordId complete', () => {
    expect(createCredentials(wrapper.completeId)).toBe(wrapper.completeId);
  });
});
