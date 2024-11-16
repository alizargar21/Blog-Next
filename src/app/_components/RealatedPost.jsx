import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPost({ posts }) {
  return (
    <div className="mb-10 ">
      <p className="mb-4 text-xl">پست های مرتبط</p>
      <div className="grid grid-cols-6 gap-4">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            >
              <CoverImage {...item} />
              <div className="flex items-center justify-between">
                <Author {...item.author} />
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
