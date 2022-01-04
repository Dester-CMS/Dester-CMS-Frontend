import { DesterCarousel, DesterSkeletonHome, DesterSlider } from "../../Components";

const DesterHomePage = ({ movieResult, movieFeaturedResult, serieResult, serieFeaturedResult, loadingMultiUrlMovie, loadingMultiUrlSerie, loadingMainUrl }) => {

    if (loadingMultiUrlMovie && loadingMultiUrlSerie && loadingMainUrl) return <DesterSkeletonHome/>

    return (
        <main className="sugoi-home-page">
            { movieResult.length > 0 ? <DesterCarousel itemType="movie" itemData={movieResult}/> : <></> }
            { movieResult.length > 0 ? <DesterSlider itemType="movie" layout="portrait" slug="newly_released_movies" itemData={movieResult} title="Newly Released Movies"/> : <></> }
            { movieFeaturedResult.length > 0 ? <DesterSlider itemType="movie" layout="landscape" slug="featured_movies" itemData={movieFeaturedResult} title="Top 15 Featured Movies"/> : <></> }
            { serieResult.length > 0 ? <DesterCarousel itemType="serie" itemData={serieResult}/> : <></> }
            { serieResult.length > 0 ? <DesterSlider itemType="serie" layout="portrait" slug="newly_released_series" itemData={serieResult} title="Newly Released Series"/> : <></> }
            { serieFeaturedResult.length > 0 ? <DesterSlider itemType="serie" layout="landscape" slug="featured_series" itemData={serieFeaturedResult} title="Top 15 Featured Series"/> : <></> }
        </main>
    )
};

export default DesterHomePage;
