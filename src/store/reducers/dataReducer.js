import { category, service } from '../../data/dataset';


const initialState = {
  data: service,
  type: category
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases for any actions you might want to handle
    default:
      return state;
  }
};

export default dataReducer;