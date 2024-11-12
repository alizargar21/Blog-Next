import PostList from "../_components/PostList";

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
const {
  data: { posts },
} = await res.json();


function BlogsPage() {
  return (
    <div>
<PostList />
    </div>
  )
}

export default BlogsPage