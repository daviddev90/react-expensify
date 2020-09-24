import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123idid', { key1: 'hello', key2: 'there' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123idid',
    updates: { key1: 'hello', key2: 'there' },
  });
});
test('should setup add expense action object with provided value', () => {
  const expenseData = {
    description: 'Rent',
    notes: 'Test value',
    amount: 150,
    createdAt: 11250,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
test('should setup add expense action object with defaults', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      notes: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
