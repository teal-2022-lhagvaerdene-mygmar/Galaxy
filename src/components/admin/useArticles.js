import { useEffect, useState } from "react";
import axios from "axios";

export function useArticles(page, size, query, categoryId) {
  const [list, setList] = useState([]);
  const [count, setCount] = useState();

  function loadArticles() {
    axios
      .get(
        `http://localhost:4321/articles?q=${query}&page=${page}&size=${size}&categoryId=${categoryId}`,
      )
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { list, count } = data;
          setList(list);
          setCount(count);
        } else {
          alert(`Aldaa garlaa: ${status}`);
        }
      });
  }

  useEffect(() => {
    loadArticles(page, "");
  }, [page, query, categoryId]);
  return {
    list,
    count,
  };
}
