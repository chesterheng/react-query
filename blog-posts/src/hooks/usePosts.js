import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  fetchPosts,
  maxPostPage,
  deletePost,
  updatePost,
} from "../services/posts";

const useGetPosts = (currentPage) => {
  const query = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
    keepPreviousData: true, // keep previous page data
  });

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);
  return query;
};

const useDeletePost = () =>
  useMutation({
    mutationFn: (postId) => deletePost(postId),
  });

const usePutPost = () =>
  useMutation({
    mutationFn: (postId) => updatePost(postId),
  });

// function useGetPost(postId) {}
// function usePostPost() {}

export { useGetPosts, useDeletePost, usePutPost };
