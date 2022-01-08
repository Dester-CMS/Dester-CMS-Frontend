import { useEffect, useState } from "react";
import axios from "axios";

function useFetchMainHomeUrl(mainUrl) {
  const [dataMainHomeUrl, setDataMainUrl] = useState(null);
  const [loadingMainHomeUrl, setLoadingMainUrl] = useState(false);
  const [errorMainHomeUrl, setErrorMainUrl] = useState(null);

  useEffect(() => {
      setLoadingMainUrl(true);
      axios
        .get(`${mainUrl}/home`)
        .then((response) => {
            setDataMainUrl(response.data);
        })
        .catch((err) => {
            setErrorMainUrl(err);
        })
        .finally(() => {
            setLoadingMainUrl(false);
        });
  }, [mainUrl]);

  return { dataMainHomeUrl, loadingMainHomeUrl, errorMainHomeUrl };
}

export { useFetchMainHomeUrl };