import React, { useEffect, useState } from "react";
import Layout from "../common";
import { useDispatch, useSelector } from "react-redux";
import { getPageData } from "../../store/page/pageAction";

const Pages = (props) => {
  const dispatch = useDispatch();
  const slug = props.match.params.slug;
  /*const [page, setPage] = useState({
    title: "Terms and Conditions",
    body: "This is body",
  });*/
  const page = useSelector((state) => state.page.data);
  useEffect(() => {
    dispatch(getPageData(slug));
  }, [slug]);

  return (
    <Layout>
      <section className="pt-5 pb-5 homepage-search-block position-relative">
        <div className="banner-overlay" />
        <div className="container">
          <h3>{page.title}</h3>
          <p>{page.slug}</p>
          {/*<div className="" dangerouslySetInnerHTML={page.body} />*/}
          <div>{page.body}</div>
        </div>
      </section>
    </Layout>
  );
};

export default Pages;
