import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ItemDesignOne } from "../../Components";
import ShowMore from '@tedconf/react-show-more';

const MoviesPage = ({ loading, error, movieResult }) => {


    if (loading) return (
        <div className="video-loading">
            <Spinner className="color-white" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="video-loading-title">Loading...</span>
        </div>
    )
    if (error) console.log(error);

    return (
        <main>
            <Container fluid>
                <Container fluid className="mt-2"><h4>All Movies</h4></Container>
                { movieResult && (
                <ShowMore
                    items={movieResult}
                    by={40}
                >
                    {({ current, onMore }) => (
                        <Row className="p-2">
                        {(current && current.map((movie) => (
                            <Col key={movie.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                <ItemDesignOne item={movie} type="movie"/>
                            </Col>
                        )))}
                        <div className="d-flex justify-content-center p-3">
                            <button
                                className="s-btn-1"
                                disabled={!onMore}
                                onClick={() => {
                                if (!!onMore) onMore();
                                }}
                            >
                                Show More
                            </button>
                        </div>
                        </Row>
                    )}
                </ShowMore>
                )}
            </Container>
        </main>
    );
}

export default MoviesPage
