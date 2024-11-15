import http from "./httpServices";

export async function getPostBySlug(slag) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slag}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list`,
    options
  );
  const { data } = await res.json();
  const { posts } = data || {};
  return posts;
}

export async function likePostApi(postId) {
  return  http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}
export async function bookMarkPostApi(postId) {
  return  http
    .post(`/post/bookmark/${postId}`)
    .then(({ data }) => data.data);
}
