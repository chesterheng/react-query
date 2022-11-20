import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { fetchUrl } from "../utils/fetch";
import { Person } from "./Person";

const initialUrl = `${process.env.REACT_APP_API_URL}/people/`;

const InfinitePeople = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    ["sw-people"],
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: ((lastPage) => lastPage.next) || undefined,
    }
  );

  if (isLoading) return <div className="loading">Loading first time...</div>;
  if (isError) return <div>Error! {error.toString()}</div>;

  return (
    <>
      {isFetching && <div className="loading">Refetch data...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => {
          return pageData.results.map(({ name, hair_color, eye_color }) => {
            return (
              <Person
                key={name}
                name={name}
                hairColor={hair_color}
                eyeColor={eye_color}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
};

export { InfinitePeople };
