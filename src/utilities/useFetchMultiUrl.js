import { useEffect, useState } from "react";
import axios from "axios";

// Fetching everything in Ascending order

const useFetchMovieMultiUrl = (mainUrl, tmdbKey) => {

    const [mainUrlMovieData, setMainUrlData] = useState(null);
    const [tmdbUrlMovieData, setTmdbUrlData] = useState(null);
    const [loadingMultiUrlMovie, setLoadingMultiUrl] = useState(false);
    const [errorMultiUrlMovie, setErrorMultiUrl] = useState(null);

    useEffect(() => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/movies?_sort=createdAt:DESC`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    }, [mainUrl,tmdbKey]);

    const refetch = () => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/movies?_sort=createdAt:DESC`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    };

  return { mainUrlMovieData, tmdbUrlMovieData, loadingMultiUrlMovie, errorMultiUrlMovie, refetch };
};

const useFetchSerieMultiUrl = (mainUrl, tmdbKey) => {

    const [mainUrlSerieData, setMainUrlData] = useState(null);
    const [tmdbUrlSerieData, setTmdbUrlData] = useState(null);
    const [loadingMultiUrlSerie, setLoadingMultiUrl] = useState(false);
    const [errorMultiUrlSerie, setErrorMultiUrl] = useState(null);

    useEffect(() => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/series?_sort=createdAt:DESC`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/tv/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    }, [mainUrl,tmdbKey]);

    const refetch = () => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/movies?_sort=createdAt:DESC`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    };

  return { mainUrlSerieData, tmdbUrlSerieData, loadingMultiUrlSerie, errorMultiUrlSerie, refetch };
};

// Fetching all featured items

const useFetchMovieMultiUrlFeatured = (mainUrl, tmdbKey) => {

    const [mainUrlMovieDataFeatured, setMainUrlData] = useState(null);
    const [tmdbUrlMovieDataFeatured, setTmdbUrlData] = useState(null);
    const [loadingMultiUrlMovieFeatured, setLoadingMultiUrl] = useState(false);
    const [errorMultiUrlMovieFeatured, setErrorMultiUrl] = useState(null);

    useEffect(() => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/movies?featured=true`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    }, [mainUrl,tmdbKey]);

    const refetch = () => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/movies?featured=true`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    };

  return { mainUrlMovieDataFeatured, tmdbUrlMovieDataFeatured, loadingMultiUrlMovieFeatured, errorMultiUrlMovieFeatured, refetch };
};

const useFetchSerieMultiUrlFeatured = (mainUrl, tmdbKey) => {

    const [mainUrlSerieDataFeatured, setMainUrlData] = useState(null);
    const [tmdbUrlSerieDataFeatured, setTmdbUrlData] = useState(null);
    const [loadingMultiUrlSerieFeatured, setLoadingMultiUrl] = useState(false);
    const [errorMultiUrlSerieFeatured, setErrorMultiUrl] = useState(null);

    useEffect(() => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/series?featured=true`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/tv/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    }, [mainUrl,tmdbKey]);

    const refetch = () => {
        setLoadingMultiUrl(true);
        axios
        .get(`${mainUrl}/movies?featured=true`)
        .then(({ data }) => {
            const externalItems = data.map(({ tmdb_id }) => {
                return axios
                .get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${tmdbKey}&append_to_response=images,release_dates`)
                .then(({ data }) => {
                return data;
                });
            });
            setLoadingMultiUrl(true);
            Promise
            .all(externalItems)
            .then(externalItems => {
                setMainUrlData(data)
                setTmdbUrlData(externalItems);
            })
            .catch((err) => {
                setErrorMultiUrl({err});
            })
            .finally(() => {
                setLoadingMultiUrl(false);
            });
        });
    };

  return { mainUrlSerieDataFeatured, tmdbUrlSerieDataFeatured, loadingMultiUrlSerieFeatured, errorMultiUrlSerieFeatured, refetch };
};

// Fetching Individual Items

const useFetchMultiSingle = (mainUrl, tmdbKey, mainUrlPath, tmdbUrlPath, path) => {

    const [mainUrlDataSingle, setMainUrlDataSingle] = useState(null);
    const [tmdbUrlDataSingle, setTmdbUrlDataSingle] = useState(null);
    const [loadingMultiUrlSingle, setLoadingMultiUrlSingle] = useState(false);
    const [errorMultiUrlSingle, setErrorMultiUrlSingle] = useState(null);

    useEffect(() => {
        const apiOnePromise = axios.get(`${mainUrl}/${mainUrlPath}?tmdb_id=${path}`);
        const apiTwoPromise = axios.get(`https://api.themoviedb.org/3/${tmdbUrlPath}/${path}?api_key=${tmdbKey}&append_to_response=images,videos`);
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
    }, [mainUrl, tmdbKey, mainUrlPath, tmdbUrlPath, path]);

    const refetch = () => {
        const apiOnePromise = axios.get(`${mainUrl}/${mainUrlPath}?tmdb_id=${path}`);
        const apiTwoPromise = axios.get(`https://api.themoviedb.org/3/${tmdbUrlPath}/${path}?api_key=${tmdbKey}&append_to_response=images,videos`);
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
    };

  return { mainUrlDataSingle, tmdbUrlDataSingle, loadingMultiUrlSingle, errorMultiUrlSingle, refetch };
};

export { useFetchMovieMultiUrl, useFetchMovieMultiUrlFeatured, useFetchSerieMultiUrl, useFetchSerieMultiUrlFeatured, useFetchMultiSingle }