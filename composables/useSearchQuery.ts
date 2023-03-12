import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export const useSearchQuery = (query: string) => {
  return useQuery(["books", "search", query], {
    queryFn: () => {
      axios({
        method: "get",
        baseURL: "https://openlibrary.org",
        url: "/search.json",
        params: {
          q: query,
        },
      });
    },
  });
};
