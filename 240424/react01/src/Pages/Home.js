import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../Redux/actions/movieAction";
import Banner from "../components/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;
