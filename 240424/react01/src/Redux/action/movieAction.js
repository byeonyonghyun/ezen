import api from "../api"



const getMovies = () => {
  return async(dispatch) => {
    const popularMovieApi =  api.get(
      `/movie/popular?api_key=f46fe0b24fd16fa1858e985bb7bc6d42&language=en-US&page=1`
    );
    const topRatedMovieApi =  api.get(
      `/movie/top_rated?api_key=f46fe0b24fd16fa1858e985bb7bc6d42&language=en-US&page=1`
    );
    const upComingMovieApi =  api.get(
      `/movie/upcoming?api_key=f46fe0b24fd16fa1858e985bb7bc6d42&language=en-US&page=1`
    );
  };

  const [    
    popularMovieApi,
    topRatedMovieApi,
    upComingMovieApi,] = 
    
    await Promise.all([
    popularMovieApi,
    topRatedMovieApi,
    upComingMovieApi,
  ]);
  dispatch({
    type: "GET_MOVIES_SUCCESS",
    payload: {
      popularMovies: popularMovies.data,
      topRatedMovies: topRatedMovies.data,
      upComingMovies: upComingMovies.data,
    },
  })
};

export const movieAction = { getMovies };