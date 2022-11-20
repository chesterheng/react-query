import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../services/comments";

const useGetComment = (postId) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });
};

// function useGetComments() {}
// function usePutComment() {}
// function usePostComment() {}
// function useDeleteComment() {}

export { useGetComment };
