import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../common";
import HomeSearch from "./section/HomeSearch";
import Restaurants from "./section/Restaurants";
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
