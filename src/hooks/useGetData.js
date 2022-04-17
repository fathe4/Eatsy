import { useEffect } from "react";

const useGetData = (url, setData, setIsLoading, slice) => {
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setData(
          data
            .sort((a, b) => b.additional.rating - a.additional.rating)
            .slice(0, slice)
        )
      )
      .finally(() => setIsLoading(false));
  }, [url, setIsLoading, setData, slice]);
};

export default useGetData;
