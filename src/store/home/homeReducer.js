import * as actionTypes from "./homeTypes";

const initialState = {
  data: {
    categories: [ {
      categoryName:'/products/id',
      image:'/img/slider.png',
      item:'sds'
  },
  {
    categoryName:'/listing',
      image:'/img/slider1.png',
      item:'sdsdfsd'
  },
  {
    categoryName:'/listing',
      image:'/img/slider1.png',
      item:'534sds'
  },],
  },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
