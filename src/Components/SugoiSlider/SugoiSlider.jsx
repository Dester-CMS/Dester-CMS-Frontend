import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, A11y } from "swiper";
import 'swiper/swiper-bundle.min.css';
import Skeleton from 'react-loading-skeleton';
import BackdropPlaceHolder from '../../assets/rectangle-backdrop.svg';
import PosterPlaceHolder from '../../assets/rectangle-poster.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Badge, Container, Figure } from "react-bootstrap";
import './style.css'

const SugoiSlider = ({title, itemData, layout, slug, itemType}) => {

    SwiperCore.use([Autoplay, Navigation, A11y]);

    return (
        <Container fluid>
            <Container fluid className="d-flex justify-content-between align-items-center">
                <h4 className="card-collection-title">{title}</h4>
                <a className="disabled-link" href={ "/search?" + slug }><h6 style={{"color": "white"}}>More<i className="bi bi-caret-right-fill"></i></h6></a>
            </Container>
            { layout === "landscape" && (
                <Swiper
                    className="sslider sslider-landscape p-2 hide-navigation"
                    navigation
                    breakpoints={{
                        "240": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "470": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "740": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        },
                        "1194": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        }
                    }}
                    >
                    { itemData && 
                        (itemData.slice(0, 15).map((singleItem, index) => (
                        <SwiperSlide className="sslider-slide" key={index}>
                                <a href={"/" + itemType + "/" + singleItem.tmdb_id + "?" + itemType + "_title=" + singleItem.tmdb_title}>
                                    <Figure className="show-hover-hidden">
                                        <div className="card-img">
                                            <Figure.Image
                                                className="collection-bg-image rounded"
                                                alt="171x180"
                                                src={"http://image.tmdb.org/t/p/w500" + singleItem.tmdb_backdrop_path}
                                            />
                                        </div>
                                        <Figure.Caption>
                                            <h5><Badge bg="dark">{singleItem.tmdb_release_status}</Badge></h5>
                                            <h6>{singleItem.tmdb_title}</h6>
                                        </Figure.Caption>
                                    </Figure>
                                </a>
                        </SwiperSlide>
                    )))}
                </Swiper>
            )}
            { layout === "portrait" && (
                <Swiper
                    className="sslider sslider-portrait p-2"
                    navigation
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    breakpoints={{
                        "240": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "470": {
                            "slidesPerView": 3,
                            "spaceBetween": 10
                        },
                        "640": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        },
                        "740": {
                            "slidesPerView": 5,
                            "spaceBetween": 20
                        },
                        "1194": {
                            "slidesPerView": 6,
                            "spaceBetween": 20
                        }
                    }}
                    >
                    { itemData && 
                        (itemData.slice(0, 15).map((singleItem, index) => (
                        <SwiperSlide className="sslider-slide" key={index}>
                                <a href={"/" + itemType + "/" + singleItem.tmdb_id + "?" + itemType + "_title=" + singleItem.tmdb_title}>
                                    <Figure className="show-hover-hidden">
                                        <div className="card-img mb-2">
                                            <div className="card-info">
                                                <div className="card-rating">
                                                    <CircularProgressbar
                                                        value={(singleItem.tmdb_vote_average * 10).toFixed(2)}
                                                        text={`${(singleItem.tmdb_vote_average * 10).toFixed(0)}%`}
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
                                            <div className="card-img-image">
                                                <Figure.Image className="img-fluid card-image rounded" src={"http://image.tmdb.org/t/p/w500" + singleItem.tmdb_poster_path}/>
                                            </div>
                                        </div>
                                        <Figure.Caption>
                                            <h5><Badge bg="dark">{singleItem.tmdb_release_status}</Badge></h5>
                                            <h6>{singleItem.tmdb_title}</h6>
                                        </Figure.Caption>
                                    </Figure>
                                </a>
                        </SwiperSlide>
                    )))}
                </Swiper>
            )}
        </Container>
    )
};

const SugoiSliderPlaceHolder = ({ placeholderarray, layout }) => {

    SwiperCore.use([Navigation, A11y]);

    return (
        <Container fluid>
            <Container fluid>
                <h4 className="card-collection-title"><Skeleton width={280} baseColor="#162B45" highlightColor="#232f57"/></h4>
            </Container>
            { layout === "landscape" && (
                <Swiper
                    className="sslider sslider-landscape p-2"
                    navigation
                    breakpoints={{
                        "240": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "470": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "740": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        },
                        "1194": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        }
                    }}
                    >
                    {placeholderarray.map((placeholder) => (
                        <SwiperSlide key={placeholder} className="sslider-slide">
                            <Figure className="show-hover-hidden">
                                <div className="card-img">
                                    <Figure.Image
                                        className="collection-bg-image rounded img-fluid"
                                        alt="PlaceHolder"
                                        src={BackdropPlaceHolder}
                                    />
                                </div>
                                <Figure.Caption>
                                    <Skeleton baseColor="#162B45" highlightColor="#232f57"/>
                                </Figure.Caption>
                            </Figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            { layout === "portrait" && (
                <Swiper
                    className="sslider sslider-portrait p-2"
                    navigation
                    breakpoints={{
                        "240": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "470": {
                            "slidesPerView": 3,
                            "spaceBetween": 10
                        },
                        "640": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        },
                        "740": {
                            "slidesPerView": 5,
                            "spaceBetween": 20
                        },
                        "1194": {
                            "slidesPerView": 6,
                            "spaceBetween": 20
                        }
                    }}
                    >
                    {placeholderarray.map((placeholder) => (
                        <SwiperSlide key={placeholder} className="sslider-slide">
                            <Figure className="show-hover-hidden">
                                <div className="card-img">
                                    <Figure.Image
                                        className="collection-bg-image rounded img-fluid"
                                        alt="PlaceHolder"
                                        src={PosterPlaceHolder}
                                    />
                                </div>
                                <Figure.Caption>
                                    <Skeleton baseColor="#162B45" highlightColor="#232f57"/>
                                </Figure.Caption>
                            </Figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </Container>
    )
};

export { SugoiSlider, SugoiSliderPlaceHolder }
