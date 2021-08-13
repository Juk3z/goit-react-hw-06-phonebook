import types from './filter-types';

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {     
        case types.change:
            return payload;
        
        default: return state;
    }
};

export default filterReducer;