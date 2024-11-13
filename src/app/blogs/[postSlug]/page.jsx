import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function SinglePostPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.postSlug}`
  );
  const {
    data,
  } = await res.json();
const {post} = data || {};
if(!post) notFound();
  return (
    <div className="max-w-screen-md mx-auto text-secondary-600">
      <h1>{post.title}</h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative mb-10 overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
        <Image
          className="object-cover object-center transition-all duration-300 ease-out hover:scale-110"
          src={post.coverImageUrl}
          alt=""
          fill
        />
      </div>
    </div>
  );
}

export default SinglePostPage;
