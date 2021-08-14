import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filter-actions';

const filterReducer = createReducer('', {
    [changeFilter]: (_, action) => action.payload
});

export default filterReducer;