
import PostList from "../../_components/PostList";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";

// export const experimental_ppr = true;
async function BlogsPage() {
  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);
  const posts = await getPosts(options);
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default BlogsPage;
