import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { fetchUrl } from "../utils/fetch";
import { Species } from "./Species";

const initialUrl = `${process.env.REACT_APP_API_URL}/species/`;

const InfiniteSpecies = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    ["sw-species"],
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  if (isLoading) return <div className="loading">Loading first time...</div>;
  if (isError) return <div>Error! {error.toString()}</div>;

  return (
    <>
      {isFetching && <div className="loading">Refetch data...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => {
          return pageData.results.map(
            ({ name, language, average_lifespan }) => {
              return (
                <Species
                  key={name}
                  name={name}
                  language={language}
                  averageLifespan={average_lifespan}
                />
              );
            }
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export { InfiniteSpecies };
