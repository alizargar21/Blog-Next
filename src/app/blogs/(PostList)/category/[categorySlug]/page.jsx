import PostList from "@/pages/_components/PostList";
import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

async function CategoryPage({ params, searchParams }) {
  const { categorySlug } = params;
  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?&${queries}`
  );

  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);
  const posts = await getPosts(queries, options);
  
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد !
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default CategoryPage;
