import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ItemDesignOne } from "../../Components";

const MoviesPage = ({ loading, error, movieResult }) => {

    if (loading) return (
        <div className="episode-video-loading">
            <Spinner className="color-white" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="episode-video-loading-title">Loading...</span>
        </div>
    )
    if (error) console.log(error);
    return (
        <main>
            <Container fluid>
                <Row className="p-2">
                    <h4>All Movies</h4>
                    { movieResult && (movieResult.map((movie) => (
                        <Col key={movie.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                            <ItemDesignOne item={movie} type="movie"/>
                        </Col>
                    )))}
                </Row>
            </Container>
        </main>
    );
}

export default MoviesPage
