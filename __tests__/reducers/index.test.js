import rootReducer from '../../src/reducers';
import { initialState } from '../../src/reducers/productReducer';

describe('rootReducer', () => {
  it('initialises the default state', () => {
    expect(rootReducer({}, {}).ProductReducer).toEqual(initialState);
  });
});
