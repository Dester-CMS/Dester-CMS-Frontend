import { Link, useSearchParams } from 'react-router-dom';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Button, Spinner } from 'react-bootstrap';
import { DesterEpisodes } from '../../../Components';
import './style.css';
import { useFetchMultiSingle } from '../../../utilities/useFetchSecureUrl';


const Controls = ({item_index_no, tmdb_id, episodes}) => {
    return (
        <div className="d-flex justify-content-between pt-3">
            { item_index_no < 2 ? <Button disabled variant="dark">First Episode</Button> : <Link to={"/serie_watch?tmdb_id=" + tmdb_id + "&watch_index_no=" + (+item_index_no - 1)}><Button variant="primary">Previous</Button></Link>}
            { +item_index_no === episodes.length ? <Button disabled variant="dark">Last Episode</Button> : <Link to={"/serie_watch?tmdb_id=" + tmdb_id + "&watch_index_no=" + (+item_index_no + 1)}><Button variant="primary">Next</Button></Link>}
        </div>
    )
}

const DesterSerieWatchPage = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const tmdb_id = searchParams.get("tmdb_id")
    const item_index_no = searchParams.get("watch_index_no");

    const { mainUrlDataSingle, loadingMultiUrlSingle, errorMultiUrlSingle } = useFetchMultiSingle(process.env.REACT_APP_S_API_URL, process.env.REACT_APP_SECURE_URL, "series", "serie", tmdb_id);

    if (loadingMultiUrlSingle) return (
        <div className="episode-video-loading">
            <Spinner className="color-white" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="episode-video-loading-title">Loading...</span>
        </div>
    )

    if (errorMultiUrlSingle) console.log(errorMultiUrlSingle);

    let episodes = "";

    if (mainUrlDataSingle) episodes = mainUrlDataSingle.episodes;

    const options = {
        controls: [
          'play-large',
          'rewind',
          'play',
          'fast-forward',
          'current-time',
          'progress',
          'duration',
          'mute',
          'volume',
          'settings',
          'fullscreen',
        ],
        autoplay: false,
        muted: false,
    }


    return (
        <div className="container">
            { episodes && (
                <div>
                    { (!episodes || +item_index_no < 1 || +item_index_no > episodes.length) && (
                    <div><h2 className="color-white">Video Not Found</h2></div>
                    )}
                    { episodes && +item_index_no > 0 && (+item_index_no === episodes.length || +item_index_no < episodes.length) &&(
                        <div>
                            <div className="episode-video-top">
                                <span className="episode-video-title color-white">&nbsp;Season - {episodes[(+item_index_no - 1)].season_number}, Episode - {episodes[(+item_index_no - 1)].episode_number} <span className='break'>|</span> {episodes[(+item_index_no - 1)].episode_title}</span>
                                <span className="episode-video-description color-white">[ Audio - {episodes[(+item_index_no - 1)].video_info[0].audio}, Quality - {episodes[(+item_index_no - 1)].video_info[0].quality}p ]</span>
                            </div>
                            <Plyr
                                options={options}
                                source={{
                                    type: 'video',
                                    title: `${episodes[(+item_index_no - 1)].episode_title}`,
                                    sources: [
                                        {
                                            src: `${episodes[(+item_index_no - 1)].video_info[0].video_url}`,
                                        }
                                    ]
                                }}
                            />
                            <Controls tmdb_id={tmdb_id} episodes={episodes} item_index_no={item_index_no} />
                        </div>
                    )}
                    <DesterEpisodes tmdb_id={tmdb_id} episodes={episodes}/>
                </div>
            )}
        </div>
    )
}

export default DesterSerieWatchPage;
