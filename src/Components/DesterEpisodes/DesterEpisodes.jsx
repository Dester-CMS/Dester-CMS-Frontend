import { Badge, Col, Container, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PLACEHOLDER_BACKDROP } from "../../config";
import "./style.css"

const DesterEpisodes = ({ episodes, tmdb_id }) => {
    return (
        <main>
            <Container fluid>
                <Row className="m-2 pt-2">
                    <h2 className="color-white">Episodes</h2>
                    { episodes && (episodes.map((episode, index) => (
                        <Col key={episode.id} className="p-lg-4 p-sm-3" xs={12} sm={6} md={4} lg={3} xl={3}>
                            <a href={`/serie_watch?tmdb_id=${tmdb_id}&watch_index_no=${index + 1}`}>
                                <Figure>
                                    <div className="card-img mb-2">
                                        <div className="card-info-episode">
                                            <Badge pill bg="dark">S-{episode.season_number} . E-{episode.episode_number}</Badge>
                                        </div>
                                        <div className="card-img-image">
                                            <Figure.Image className="img-fluid card-image rounded" src={episode.thumbnail} onError={(e)=>{e.target.onerror = null; e.target.src=PLACEHOLDER_BACKDROP}}/>
                                            <div className="middle">
                                                <span className="round-button">
                                                    <i className="bi bi-play-fill"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Figure.Caption> 
                                        <span>{episode.episode_title}</span>
                                    </Figure.Caption>
                                </Figure>
                            </a>
                        </Col>
                    )))}
                    { (!episodes || episodes.length === 0) && (<h5 className="color-white">No Episodes Found</h5>) }
                </Row>
            </Container>
        </main>
    )
}

export { DesterEpisodes };
