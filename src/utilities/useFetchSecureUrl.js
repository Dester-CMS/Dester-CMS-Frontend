import { useEffect, useState } from "react";
import axios from "axios";

const useFetchHomeUrl = ( secureUrl ) => {
    const [homeData, setHomeData] = useState(null);
    const [homeLoading, setHomeLoading] = useState(false);
    const [homeError, setHomeError] = useState(null);
  
    useEffect(() => {
        setHomeLoading(true);
        axios
            .get(`${secureUrl}/home`)
            .then((response) => {
                setHomeData(response.data);
            })
            .catch((err) => {
                setHomeError(err);
            })
            .finally(() => {
                setHomeLoading(false);
            });
    }, [secureUrl]);
  
    return { homeData, homeLoading, homeError };
  }

const useFetchMoviesUrl = ( secureUrl ) => {
    const [moviesData, setMoviesData] = useState(null);
    const [moviesFeaturedData, setMoviesFeaturedData] = useState(null);
    const [moviesLoading, setMoviesLoading] = useState(false);
    const [moviesError, setMoviesError] = useState(null);

    useEffect(() => {
        const secureMoviesApi = axios.get(`${secureUrl}/movies`);
        const secureMoviesFeaturedApi = axios.get(`${secureUrl}/movies_featured`);
        setMoviesLoading(true);
        Promise
        .all([secureMoviesApi, secureMoviesFeaturedApi])
        .then(values => {
            setMoviesData(values[0].data);
            setMoviesFeaturedData(values[1].data);
        })
        .catch((err) => {
            setMoviesError(err);
        })
        .finally(() => {
            setMoviesLoading(false);
        })
    }, [secureUrl]);

    return { 
        moviesData,
        moviesFeaturedData,
        moviesLoading,
        moviesError
    };
};

const useFetchSeriesUrl = ( secureUrl ) => {
    const [seriesData, setSeriesData] = useState(null);
    const [seriesFeaturedData, setSeriesFeaturedData] = useState(null);
    const [seriesLoading, setSeriesLoading] = useState(false);
    const [seriesError, setSeriesError] = useState(null);

    useEffect(() => {
        const secureSeriesApi = axios.get(`${secureUrl}/series`);
        const secureSeriesFeaturedApi = axios.get(`${secureUrl}/series_featured`);
        setSeriesLoading(true);
        Promise
        .all([secureSeriesApi, secureSeriesFeaturedApi])
        .then(values => {
            setSeriesData(values[0].data);
            setSeriesFeaturedData(values[1].data);
        })
        .catch((err) => {
            setSeriesError(err);
        })
        .finally(() => {
            setSeriesLoading(false);
        })
    }, [secureUrl]);

    return { 
        seriesData,
        seriesFeaturedData,
        seriesLoading,
        seriesError
    };
}


const useFetchSingleUrl = (secureUrl, secureUrlPath, path) => {

    const [itemData, setItemData] = useState(null);
    const [itemLoading, setItemLoading] = useState(false);
    const [itemError, setItemError] = useState(null);

    useEffect(() => {
        setItemLoading(true)
        axios.get(`${secureUrl}/${secureUrlPath}/${path}`)
        .then(response => {
            setItemData(response.data);
        })
        .catch((err) => {
            setItemError({err});
        })
        .finally(() => {
            setItemLoading(false);
        })
    }, [secureUrl, secureUrlPath, path]);

  return { itemData, itemLoading, itemError };
};

export { useFetchHomeUrl, useFetchMoviesUrl, useFetchSeriesUrl, useFetchSingleUrl };