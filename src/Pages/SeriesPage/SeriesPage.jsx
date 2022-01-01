import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ItemDesignOne } from "../../Components";

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
                <Row className="p-2">
                    <h4>All Series</h4>
                    { serieResult && (serieResult.map((serie) => (
                        <Col key={serie.id} className="p-lg-4 p-sm-3" xs={6} sm={4} md={3} lg={3} xl={2}>
                            <ItemDesignOne item={serie} type="serie"/>
                        </Col>
                    )))}
                </Row>
            </Container>
        </main>
    );
}

export default SeriesPage;
