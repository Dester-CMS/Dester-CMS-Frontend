import { useEffect, useState } from "react";
import axios from "axios";

function useFetchMainUrl(mainUrl, path) {
  const [dataMainUrl, setDataMainUrl] = useState(null);
  const [loadingMainUrl, setLoadingMainUrl] = useState(false);
  const [errorMainUrl, setErrorMainUrl] = useState(null);

  useEffect(() => {
    setLoadingMainUrl(true);
    axios
      .get(`${mainUrl}/${path}`)
      .then((response) => {
        setDataMainUrl(response.data);
      })
      .catch((err) => {
        setErrorMainUrl({err});
      })
      .finally(() => {
        setLoadingMainUrl(false);
      });
  }, [mainUrl,path]);

  const refetch = () => {
    setLoadingMainUrl(true);
    axios
      .get(`${mainUrl}/${path}`)
      .then((response) => {
        setDataMainUrl(response.data);
      })
      .catch((err) => {
        setErrorMainUrl({err});
      })
      .finally(() => {
        setLoadingMainUrl(false);
      });
  };

  return { dataMainUrl, loadingMainUrl, errorMainUrl, refetch };
}

export default useFetchMainUrl;