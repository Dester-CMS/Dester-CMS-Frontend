import 'swiper/swiper-bundle.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { DesterSliderPlaceHolder } from '..';
import { DesterCarouselPlaceHolder } from '..';

const DesterSkeletonHome = () => {
    const placeholderarray = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div style={{"pointerEvents": "none"}}>
            <DesterCarouselPlaceHolder/>
            <DesterSliderPlaceHolder layout="portrait" placeholderarray={placeholderarray}/>
            <DesterSliderPlaceHolder layout="landscape" placeholderarray={placeholderarray}/>
            <DesterSliderPlaceHolder layout="portrait" placeholderarray={placeholderarray}/>
            <DesterSliderPlaceHolder layout="landscape" placeholderarray={placeholderarray}/>
        </div>
    )
}

export { DesterSkeletonHome };
