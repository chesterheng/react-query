const rootUrl = process.env.REACT_APP_API_URL;

const fetchComments = async (postId) => {
  const response = await fetch(`${rootUrl}/comments?postId=${postId}`);
  return response.json();
};

export { fetchComments };
