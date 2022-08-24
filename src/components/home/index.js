import React, { useEffect } from "react";
import Layout from "../common";
import HomeSearch from "./section/HomeSearch";
import Restaurants from "./section/Restaurants";
import { useDispatch } from "react-redux";
import { getHomeData } from "../../store/home/homeAction";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  });

  return (
    <Layout>
      <HomeSearch />
      <Restaurants />
    </Layout>
  );
};

export default Home;
