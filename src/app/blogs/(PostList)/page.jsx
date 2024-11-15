import { Suspense } from "react";
import PostList from "../../_components/PostList";
import Spinner from "@/ui/Spinner";

// export const experimental_ppr = true;
function BlogsPage() {
  return (
    <div>
  
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogsPage;
