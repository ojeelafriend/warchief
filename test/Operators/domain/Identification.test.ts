import { Identification } from '../../../src/Operators/domain/Identification';

describe('Identification creational entity: ', () => {
  const wrapper = {
    shortId: '203ks',
    longId: '203532ksr',
    standard: '203532ks',
  };

  function createIdentification(id: string) {
    const identification = new Identification(id);
    return identification.value();
  }

  test('should not create entity short digits', () => {
    expect(() => {
      createIdentification(wrapper.shortId);
    }).toThrow();
  });

  test('should not create entity long digits', () => {
    expect(() => {
      createIdentification(wrapper.longId);
    }).toThrow();
  });

  test('should create entity standard digits', () => {
    expect(createIdentification(wrapper.standard)).toBe(wrapper.standard);
  });
});
