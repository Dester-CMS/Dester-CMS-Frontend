import { Alert, Badge, Breadcrumb, Button, Container, Modal, Ratio, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BACKDROP_SIZE, POSTER_SIZE, TMDB_IMAGE_BASE_URL } from '../../config';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ReactStars from "react-rating-stars-component";
import 'react-circular-progressbar/dist/styles.css';
import PosterPlaceholder from '../../assets/rectangle-poster.svg';
import { useState } from 'react';
import { DesterSkeletonItemPage } from '../../Components';
import { DesterEpisodes } from '../../Components';
import DesterError from '../../Components/DesterError/DesterError';
import { useFetchMultiSingle } from '../../utilities/useFetchSecureUrl';
import DesterPersons from '../../Components/DesterPersons/DesterPersons';

const DesterSeriePage = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const { mainUrlDataSingle, tmdbUrlDataSingle, loadingMultiUrlSingle, errorMultiUrlSingle } = useFetchMultiSingle(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_SECURE_URL, "series", "serie", path);

    if (loadingMultiUrlSingle) return <DesterSkeletonItemPage/>

    if ( !mainUrlDataSingle ) return (<DesterError errorCode="404" message="Can't Find Serie"/>);

    if (errorMultiUrlSingle) console.log(errorMultiUrlSingle);

    return (
        <div>
            { mainUrlDataSingle && tmdbUrlDataSingle && (
                <Container fluid className="g-0">
                    <Container fluid className="ps-3 pe-3">
                        <Breadcrumb className="details-breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/series">Series</Breadcrumb.Item>
                            <Breadcrumb.Item active>{tmdbUrlDataSingle.name} {mainUrlDataSingle.audio}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Container>
                    {mainUrlDataSingle.episodes.length > 0 ? "" : <Alert variant="danger" className="m-3">No Sources Found!<br/><span>Contact <a className="alert-link-standout" href="https://t.me/+P8oPYF5_ph1jYTM1">Admin</a></span></Alert>}
                    <div className="backdrop-img"><img src={TMDB_IMAGE_BASE_URL + BACKDROP_SIZE +  tmdbUrlDataSingle.backdrop_path} onError={(e)=>{e.target.onerror = null; e.target.src=PosterPlaceholder}} alt={tmdbUrlDataSingle.title + "[backdrop]"}/></div>
                    <div className="item-details-content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="item-details-content-poster"> 
                                <img className="img-fluid rounded" src={TMDB_IMAGE_BASE_URL + POSTER_SIZE + "/" +  mainUrlDataSingle.poster} onError={(e)=>{e.target.onerror = null; e.target.src=TMDB_IMAGE_BASE_URL + BACKDROP_SIZE +  tmdbUrlDataSingle.poster_path}} alt={mainUrlDataSingle.title + "[poster]"} />
                                <div className="item-details-content-poster-info">
                                    <div className="rating-info">
                                        <CircularProgressbar
                                            value={tmdbUrlDataSingle.vote_average * 10}
                                            text={`${tmdbUrlDataSingle.vote_average * 10}%`}
                                            background={true}
                                            backgroundPadding={5}
                                            maxValue={100}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                strokeLinecap: 'butt',
                                                textSize: '25px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgb(20, 220, 160)`,
                                                textColor: '#ffffff',
                                                trailColor: '#165764',
                                                backgroundColor: '#0a2b31',
                                            })}
                                        />
                                    </div>
                                </div>
                                    <div className="item-details-btn"> 
                                        {mainUrlDataSingle.episodes.length > 0 ? <Button className="s-btn-1" variant="primary" href={"/serie_watch?tmdb_id="+ path + "&watch_index_no=1"}>Watch</Button> : <Button className="s-btn-1" variant="danger" disabled>Unavailable</Button>}
                                        <div className="item-details-btn-bottom">
                                            <Button className="s-btn-2" onClick={handleShow} variant="primary"><i className="bi bi-youtube"></i></Button>
                                            <Button className="s-btn-2" variant="primary"><i className="bi bi-bookmark-plus"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="item__details__text">
                                    <div className="item__details__title">
                                        <h3>{tmdbUrlDataSingle.title}</h3> <span>Original Title: {tmdbUrlDataSingle.original_title}</span> </div>
                                    <div className="item__details__rating"></div>
                                        <div className="rating">
                                            <ReactStars 
                                                count={5} 
                                                value={tmdbUrlDataSingle.vote_average / 10 * 5} 
                                                size={24} 
                                                edit={false} 
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                            <span style={{color: 'white'}}>Number of Votes {tmdbUrlDataSingle.vote_count}</span></div>
                                    <p>{tmdbUrlDataSingle.overview}</p>
                                    <div className="item__details__widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Type:</span> Movie</li>
                                                    <li><span>Studios:</span> 
                                                        {tmdbUrlDataSingle.production_companies.map((studio) => (
                                                            <span key={studio.id}>&nbsp;<Badge pill bg="dark" text="light"><i className="bi bi-circle-half"></i>&nbsp;{studio.name}</Badge>&nbsp;</span>
                                                        ))
                                                        }
                                                    </li>
                                                    <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                                    <li><span>Status:</span> Airing</li>
                                                    <li><span>Genre:</span>
                                                        {tmdbUrlDataSingle.genres.map((genre) => (
                                                            <a key={genre.id} href={"/search?type=movie&genre=" + genre.id}>&nbsp;<Badge pill bg="primary" text="light">{genre.name}</Badge></a>
                                                        ))}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Available Languages & Quality:&nbsp;</span>
                                                    {mainUrlDataSingle.episodes && mainUrlDataSingle.episodes.length > 0 ? mainUrlDataSingle.episodes.slice(0, 1).map((video_single_info) => (
                                                        <div key={video_single_info.id}><Badge pill bg="primary" text="light">{video_single_info.video_info[0].audio} - {video_single_info.video_info[0].quality}p</Badge>&nbsp;</div>
                                                    )) : <Badge key="1" pill bg="danger" text="light">No Sources Found</Badge>}
                                                    </li>
                                                    <li><span>Rating:</span> {mainUrlDataSingle.adult ? <Badge pill bg="danger" text="light">R</Badge> : <Badge pill bg="info" text="dark">PG</Badge>}</li>
                                                    <li><span>Duration:</span> 24 min/ep</li>
                                                    <li><span>Quality:</span> HD</li>
                                                    <li><span>Views:</span> 131,541</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {tmdbUrlDataSingle.credits && (<Row className="m-1"><DesterPersons persons={tmdbUrlDataSingle.credits.cast}/></Row>)}
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header className="trailer-modal-header" closeButton>
                            <Modal.Title>Trailer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="trailer-modal-body">
                        <Ratio aspectRatio="16x9">
                            { tmdbUrlDataSingle.videos.results.length > 0 ? (
                                <iframe className="rounded" width="100%" src={"https://www.youtube.com/embed/" + tmdbUrlDataSingle.videos.results[0].key } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            ) : (
                                <h1 style={{'color': 'white'}}>Sorry Trailer Not Found</h1>
                            )}
                        </Ratio>
                        </Modal.Body>
                    </Modal>
                    <DesterEpisodes tmdb_id={path} episodes={mainUrlDataSingle.episodes}/>
                </Container>
            )}
        </div>
    )
}

export default DesterSeriePage;