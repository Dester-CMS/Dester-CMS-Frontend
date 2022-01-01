import { SugoiCarousel, SugoiSkeletonHome, SugoiSlider, SugoiStarter } from "../../Components";
import SugoiError from "../../Components/SugoiError/SugoiError";

const SugoiHomePage = ({ movieResult, movieFeaturedResult, serieResult, serieFeaturedResult, loadingMultiUrlMovie, loadingMultiUrlSerie, loadingMainUrl, errorMultiUrlMovie, errorMultiUrlSerie, errorMainUrl }) => {

    if (loadingMultiUrlMovie && loadingMultiUrlSerie && loadingMainUrl) return <SugoiSkeletonHome/>

    movieFeaturedResult.length === 0 && serieFeaturedResult.length === 0 ? <SugoiError errorCode="500" message={"Something Horribly Went Wrong [ Frontend Can't Retrive Data from Backend ]"}/> : <></>

    if (errorMultiUrlMovie) {
        console.log(errorMultiUrlMovie)
    }

    if (errorMultiUrlSerie) {
        console.log(errorMultiUrlSerie)
    }
    if (errorMainUrl) {
        console.log(errorMainUrl)
    }

    return (
        <main className="sugoi-home-page">
            { movieResult.length > 0 ? <SugoiCarousel itemType="movie" itemData={movieResult}/> : <></> }
            { movieResult.length > 0 ? <SugoiSlider itemType="movie" layout="portrait" slug="newly_released_movies" itemData={movieResult} title="Newly Released Movies"/> : <></> }
            { movieFeaturedResult.length > 0 ? <SugoiSlider itemType="movie" layout="landscape" slug="featured_movies" itemData={movieFeaturedResult} title="Top 15 Featured Movies"/> : <></> }
            { serieResult.length > 0 ? <SugoiCarousel itemType="serie" itemData={serieResult}/> : <></> }
            { serieResult.length > 0 ? <SugoiSlider itemType="serie" layout="portrait" slug="newly_released_series" itemData={serieResult} title="Newly Released Series"/> : <></> }
            { serieFeaturedResult.length > 0 ? <SugoiSlider itemType="serie" layout="landscape" slug="featured_series" itemData={serieFeaturedResult} title="Top 15 Featured Series"/> : <></> }
            { loadingMultiUrlMovie && loadingMultiUrlSerie && loadingMainUrl && movieResult.length === 0 && movieFeaturedResult.length === 0 && serieResult.length === 0 && serieFeaturedResult.length === 0 ? <SugoiStarter /> : <></>}
        </main>
    )
};

export default SugoiHomePage;
