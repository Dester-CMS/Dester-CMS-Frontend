import React from 'react';
import { Badge, Button, Carousel } from 'react-bootstrap';
import BackdropPlaceHolder from '../../assets/rectangle-backdrop.svg';
import Skeleton from 'react-loading-skeleton';
import './style.css';
import { SKELETON_BASE_COLOR, SKELETON_SHINE_COLOR, SKELETON_WIDTH_70, TMDB_IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';

const DesterCarousel = ({itemData, itemType}) => {
    return (
        <Carousel fade style={{marginBottom: "25px"}}>
            { itemData && (itemData.slice(0, 3).map((item) => (
            <Carousel.Item key={item.id}>
                <Carousel.Caption style={{"width": "100%"}}>
                <div className="container-home-info col-lg-5 g-0">
                    <div className="home-bg-info-0">
                        <img className="img-fluid home-bg-logo hide" src={item.tmdb_logo_images === undefined ? "" : TMDB_IMAGE_BASE_URL + POSTER_SIZE + item.tmdb_logo_images.file_path} alt=""/>
                        <h4>{item.tmdb_title || item.title}</h4>
                    </div>
                    <div className="home-bg-info-1">
                        <span className="movie-year">{item.tmdb_release_date}</span><span className="break">|</span><span className="movie-age-rating">{item.adult ? "R" : "PG"}</span>
                    </div>
                    <div className="home-bg-info-2 hide">
                        {item.tmdb_genres.map((genre) => (
                            <a href={"/search?type=" + itemType + "&genre=" + genre.id} key={genre.id}>&nbsp;<Badge pill bg="primary" text="light">{genre.name}</Badge></a>
                        ))}
                    </div>
                    <div className="home-bg-info-3">
                        <Button href={`/${itemType}/${item.tmdb_id}?title=${item.tmdb_title || item.tmdb_title}`} variant="light"><i className="bi bi-play-fill"></i><span>Play Now</span></Button>
                        <button type="button" className="btn btn-dark"><i className="bi bi-plus-circle"></i><span>Add to List</span></button>
                    </div>
                </div>
                </Carousel.Caption>

                <div className="container-home-bg justify-content-center col-lg-7 g-0">
                    <img className="img-fluid" src={TMDB_IMAGE_BASE_URL + BACKDROP_SIZE + item.tmdb_backdrop_path} alt=""/>
                </div>
            </Carousel.Item>
            )))}
        </Carousel>
    )
};

const DesterCarouselPlaceHolder = () => {
    return (
        <Carousel fade style={{marginBottom: "25px"}}>
            <Carousel.Item>
                <Carousel.Caption>
                <div className="container-home-info justify-content-center col-lg-5 g-0">
                    <div className="home-bg-info-0">
                        <h4><Skeleton width={180} baseColor="#162B45" highlightColor="#232f57"/></h4>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "center"}} className="home-bg-info-1">
                        <span className="movie-year">
                            <Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} />
                        </span>
                        <span className="break"></span>
                        <span className="movie-age-rating">
                            <Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} />
                        </span>
                        <span className="break"></span>
                        <span>
                            <Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} />
                        </span>
                    </div>
                </div>
                </Carousel.Caption>
                <div className="container-home-bg justify-content-center col-lg-7 g-0">
                    <img className="img-fluid" src={BackdropPlaceHolder} alt="PlaceHolder"/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export { DesterCarousel, DesterCarouselPlaceHolder };