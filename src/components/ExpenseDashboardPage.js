import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilterrs';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;