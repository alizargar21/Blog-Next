"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="mb-8 text-xl font-bold text-secondary-700">
            هیچ پستی با این مشخصات پیدا نشد !
          </p>
          <Link href={`/blogs`}>رفتن به صفحه پست؟</Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
