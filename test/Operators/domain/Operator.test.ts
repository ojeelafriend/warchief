import { Operator } from '../../../src/Operators/domain/Operator';

describe('Operator creational entity: ', () => {
  const params = {
    bad: {
      credentials: 'badparams',
      identification: '20ks',
      fullName: 'rev',
    },
    ok: {
      credentials: 'okparams#2020',
      identification: '204034ks',
      fullName: 'Bjorn F. Bronnfjell',

      rank: 1,
      operations: 0,
      status: false,
      score: 10,
    },
  };

  test('should not create operator bad params', () => {
    const { credentials, identification: id, fullName } = params.bad;

    expect(() => {
      Operator.create(credentials, id, fullName);
    }).toThrow();
  });

  test('should create operator ok params', () => {
    const { credentials, identification: id, fullName } = params.ok;

    const operator = Operator.create(credentials, id, fullName);

    expect(operator.details()).toStrictEqual(params.ok);
  });
});
