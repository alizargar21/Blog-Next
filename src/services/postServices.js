export async function getPostBySlug(slag) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slag}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list` , {cache : "force-cache"});
  const { data } = await res.json();
  const { posts } = data || {};
  return posts;
}
