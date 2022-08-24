import axios from "axios";
import * as actionTypes from "./homeTypes";
import { API } from "../../config/index";
// import faker from "faker";

export function getHomeData() {
  return function (dispatch) {
    /*let resData = [];
    for (let i = 0; i < 12; i++) {
      let name = faker.lorem.word();
      resData[i] = {
        _id: faker.datatype.uuid(),
        categoryName: name,
        categorySlug: name.toLowerCase(),
        categoryImage:
          "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245__340.jpg",
        items: faker.datatype.number(),
        status: true,
      };
    }
    dispatch({
      type: actionTypes.GET_HOME_DATA,
      payload: { categories: resData },
    });*/
    axios.get(`${API}all-category?page=1`).then(
      (response) => {
        const resData = response.data.data;
        dispatch({
          type: actionTypes.GET_HOME_DATA,
          payload: { categories: resData },
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
