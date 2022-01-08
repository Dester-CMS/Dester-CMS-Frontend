import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DesterError, DesterFooter, DesterNavbar } from "./Components";
import { DesterHomePage, DesterMoviePage, DesterMoviesPage, DesterSearchPage, DesterSeriesPage, DesterSeriePage, DesterSerieWatchPage } from "./Pages";
import { useFetchHomeUrl, useFetchMoviesUrl, useFetchSeriesUrl } from "./utilities/useFetchSecureUrl";
import './global.styles.css';
import ScrollToTop from "./utilities/scrollToTop";

const App = () => {

  // Fetching Data

  const { moviesData, moviesFeaturedData, moviesLoading, moviesError } = useFetchMoviesUrl(process.env.REACT_APP_SECURE_URL);
  const { seriesData, seriesFeaturedData, seriesLoading, seriesError } = useFetchSeriesUrl(process.env.REACT_APP_SECURE_URL);
  const { homeData, homeLoading, homeError } = useFetchHomeUrl(process.env.REACT_APP_SECURE_URL);

  let movieResult = "", 
      movieFeaturedResult = "",
      serieResult = "", 
      serieFeaturedResult = "",
      homeResult = "";

  if(moviesData) movieResult = moviesData;
  if(moviesFeaturedData) movieFeaturedResult = moviesFeaturedData;
  if(seriesData) serieResult = seriesData;
  if(seriesFeaturedData) serieFeaturedResult = seriesFeaturedData;

  if(homeData) homeResult = homeData;

  // Error Handleing
  if (moviesError) console.log(moviesError);
  if (seriesError) console.log(seriesError);
  if (homeError) console.log(homeError);

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
                loadingMultiUrlMovie={moviesLoading}
                loadingMultiUrlSerie={seriesLoading}
                loadingMainUrl={homeLoading} 
                errorMultiUrlMovie={moviesError}
                errorMultiUrlSerie={seriesError}
                errorMainUrl={homeError} 
                movieResult={movieResult}
                movieFeaturedResult={movieFeaturedResult}
                serieResult={serieResult}
                serieFeaturedResult={serieFeaturedResult}
              />
            } 
          />
          <Route 
            exact 
            path="/search" 
            element={
              <DesterSearchPage 
                movieResult={movieResult}
                serieResult={serieResult}
                loadingSecureMoviesUrl={moviesLoading}
                loadingSecureSeriesUrl={seriesLoading}
                errorSecureMoviesUrl={moviesError}
                errorSecureSeriesUrl={seriesError}
              />
            } 
          />
          <Route 
            exact 
            path="/movies" 
            element={ 
              <DesterMoviesPage
                loading={moviesLoading}
                error={moviesError}
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
                loading={seriesLoading}
                error={seriesError}
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
