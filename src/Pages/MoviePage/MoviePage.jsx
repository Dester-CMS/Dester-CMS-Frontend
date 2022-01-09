import { Alert, Badge, Breadcrumb, Button, Container, Modal, Ratio, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { APP_LOGO_FULL, BACKDROP_SIZE, POSTER_SIZE, TMDB_IMAGE_BASE_URL } from '../../config';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ReactStars from "react-rating-stars-component";
import 'react-circular-progressbar/dist/styles.css';
import PosterPlaceholder from '../../assets/rectangle-poster.svg';
import { useState } from 'react';
import { DesterSkeletonItemPage } from '../../Components';
import './style.css';
import DesterError from '../../Components/DesterError/DesterError';
import { useFetchSingleUrl } from '../../utilities/useFetchSecureUrl';
import DesterPersons from '../../Components/DesterPersons/DesterPersons';
import Artplayer from "artplayer/examples/react/Artplayer";

const DesterMoviePage = () => {

    // Pop Modal

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showResults, setShowResults] = useState(false);
    const showVideoPlayer = () => setShowResults(true);

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const { itemData, itemLoading, itemError } = useFetchSingleUrl(process.env.REACT_APP_SECURE_URL, "movie", path);

    if (itemLoading) return <DesterSkeletonItemPage/>;

    if ( !itemData ) return (<DesterError errorCode="404" message="Can't Find Movie"/>);

    if (itemError) console.log(itemError);

    let sources = itemData.video_info
    .map((vidInfo)=>({
        html: vidInfo.audio + " [" + vidInfo.quality + "p]",
        url: vidInfo.video_url
    }))

    return (
        <div>
            { itemData && (
                <Container fluid className="g-0">
                    <Container fluid className="ps-3 pe-3">
                        <Breadcrumb className="details-breadcrumb">
                            <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item as={Link} to="/movies">Movies</Breadcrumb.Item>
                            <Breadcrumb.Item active>{itemData.title} {itemData.audio}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Container>
                    {itemData.video_info.length > 0 ? "" : <Alert variant="danger" className="m-3">No Sources Found!<br/><span>Contact <a className="alert-link-standout" href="https://t.me/+P8oPYF5_ph1jYTM1">Admin</a></span></Alert>}
                    <div className="backdrop-img"><img src={TMDB_IMAGE_BASE_URL + BACKDROP_SIZE +  itemData.backdrop_path} onError={(e)=>{e.target.onerror = null; e.target.src=PosterPlaceholder}} alt={itemData.title + "[backdrop]"}/></div>
                    <div className="item-details-content">
                        <div className="row">
                                <div className="col-lg-3">
                                    <div className="item-details-content-poster"> 
                                    <img className="img-fluid rounded" src={TMDB_IMAGE_BASE_URL + POSTER_SIZE + "/" +  itemData.poster} onError={(e)=>{e.target.onerror = null; e.target.src=TMDB_IMAGE_BASE_URL + BACKDROP_SIZE +  itemData.poster_path}} alt={itemData.title + "[poster]"} />
                                    <div className="item-details-content-poster-info">
                                        <div className="rating-info">
                                            <CircularProgressbar
                                                value={itemData.vote_average * 10}
                                                text={`${itemData.vote_average * 10}%`}
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
                                            {itemData.video_info.length > 0 ? <Button className="s-btn-1" variant="primary" href="#video-container" onClick={showVideoPlayer}>Watch</Button> : <Button className="s-btn-1" variant="danger" disabled>Unavailable</Button>}
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
                                            <img className="item-page-logo" src={itemData.images.logos[0] === undefined ? "" : TMDB_IMAGE_BASE_URL + POSTER_SIZE + itemData.images.logos[0].file_path} alt="" />
                                            <h3>{itemData.title}</h3> <span>Original Title: {itemData.original_title}</span> </div>
                                        <div className="item__details__rating"></div>
                                            <div className="rating">
                                                <ReactStars 
                                                    count={5} 
                                                    value={itemData.vote_average / 10 * 5} 
                                                    size={24} 
                                                    edit={false} 
                                                    isHalf={true}
                                                    activeColor="#ffd700"
                                                />
                                                <span style={{color: 'white'}}>Number of Votes : {itemData.vote_count}</span></div>
                                        <p>{itemData.overview}</p>
                                        <div className="item__details__widget">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul>
                                                        <li><span>Type:</span> Movie</li>
                                                        <li><span>Studios:</span> 
                                                            {itemData.production_companies.map((studio) => (
                                                                <span key={studio.id}>&nbsp;<Badge pill bg="dark" text="light"><i className="bi bi-circle-half"></i>&nbsp;{studio.name}</Badge>&nbsp;</span>
                                                            ))
                                                            }
                                                        </li>
                                                        <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                                        <li><span>Status:</span> Airing</li>
                                                        <li><span>Genre:</span>
                                                            {itemData.genres.map((genre) => (
                                                                <a key={genre.id} href={"/search?type=movie&genre=" + genre.id}>&nbsp;<Badge pill bg="primary" text="light">{genre.name}</Badge></a>
                                                            ))}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul>
                                                        <li><span>Available Languages & Quality:&nbsp;</span>
                                                        {itemData.video_info.length > 0 ? itemData.video_info.map((video_single_info) => (
                                                            <div key={video_single_info.id}><Badge pill bg="primary" text="light">{video_single_info.audio} - {video_single_info.quality}p</Badge>&nbsp;</div>
                                                        )) : <Badge key="1" pill bg="danger" text="light">No Sources Found</Badge>}
                                                        </li>
                                                        <li><span>Rating:</span> {itemData.adult ? <Badge pill bg="danger" text="light">R</Badge> : <Badge pill bg="info" text="dark">PG</Badge>}</li>
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
                    {itemData.credits && (<Row className="m-1"><DesterPersons persons={itemData.credits.cast}/></Row>)}
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header className="trailer-modal-header" closeButton>
                            <Modal.Title>Trailer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="trailer-modal-body">
                        <Ratio aspectRatio="16x9">
                            <iframe className="rounded" width="100%" src={"https://www.youtube.com/embed/" + itemData.videos.results[0].key } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Ratio>
                        </Modal.Body>
                    </Modal>
                    { showResults ?
                    <div id="video-container" className="video-container container">
                        <div className="video-top">
                            <span className="video-title color-white">&nbsp;<span className='break'>|</span> {itemData.title}</span>
                        </div>
                        <Ratio aspectRatio="16x9">
                            <Artplayer
                                option={{
                                    theme: '#14dca0',
                                    url: itemData.video_info[0].video_url,
                                    aspectRatio: true,
                                    setting: true,
                                    hotkey: true,
                                    fullscreen: true,
                                    whitelist: ['*'],
                                    playbackRate: true,
                                    localSubtitle: true,
                                    quality: sources,
                                    // subtitle: {
                                    //     url: itemData.video_info[0].subtitles,
                                    //     style: {
                                    //         color: '#ffffff',
                                    //         'font-size': '28px'
                                    //     },
                                    //     encoding: 'utf-8'
                                    // },
                                    icons: {
                                        state: `<img width="150" heigth="150" src=${APP_LOGO_FULL}>`,
                                    },
                                }}
                            />
                        </Ratio>
                    </div>
                    : <></> }
                </Container>
            )}
        </div>
    )
}

export default DesterMoviePage;
