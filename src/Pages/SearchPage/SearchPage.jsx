import React, { useState } from 'react'
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { ItemDesignOne } from '../../Components';
import "./style.css"

const SearchPage = ({ movieResult, serieResult, loadingSecureMoviesUrl, loadingSecureSeriesUrl, errorSecureMoviesUrl, errorSecureSeriesUrl }) => {

    const [searchInput, setSearchInput] = useState('');
    const [filteredResultsMovies, setFilteredResultsMovies] = useState([]);
    const [filteredResultsSeries, setFilteredResultsSeries] = useState([]);
    const [genreFilter, setGenreFilter] = useState([])

    if (loadingSecureMoviesUrl && loadingSecureSeriesUrl) return <h3 className="color-white p-3">Loading...</h3>

    // Error Handleing
    if (errorSecureMoviesUrl) console.log(errorSecureMoviesUrl);
    if (errorSecureSeriesUrl) console.log(errorSecureSeriesUrl);

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
                        <div>
                            <Button>All</Button>{' '}
                            <Button tmdb_genre_id="Action" onClick={() => searchItemsByGenre('Action')}>Action</Button>{' '}
                            <Button tmdb_genre_id="Animation" onClick={() => searchItemsByGenre('Animation')}>Animation</Button>{' '}
                            <Button tmdb_genre_id="Drama" onClick={() => searchItemsByGenre('Drama')}>Drama</Button>
                        </div>
                    </div>
                    <Row className="p-2">
                    <h4>Movies Found</h4>
                        {genreFilter.map((item) => {
                            return (
                                <Col key={item.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                    <ItemDesignOne type="movie" item={item}/>
                                </Col>
                            )
                        })}
                    </Row>
                    {/* <Row className="p-2">
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
                    </Row> */}
                </Container>
            )}
        </main>
    )
}

export default SearchPage;