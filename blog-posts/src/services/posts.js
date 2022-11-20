const maxPostPage = 10;
const rootUrl = process.env.REACT_APP_API_URL;

const fetchPosts = async (pageNum) => {
  const response = await fetch(`${rootUrl}/posts?_limit=10&_page=${pageNum}`);
  return response.json();
};

const deletePost = async (postId) => {
  const response = await fetch(`${rootUrl}/postId/${postId}`, {
    method: "DELETE",
  });
  return response.json();
};

const updatePost = async (postId) => {
  const response = await fetch(`${rootUrl}/postId/${postId}`, {
    method: "PATCH",
    data: { title: "REACT QUERY FOREVER!!!!" },
  });
  return response.json();
};

export { maxPostPage, fetchPosts, deletePost, updatePost };
