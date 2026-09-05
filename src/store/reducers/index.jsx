import { combineReducers } from 'redux';

import homeSlice from 'store/slices/home/slice';

export const rootReducer = combineReducers({
  home: homeSlice,
});
