import { useEffect, useState } from "react";
import axios from "axios";

// Fetch Multiple Urls For Movies

const useFetchMultiMoviesUrl = ( mainUrl, secureUrl ) => {
    const [dataMainSecureMoviesUrl, setDataMainSecureMoviesUrl] = useState(null);
    const [dataTmdbSecureMoviesUrl, setDataTmdbSecureMoviesUrl] = useState(null);
    const [dataMainSecureMoviesFeaturedUrl, setDataMainSecureMoviesFeaturedUrl] = useState(null);
    const [dataTmdbSecureMoviesFeaturedUrl, setDataTmdbSecureMoviesFeaturedUrl] = useState(null);
    const [loadingSecureMoviesUrl, setLoadingSecureMoviesUrl] = useState(false);
    const [errorSecureMoviesUrl, setErrorSecureMoviesUrl] = useState(null);

    useEffect(() => {
        const mainMoviesApi = axios.get(`${mainUrl}/movies?_sort=createdAt:DESC`);
        const secureMoviesApi = axios.get(`${secureUrl}/movies`);
        const mainMoviesFeaturedApi = axios.get(`${mainUrl}/movies?featured=true`);
        const secureMoviesFeaturedApi = axios.get(`${secureUrl}/movies_featured`);
        setLoadingSecureMoviesUrl(true);
        Promise
        .all([mainMoviesApi, secureMoviesApi, mainMoviesFeaturedApi, secureMoviesFeaturedApi])
        .then(values => {
            setDataMainSecureMoviesUrl(values[0].data);
            setDataTmdbSecureMoviesUrl(values[1].data);
            setDataMainSecureMoviesFeaturedUrl(values[2].data);
            setDataTmdbSecureMoviesFeaturedUrl(values[3].data);
        })
        .catch((err) => {
            setErrorSecureMoviesUrl(err);
        })
        .finally(() => {
            setLoadingSecureMoviesUrl(false);
        })
    }, [mainUrl,secureUrl]);

    return { 
        dataMainSecureMoviesUrl,
        dataTmdbSecureMoviesUrl,
        dataMainSecureMoviesFeaturedUrl,
        dataTmdbSecureMoviesFeaturedUrl,
        loadingSecureMoviesUrl,
        errorSecureMoviesUrl
    };
}

// Fetch Multiple Urls For Series

const useFetchMultiSeriesUrl = ( mainUrl, secureUrl ) => {
    const [dataMainSecureSeriesUrl, setDataMainSecureSeriesUrl] = useState(null);
    const [dataTmdbSecureSeriesUrl, setDataTmdbSecureSeriesUrl] = useState(null);
    const [dataMainSecureSeriesFeaturedUrl, setDataMainSecureSeriesFeaturedUrl] = useState(null);
    const [dataTmdbSecureSeriesFeaturedUrl, setDataTmdbSecureSeriesFeaturedUrl] = useState(null);
    const [loadingSecureSeriesUrl, setLoadingSecureSeriesUrl] = useState(false);
    const [errorSecureSeriesUrl, setErrorSecureSeriesUrl] = useState(null);

    useEffect(() => {
        const mainSeriesApi = axios.get(`${mainUrl}/series?_sort=createdAt:DESC`);
        const secureSeriesApi = axios.get(`${secureUrl}/series`);
        const mainSeriesFeaturedApi = axios.get(`${mainUrl}/series?featured=true`);
        const secureSeriesFeaturedApi = axios.get(`${secureUrl}/series_featured`);
        setLoadingSecureSeriesUrl(true);
        Promise
        .all([mainSeriesApi, secureSeriesApi, mainSeriesFeaturedApi, secureSeriesFeaturedApi])
        .then(values => {
            setDataMainSecureSeriesUrl(values[0].data);
            setDataTmdbSecureSeriesUrl(values[1].data);
            setDataMainSecureSeriesFeaturedUrl(values[2].data);
            setDataTmdbSecureSeriesFeaturedUrl(values[3].data);
        })
        .catch((err) => {
            setErrorSecureSeriesUrl(err);
        })
        .finally(() => {
            setLoadingSecureSeriesUrl(false);
        })
    }, [mainUrl,secureUrl]);

    return { 
        dataMainSecureSeriesUrl,
        dataTmdbSecureSeriesUrl,
        dataMainSecureSeriesFeaturedUrl,
        dataTmdbSecureSeriesFeaturedUrl,
        loadingSecureSeriesUrl,
        errorSecureSeriesUrl
    };
};

// Fetch Single Item [ Movie or Serie ]

const useFetchMultiSingle = (mainUrl, secureUrl, mainUrlPath, secureUrlPath, path) => {

    const [mainUrlDataSingle, setMainUrlDataSingle] = useState(null);
    const [tmdbUrlDataSingle, setTmdbUrlDataSingle] = useState(null);
    const [loadingMultiUrlSingle, setLoadingMultiUrlSingle] = useState(false);
    const [errorMultiUrlSingle, setErrorMultiUrlSingle] = useState(null);

    useEffect(() => {
        const apiOnePromise = axios.get(`${mainUrl}/${mainUrlPath}?tmdb_id=${path}`);
        const apiTwoPromise = axios.get(`${secureUrl}/${secureUrlPath}/${path}`);
        setLoadingMultiUrlSingle(true);
        Promise.all([apiOnePromise, apiTwoPromise])
        .then(values => {
            const resa1 = values[0].data[0];
            const resa2 = values[1].data;
            setMainUrlDataSingle(resa1);
            setTmdbUrlDataSingle(resa2);
        })
        .catch((err) => {
            setErrorMultiUrlSingle({err});
        })
        .finally(() => {
            setLoadingMultiUrlSingle(false);
        })
    }, [mainUrl, secureUrl, mainUrlPath, secureUrlPath, path]);

  return { mainUrlDataSingle, tmdbUrlDataSingle, loadingMultiUrlSingle, errorMultiUrlSingle };
};

export { useFetchMultiMoviesUrl, useFetchMultiSeriesUrl, useFetchMultiSingle };