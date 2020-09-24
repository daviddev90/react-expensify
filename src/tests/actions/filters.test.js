import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate setTextFilter action with provided text', () => {
  const action = setTextFilter('tripbon');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'tripbon'
  });
});
test('should generate setTextFilter action with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
test('should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate setStartDate action Object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});