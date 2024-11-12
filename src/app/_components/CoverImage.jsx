import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative mb-6 overflow-hidden rounded-md aspect-video">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          // width={500}
          // height={500}
          quality={80}
          fill
          className="object-cover object-center transition-all duration-300 ease-out hover:scale-110"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
