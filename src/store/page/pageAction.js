// import axios from "axios";
import * as actionTypes from "./pageTypes";
// import { API } from "../../config/index";
import faker from "faker";

export function getPageData(slug) {
  return function (dispatch) {
    let resData = {
      slug: slug,
      title: faker.lorem.sentence(),
      body: "<p>" + faker.lorem.paragraph() + "</p>",
    };
    dispatch({
      type: actionTypes.GET_PAGE_DATA,
      payload: resData,
    });
    /*axios.get(`${API}getPageData/${slug}`).then(
      (response) => {
        const resData = response.data.data;
        dispatch({
          type: actionTypes.GET_PAGE_DATA,
          payload: resData,
        });
      },
      (error) => {
        console.log(error);
      }
    );*/
  };
}
