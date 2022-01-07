import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ItemDesignOne } from "../../Components";
import ShowMore from '@tedconf/react-show-more';

const SeriesPage = ({ loading, error, serieResult }) => {

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
                <Container fluid className="mt-2"><h4>All Series</h4></Container>
                { serieResult && (
                <ShowMore
                    items={serieResult}
                    by={40}
                >
                    {({ current, onMore }) => (
                        <Row className="p-2">
                        {(current && current.map((serie) => (
                            <Col key={serie.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                                <ItemDesignOne item={serie} type="serie"/>
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

export default SeriesPage;
