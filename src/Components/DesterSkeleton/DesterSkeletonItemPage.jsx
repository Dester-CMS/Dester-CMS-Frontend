import { Breadcrumb, Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { PLACEHOLDER_BACKDROP, PLACEHOLDER_POSTER, SKELETON_BASE_COLOR, SKELETON_HEIGHT_20, SKELETON_SHINE_COLOR, SKELETON_WIDTH_280, SKELETON_WIDTH_70 } from '../../config';

const DesterSkeletonItemPage = () => {
    return (
        <>
            <Container fluid className="g-0">
                <Container fluid className="ps-3 pe-3">
                    <Breadcrumb className="details-breadcrumb">
                        <Breadcrumb.Item><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70}/></Breadcrumb.Item>
                        <Breadcrumb.Item><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70}/></Breadcrumb.Item>
                        <Breadcrumb.Item><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70}/></Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <div className="backdrop-img"><img src={PLACEHOLDER_BACKDROP} alt="place-holder"/></div>
                <div className="item-details-content">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="item-details-content-poster"> 
                            <img className="img-fluid rounded" src={PLACEHOLDER_POSTER} alt="place-holder"/>
                                <div className="item-details-content-poster-info">
                                    <div className="rating-info"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="item__details__text">
                            <Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} height={SKELETON_HEIGHT_20} width={SKELETON_WIDTH_280}/></div>
                            <p style={{"marginTop": "20px", "marginLeft": "20px"}}><Skeleton baseColor={SKELETON_BASE_COLOR} count={3} highlightColor={SKELETON_SHINE_COLOR}/></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
};

export { DesterSkeletonItemPage };
