import { useSearchParams } from 'react-router-dom';
import { Badge, Button, Ratio, Spinner } from 'react-bootstrap';
import { DesterEpisodes } from '../../../Components';
import './style.css';
import { useFetchSingleUrl } from '../../../utilities/useFetchSecureUrl';
import Artplayer from "artplayer/examples/react/Artplayer";
import DesterSkeletonVideoPlayer from '../../../Components/DesterSkeleton/DesterSkeletonVideoPlayer';
import { APP_LOGO_FULL } from '../../../config';


const Controls = ({item_index_no, tmdb_id, episodes}) => {
    return (
        <div className="d-flex justify-content-between pt-3">
            { item_index_no < 2 ? <Button disabled variant="dark">First Episode</Button> : <Button href={"/serie_watch?tmdb_id=" + tmdb_id + "&watch_index_no=" + (+item_index_no - 1)} variant="primary">Previous</Button>}
            { +item_index_no === episodes.length ? <Button disabled variant="dark">Last Episode</Button> : <Button href={"/serie_watch?tmdb_id=" + tmdb_id + "&watch_index_no=" + (+item_index_no + 1)} variant="primary">Next</Button>}
        </div>
    )
}

const DesterSerieWatchPage = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const tmdb_id = searchParams.get("tmdb_id")
    const item_index_no = searchParams.get("watch_index_no");

    const { itemData, itemLoading, itemError } = useFetchSingleUrl(process.env.REACT_APP_SECURE_URL, "serie", tmdb_id);

    if (itemLoading) return <DesterSkeletonVideoPlayer/>

    if (itemError) console.log(itemError);

    let episodes = "";

    if (itemData) episodes = itemData.episodes;

    let sources = "";

    if (episodes) {
    sources = episodes[(+item_index_no - 1)].video_info
        .map((vidInfo)=>({
            key: vidInfo.id,
            html: vidInfo.audio + " [" + vidInfo.quality + "p]",
            url: vidInfo.video_url
        }))
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
                            <div className="video-top">
                                <span className="video-title color-white">&nbsp;<Badge pill bg="primary">S-{episodes[(+item_index_no - 1)].season_number} . E-{episodes[(+item_index_no - 1)].episode_number}</Badge> <Badge pill bg="primary">{episodes[(+item_index_no - 1)].video_info[0].audio}</Badge> <Badge pill bg="primary">{episodes[(+item_index_no - 1)].video_info[0].quality}p</Badge><br/><span className='break'>|</span> {episodes[(+item_index_no - 1)].episode_title}</span>
                            </div>
                            <Ratio aspectRatio="16x9">
                                <Artplayer
                                    option={{
                                        theme: '#14dca0',
                                        url: episodes[(+item_index_no - 1)].video_info[0].video_url,
                                        aspectRatio: true,
                                        setting: true,
                                        hotkey: true,
                                        fullscreen: true,
                                        whitelist: ['*'],
                                        playbackRate: true,
                                        localSubtitle: true,
                                        quality: sources,
                                        icons: {
                                            state: `<img width="150" heigth="150" src=${APP_LOGO_FULL}>`,
                                        },
                                        // subtitle: {
                                        //     url: episodes[(+item_index_no - 1)].video_info[0].subtitles,
                                        //     style: {
                                        //         color: '#ffffff',
                                        //         'font-size': '28px'
                                        //     },
                                        //     encoding: 'utf-8'
                                        // }
                                    }}
                                />
                            </Ratio>
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
