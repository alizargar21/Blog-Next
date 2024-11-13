import { Suspense } from "react";
import PostList from "../../_components/PostList";
import Spinner from "@/ui/Spinner";

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
const {
  data: { posts },
} = await res.json();

function BlogsPage() {
  return (
    <div>
      <p className="mb-4 text-secondary-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        sequi soluta quidem numquam nobis earum quis impedit vitae quaerat, iure
        quam cumque eaque ea unde eius possimus ipsum maxime veniam?
      </p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogsPage;
