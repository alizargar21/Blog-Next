import Image from "next/image";
import React from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Avatar from "@/ui/Avatar";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postServices";

async function PostList() {
const posts =  await getPosts()
console.log(posts);
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8 ">
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="col-span-12 p-2 border rounded-lg over aspect-v as sm:col-span-6 lg:col-span-4 border-secondary-100"
          >
            <CoverImage {...post} />
            {/* { post content} */}
            <div>
              <Link href={`/blogs/${post.slug}`}>
                <h2 className="mb-4 font-bold text-secondary-700">
                  {post.title}
                </h2>
              </Link>
              {/* post author - reading time */}
              <div className="flex items-center justify-between mb-2">
                <Author {...post.author} />
                <div className="flex items-center text-[10px] text-secondary-500">
                  <ClockIcon className="w-4 h-4 ml-1 stroke-secondary-50" />
                  <span className="ml-1">حواندن :</span>
                  <span className="ml-1 leading-3">{post.readingTime}</span>
                  <span className="">دقیقه :</span>
                </div>
              </div>
                <PostInteraction  {...post}/>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
}

export default PostList;
