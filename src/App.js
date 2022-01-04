import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DesterError, DesterFooter, DesterNavbar } from "./Components";
import { DesterHomePage, DesterMoviePage, DesterMoviesPage, DesterSearchPage, DesterSeriesPage, DesterSeriePage, DesterSerieWatchPage } from "./Pages";
import { useFetchMainHomeUrl } from "./utilities/useFetchMainUrl";
import { useFetchMultiMoviesUrl, useFetchMultiSeriesUrl } from "./utilities/useFetchSecureUrl";
import './global.styles.css';
import ScrollToTop from "./utilities/scrollToTop";

const App = () => {

  // Fetching Data
  const { dataMainHomeUrl, loadingMainHomeUrl, errorMainHomeUrl } = useFetchMainHomeUrl(process.env.REACT_APP_S_API_URL, "home");

  const { 
    dataMainSecureMoviesUrl,
    dataTmdbSecureMoviesUrl,
    dataMainSecureMoviesFeaturedUrl,
    dataTmdbSecureMoviesFeaturedUrl,
    loadingSecureMoviesUrl,
    errorSecureMoviesUrl
  } = useFetchMultiMoviesUrl(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_SECURE_URL);

  const { 
    dataMainSecureSeriesUrl,
    dataTmdbSecureSeriesUrl,
    dataMainSecureSeriesFeaturedUrl,
    dataTmdbSecureSeriesFeaturedUrl,
    loadingSecureSeriesUrl,
    errorSecureSeriesUrl
  } = useFetchMultiSeriesUrl(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_SECURE_URL);

  // Error Handleing
  if (errorSecureMoviesUrl) console.log(errorSecureMoviesUrl);
  if (errorSecureSeriesUrl) console.log(errorSecureSeriesUrl);
  if (errorMainHomeUrl) console.log(errorMainHomeUrl);

  // Variables to store API fetch results
  let movieResult = "", 
      movieFeaturedResult = "",
      serieResult = "", 
      serieFeaturedResult = "",
      homeResult = "";

  // AllData Ascending Order

  // Combineing main URL data and TMDB data [ Example for Movie movie.custom_name_field = tmdbItem ? tmdbItem.pick_a_value_to_combine ]
  if(dataMainSecureMoviesUrl && dataTmdbSecureMoviesUrl) {
    movieResult = dataMainSecureMoviesUrl.map(movie => {

      const tmdbItem = dataTmdbSecureMoviesUrl.find(tmdbMovie => tmdbMovie.id === movie.tmdb_id);
      
      movie.tmdb_title = tmdbItem ? tmdbItem.title : null;
      movie.tmdb_overview = tmdbItem ? tmdbItem.overview : null;
      movie.tmdb_poster_path = tmdbItem ? tmdbItem.poster_path : null;
      movie.tmdb_backdrop_path = tmdbItem ? tmdbItem.backdrop_path : null;
      movie.tmdb_genres = tmdbItem ? tmdbItem.genres : null;
      movie.tmdb_extra_images = tmdbItem ? tmdbItem.images : null;
      movie.tmdb_release_date = tmdbItem ? tmdbItem.release_date : null;
      movie.tmdb_release_status = tmdbItem ? tmdbItem.status : null;
      movie.tmdb_production_companies = tmdbItem ? tmdbItem.production_companies : null;
      movie.tmdb_video_runtime = tmdbItem ? tmdbItem.runtime : null;
      movie.tmdb_vote_average = tmdbItem ? tmdbItem.vote_average : null;
      
      return movie;

    });
  };

  if(dataMainSecureSeriesUrl && dataTmdbSecureSeriesUrl) {
    serieResult = dataMainSecureSeriesUrl.map(serie => {

      const tmdbItem = dataTmdbSecureSeriesUrl.find(tmdbSerie => tmdbSerie.id === serie.tmdb_id);
      
      serie.tmdb_title = tmdbItem ? tmdbItem.name : null;
      serie.tmdb_overview = tmdbItem ? tmdbItem.overview : null;
      serie.tmdb_poster_path = tmdbItem ? tmdbItem.poster_path : null;
      serie.tmdb_backdrop_path = tmdbItem ? tmdbItem.backdrop_path : null;
      serie.tmdb_genres = tmdbItem ? tmdbItem.genres : null;
      serie.tmdb_extra_images = tmdbItem ? tmdbItem.images : null;
      serie.tmdb_release_date = tmdbItem ? tmdbItem.first_air_date : null;
      serie.tmdb_release_status = tmdbItem ? tmdbItem.status : null;
      serie.tmdb_production_companies = tmdbItem ? tmdbItem.production_companies : null;
      serie.tmdb_video_runtime = tmdbItem ? tmdbItem.episode_run_time : null;
      serie.tmdb_vote_average = tmdbItem ? tmdbItem.vote_average : null;
      
      return serie;

    });
  };

  // Featured Data

  if(dataMainSecureMoviesFeaturedUrl && dataTmdbSecureMoviesFeaturedUrl) {
    movieFeaturedResult = dataMainSecureMoviesFeaturedUrl.map(movie => {

      const tmdbItem = dataTmdbSecureMoviesFeaturedUrl.find(tmdbMovie => tmdbMovie.id === movie.tmdb_id);
      
      movie.tmdb_title = tmdbItem ? tmdbItem.title : null;
      movie.tmdb_overview = tmdbItem ? tmdbItem.overview : null;
      movie.tmdb_poster_path = tmdbItem ? tmdbItem.poster_path : null;
      movie.tmdb_backdrop_path = tmdbItem ? tmdbItem.backdrop_path : null;
      movie.tmdb_genres = tmdbItem ? tmdbItem.genres : null;
      movie.tmdb_extra_images = tmdbItem ? tmdbItem.images : null;
      movie.tmdb_release_date = tmdbItem ? tmdbItem.release_date : null;
      movie.tmdb_release_status = tmdbItem ? tmdbItem.status : null;
      movie.tmdb_production_companies = tmdbItem ? tmdbItem.production_companies : null;
      movie.tmdb_video_runtime = tmdbItem ? tmdbItem.runtime : null;
      movie.tmdb_vote_average = tmdbItem ? tmdbItem.vote_average : null;
      
      return movie;

    });
  };

  if(dataMainSecureSeriesFeaturedUrl && dataTmdbSecureSeriesFeaturedUrl) {
    serieFeaturedResult = dataMainSecureSeriesFeaturedUrl.map(serie => {

      const tmdbItem = dataTmdbSecureSeriesFeaturedUrl.find(tmdbSerie => tmdbSerie.id === serie.tmdb_id);
      
      serie.tmdb_title = tmdbItem ? tmdbItem.name : null;
      serie.tmdb_overview = tmdbItem ? tmdbItem.overview : null;
      serie.tmdb_poster_path = tmdbItem ? tmdbItem.poster_path : null;
      serie.tmdb_backdrop_path = tmdbItem ? tmdbItem.backdrop_path : null;
      serie.tmdb_genres = tmdbItem ? tmdbItem.genres : null;
      serie.tmdb_extra_images = tmdbItem ? tmdbItem.images : null;
      serie.tmdb_release_date = tmdbItem ? tmdbItem.first_air_date : null;
      serie.tmdb_release_status = tmdbItem ? tmdbItem.status : null;
      serie.tmdb_production_companies = tmdbItem ? tmdbItem.production_companies : null;
      serie.tmdb_video_runtime = tmdbItem ? tmdbItem.episode_run_time : null;
      serie.tmdb_vote_average = tmdbItem ? tmdbItem.vote_average : null;
      
      return serie;

    });
  };


  // Fetching home component data like site title, description, components display state etc
  if(dataMainHomeUrl) homeResult = dataMainHomeUrl;

  return (
    <Router>
      <ScrollToTop/>
      <div className="dester-app">
        <DesterNavbar/>
        <Routes>
          <Route 
            exact 
            path="/" 
            element={ 
              <DesterHomePage 
                // Loading Props
                loadingMultiUrlMovie={loadingSecureMoviesUrl}
                loadingMultiUrlSerie={loadingSecureSeriesUrl}
                loadingMainUrl={loadingMainHomeUrl} 
                // Error Props
                errorMultiUrlMovie={errorSecureMoviesUrl}
                errorMultiUrlSerie={errorSecureMoviesUrl}
                errorMainUrl={errorMainHomeUrl} 
                // Actual Data Props
                movieResult={movieResult}
                movieFeaturedResult={movieFeaturedResult}
                serieResult={serieResult}
                serieFeaturedResult={serieFeaturedResult}
              />
            } 
          />
          <Route exact path="/search" element={<DesterSearchPage />} />
          <Route 
            exact 
            path="/movies" 
            element={ 
              <DesterMoviesPage
                // Loading Props
                loading={loadingSecureMoviesUrl}
                // Error Props
                error={errorSecureMoviesUrl}
                // Actual Data Props
                movieResult={movieResult}
              />
            } 
          />
          <Route exact path="/movie/:movie_id" element={<DesterMoviePage />} />
          <Route 
            exact 
            path="/series" 
            element={ 
              <DesterSeriesPage
                // Loading Props
                loading={loadingSecureMoviesUrl}
                // Error Props
                error={errorSecureMoviesUrl}
                // Actual Data Props
                serieResult={serieResult}
              />
            } 
          />
          <Route exact path="/serie/:serie_id" element={<DesterSeriePage />} />
          <Route exact path="/serie_watch" element={<DesterSerieWatchPage />} />
          <Route path='*' element={<DesterError errorCode="404" message="Check The Path You Are Trying To Access"/>} />
        </Routes>
        <DesterFooter homeResult={homeResult}/>
      </div>
    </Router>
  );
}

export default App;
