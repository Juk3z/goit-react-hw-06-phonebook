import types from './filter-types';

export const changeFilter = (value) => ({
    type: types.change,
    payload: value
});