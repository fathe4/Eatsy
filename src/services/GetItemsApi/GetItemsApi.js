import { useEffect } from "react";

const GetItemsApi = (url, id, setData, setIsLoading) => {
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setData(data.filter((item) => item.restaurantName === id))
      )
      .finally(() => setIsLoading(false));
  }, [url, setIsLoading, setData, id]);
};

export default GetItemsApi;
