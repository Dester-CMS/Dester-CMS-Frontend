import { Badge, Ratio } from 'react-bootstrap';

const DesterSkeletonVideoPlayer = () => {
    return (
        <div className="container">
            <div className="video-top">
                <span className="video-title color-white">
                    <Badge pill bg="primary">Loading</Badge><br/>
                </span>
            </div>
            <Ratio aspectRatio="16x9">
            <div className="loader-container">
                <div className="loader">
                    <div className="square one"></div>
                    <div className="square two"></div>
                </div>
            </div>
            </Ratio>
        </div>
    )
}

export default DesterSkeletonVideoPlayer;
