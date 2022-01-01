import { useFetchMovieMultiUrl, useFetchMovieMultiUrlFeatured, useFetchSerieMultiUrl, useFetchSerieMultiUrlFeatured } from "./utilities/useFetchMultiUrl";
import useFetchMainUrl from "./utilities/useFetchMainUrl";
import { SugoiFooter, SugoiNavbar } from "./Components";
import './global.styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SugoiHomePage, SugoiMoviePage, SugoiMoviesPage, SugoiSearchPage, SugoiSeriesPage, SugoiSeriePage, SugoiSerieWatchPage } from "./Pages";
import SugoiError from "./Components/SugoiError/SugoiError";

const App = () => {

  // Fetching Data
  const { mainUrlMovieData, tmdbUrlMovieData, loadingMultiUrlMovie, errorMultiUrlMovie } = useFetchMovieMultiUrl(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_TMDB_API_KEY);
  const { mainUrlSerieData, tmdbUrlSerieData, loadingMultiUrlSerie, errorMultiUrlSerie } = useFetchSerieMultiUrl(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_TMDB_API_KEY);
  const { mainUrlMovieDataFeatured, tmdbUrlMovieDataFeatured, loadingMultiUrlMovieFeatured, errorMultiUrlMovieFeatured } = useFetchMovieMultiUrlFeatured(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_TMDB_API_KEY);
  const { mainUrlSerieDataFeatured, tmdbUrlSerieDataFeatured, loadingMultiUrlSerieFeatured, errorMultiUrlSerieFeatured } = useFetchSerieMultiUrlFeatured(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_TMDB_API_KEY);
  const { dataMainUrl, loadingMainUrl, errorMainUrl } = useFetchMainUrl(process.env.REACT_APP_S_API_URL, "home");

  // Error Handleing
  if (errorMultiUrlMovie) console.log(errorMultiUrlMovie);
  if (errorMultiUrlMovieFeatured) console.log(errorMultiUrlMovieFeatured);
  if (errorMultiUrlSerie) console.log(errorMultiUrlSerie);
  if (errorMultiUrlSerieFeatured) console.log(errorMultiUrlSerieFeatured);
  if (errorMainUrl) console.log(errorMainUrl);

  // Variables to store API fetch results
  let movieResult = "", 
      movieFeaturedResult = "",
      serieResult = "", 
      serieFeaturedResult = "",
      homeResult = "";

  // AllData Ascending Order

  // Combineing main URL data and TMDB data [ Example for Movie movie.custom_name_field = tmdbItem ? tmdbItem.pick_a_value_to_combine ]
  if(mainUrlMovieData && tmdbUrlMovieData) {
    movieResult = mainUrlMovieData.map(movie => {

      const tmdbItem = tmdbUrlMovieData.find(tmdbMovie => tmdbMovie.id === movie.tmdb_id);
      
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

  if(mainUrlSerieData && tmdbUrlSerieData) {
    serieResult = mainUrlSerieData.map(serie => {

      const tmdbItem = tmdbUrlSerieData.find(tmdbSerie => tmdbSerie.id === serie.tmdb_id);
      
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

  if(mainUrlMovieDataFeatured && tmdbUrlMovieDataFeatured) {
    movieFeaturedResult = mainUrlMovieDataFeatured.map(movie => {

      const tmdbItem = tmdbUrlMovieDataFeatured.find(tmdbMovie => tmdbMovie.id === movie.tmdb_id);
      
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

  if(mainUrlSerieDataFeatured && tmdbUrlSerieDataFeatured) {
    serieFeaturedResult = mainUrlSerieDataFeatured.map(serie => {

      const tmdbItem = tmdbUrlSerieDataFeatured.find(tmdbSerie => tmdbSerie.id === serie.tmdb_id);
      
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
  if(dataMainUrl) homeResult = dataMainUrl;

  return (
    <Router>
      <div className="sugoi-sama-app">
        <SugoiNavbar/>
        <Routes>
          <Route 
            exact 
            path="/" 
            element={ 
              <SugoiHomePage 
                // Loading Props
                loadingMultiUrlMovie={loadingMultiUrlMovie}
                loadingMultiUrlSerie={loadingMultiUrlSerie}
                loadingMultiUrlMovieFeatured={loadingMultiUrlMovieFeatured} 
                loadingMultiUrlSerieFeatured={loadingMultiUrlSerieFeatured} 
                loadingMainUrl={loadingMainUrl} 
                // Error Props
                errorMultiUrlMovie={errorMultiUrlMovie}
                errorMultiUrlSerie={errorMultiUrlSerie}
                errorMainUrl={errorMainUrl} 
                // Actual Data Props
                movieResult={movieResult}
                movieFeaturedResult={movieFeaturedResult}
                serieResult={serieResult}
                serieFeaturedResult={serieFeaturedResult}
              />
            } 
          />
          <Route exact path="/search" element={<SugoiSearchPage />} />
          <Route 
            exact 
            path="/movies" 
            element={ 
              <SugoiMoviesPage
                // Loading Props
                loading={loadingMultiUrlMovie}
                // Error Props
                error={errorMultiUrlMovie}
                // Actual Data Props
                movieResult={movieResult}
              />
            } 
          />
          <Route exact path="/movie/:movie_id" element={<SugoiMoviePage />} />
          <Route 
            exact 
            path="/series" 
            element={ 
              <SugoiSeriesPage
                // Loading Props
                loading={loadingMultiUrlMovie}
                // Error Props
                error={errorMultiUrlMovie}
                // Actual Data Props
                serieResult={serieResult}
              />
            } 
          />
          <Route exact path="/serie/:serie_id" element={<SugoiSeriePage />} />
          <Route exact path="/serie_watch" element={<SugoiSerieWatchPage />} />
          <Route path='*' element={<SugoiError errorCode="404" message="Check The Path You Are Trying To Access"/>} />
        </Routes>
        <SugoiFooter homeResult={homeResult}/>
      </div>
    </Router>
  );
}

export default App;

