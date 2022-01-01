import 'swiper/swiper-bundle.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { SugoiSliderPlaceHolder } from '../';
import { SugoiCarouselPlaceHolder } from '../';

const SugoiSkeletonHome = () => {
    const placeholderarray = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div style={{"pointerEvents": "none"}}>
            <SugoiCarouselPlaceHolder/>
            <SugoiSliderPlaceHolder layout="portrait" placeholderarray={placeholderarray}/>
            <SugoiSliderPlaceHolder layout="landscape" placeholderarray={placeholderarray}/>
            <SugoiSliderPlaceHolder layout="portrait" placeholderarray={placeholderarray}/>
            <SugoiSliderPlaceHolder layout="landscape" placeholderarray={placeholderarray}/>
        </div>
    )
}

export { SugoiSkeletonHome };
