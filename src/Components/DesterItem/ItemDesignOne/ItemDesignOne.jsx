import React from 'react'
import { Figure } from 'react-bootstrap';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PLACEHOLDER_POSTER, POSTER_SIZE, TMDB_IMAGE_BASE_URL } from '../../../config';

const ItemDesignOne = ({ item, type }) => {
    return (
        <a href={`/${type}/${item.tmdb_id}?title=${item.tmdb_title}`}>
            <Figure>
                <div className="card-img mb-2">
                    <div className="card-info">
                        <div className="card-rating">
                                <CircularProgressbar
                                    value={(item.tmdb_vote_average * 10).toFixed(2)}
                                    text={`${(item.tmdb_vote_average * 10).toFixed(0)}%`}
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
                        <Figure.Image className="img-fluid card-image rounded" src={TMDB_IMAGE_BASE_URL + POSTER_SIZE + item.tmdb_poster_path} onError={(e)=>{e.target.onerror = null; e.target.src=PLACEHOLDER_POSTER}}/>
                        <div className="middle">
                            <span className="round-button">
                                <i className="bi bi-play-fill"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <Figure.Caption> 
                    <span>{item.tmdb_title}</span>
                </Figure.Caption>
            </Figure>
        </a>
    )
}

export default ItemDesignOne
