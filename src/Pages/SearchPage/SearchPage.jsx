import React, { useState } from 'react'
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { ItemDesignOne } from '../../Components';
import "./style.css"
// import { useFetchMultiMoviesUrl, useFetchMultiSeriesUrl } from '../../utilities/useFetchSecureUrl';

const SearchPage = ({ movieResult, serieResult, loadingSecureMoviesUrl, loadingSecureSeriesUrl, errorSecureMoviesUrl, errorSecureSeriesUrl }) => {

    const [searchInput, setSearchInput] = useState('');
    const [filteredResultsMovies, setFilteredResultsMovies] = useState([]);
    const [filteredResultsSeries, setFilteredResultsSeries] = useState([]);

    // Fetching Data

    // const { 
    //     dataMainSecureMoviesUrl,
    //     dataTmdbSecureMoviesUrl,
    //     loadingSecureMoviesUrl,
    //     errorSecureMoviesUrl
    // } = useFetchMultiMoviesUrl(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_SECURE_URL);
    
    //  const { 
    //     dataMainSecureSeriesUrl,
    //     dataTmdbSecureSeriesUrl,
    //     loadingSecureSeriesUrl,
    //     errorSecureSeriesUrl
    // } = useFetchMultiSeriesUrl(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_SECURE_URL);

    if (loadingSecureMoviesUrl && loadingSecureSeriesUrl) return <h3 className="color-white p-3">Loading...</h3>

    // Error Handleing
    if (errorSecureMoviesUrl) console.log(errorSecureMoviesUrl);
    if (errorSecureSeriesUrl) console.log(errorSecureSeriesUrl);

    // // Variables to store API fetch results
    // let movieResult = "", serieResult = "";

    // // Combineing main URL data and TMDB data
    // // Example for Movie movie.custom_name_field = tmdbItem ? tmdbItem.pick_a_value_to_combine
    // if(dataMainSecureMoviesUrl && dataTmdbSecureMoviesUrl) {
    //     movieResult = dataMainSecureMoviesUrl.map(movie => {

    //     const tmdbItem = dataTmdbSecureMoviesUrl.find(tmdbMovie => tmdbMovie.id === movie.tmdb_id);
        
    //     movie.tmdb_title = tmdbItem ? tmdbItem.title : null;
    //     movie.tmdb_overview = tmdbItem ? tmdbItem.overview : null;
    //     movie.tmdb_poster_path = tmdbItem ? tmdbItem.poster_path : null;
    //     movie.tmdb_backdrop_path = tmdbItem ? tmdbItem.backdrop_path : null;
    //     movie.tmdb_genres = tmdbItem ? tmdbItem.genres : null;
    //     movie.tmdb_extra_images = tmdbItem ? tmdbItem.images : null;
    //     movie.tmdb_release_date = tmdbItem ? tmdbItem.release_date : null;
    //     movie.tmdb_release_status = tmdbItem ? tmdbItem.status : null;
    //     movie.tmdb_production_companies = tmdbItem ? tmdbItem.production_companies : null;
    //     movie.tmdb_video_runtime = tmdbItem ? tmdbItem.runtime : null;
    //     movie.tmdb_vote_average = tmdbItem ? tmdbItem.vote_average : null;
        
    //     return movie;

    //     });
    // };

    // if(dataMainSecureSeriesUrl && dataTmdbSecureSeriesUrl) {
    //     serieResult = dataMainSecureSeriesUrl.map(serie => {

    //     const tmdbItem = dataTmdbSecureSeriesUrl.find(tmdbSerie => tmdbSerie.id === serie.tmdb_id);
        
    //     serie.tmdb_title = tmdbItem ? tmdbItem.name : null;
    //     serie.tmdb_overview = tmdbItem ? tmdbItem.overview : null;
    //     serie.tmdb_poster_path = tmdbItem ? tmdbItem.poster_path : null;
    //     serie.tmdb_backdrop_path = tmdbItem ? tmdbItem.backdrop_path : null;
    //     serie.tmdb_genres = tmdbItem ? tmdbItem.genres : null;
    //     serie.tmdb_extra_images = tmdbItem ? tmdbItem.images : null;
    //     serie.tmdb_release_date = tmdbItem ? tmdbItem.release_date : null;
    //     serie.tmdb_release_status = tmdbItem ? tmdbItem.status : null;
    //     serie.tmdb_production_companies = tmdbItem ? tmdbItem.production_companies : null;
    //     serie.tmdb_video_runtime = tmdbItem ? tmdbItem.runtime : null;
    //     serie.tmdb_vote_average = tmdbItem ? tmdbItem.vote_average : null;
        
    //     return serie;

    //     });
    // };

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        const movies = movieResult;
        const series = serieResult;
        if (searchInput !== '') {
            const filteredData = movies.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResultsMovies(filteredData)
        } else {
            setFilteredResultsMovies(movies)
        };
        if (searchInput !== '') {
            const filteredData = series.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResultsSeries(filteredData)
        } else {
            setFilteredResultsSeries(series)
        };
    }

    return (
        <main>
            {movieResult && serieResult && (
                <Container fluid>
                    <div className="search-wrapper">
                        <InputGroup className="mb-3 sugoi-search-bar">
                            <InputGroup.Text id="inputGroup-sizing-default"><i className="color-2 gg-search"></i></InputGroup.Text>
                            <FormControl
                                placeholder="Search..."
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => searchItems(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                    <Row className="p-2">
                    <h4>Movies Found</h4>
                        {searchInput.length > 1 ? (
                            filteredResultsMovies.map((item) => {
                                return (
                                    <Col key={item.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                        <ItemDesignOne type="movie" item={item}/>
                                    </Col>
                                )
                            })
                        ) : (
                            movieResult.slice(0, 40).map((item) => {
                                return (
                                    <Col key={item.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                        <ItemDesignOne type="movie" item={item}/>
                                    </Col>
                                )
                            })
                        )}
                    </Row>
                    <Row className="p-2">
                        <h4>Series Found</h4>
                        {searchInput.length > 1 ? (
                            filteredResultsSeries.map((item) => {
                                return (
                                    <Col key={item.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                        <ItemDesignOne type="serie" item={item}/>
                                    </Col>
                                )
                            })
                        ) : (
                            serieResult.slice(0, 40).map((item) => {
                                return (
                                    <Col key={item.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                        <ItemDesignOne type="serie" item={item}/>
                                    </Col>
                                )
                            })
                        )}
                    </Row>
                </Container>
            )}
        </main>
    )
}

export default SearchPage;