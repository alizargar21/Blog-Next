import React, { Suspense } from "react";
import CategoryList from "../../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
export const metadata = {
  title: "بلاگ ها",
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};
const layout = ({ children }) => {
  return (
    <div>
      <div className="grid items-center grid-cols-1 gap-8 mb-12 lg:grid-cols-1 text-secondary-700">
        <h1 className="mb-12 text-lg font-bold">لیست بلاگ ها</h1>
        <Search />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 space-y-4 lg:col-span-4 xl:col-span-3 text-secondary-500">
            <Suspense fallback={<Spinner />}>
              <CategoryList />
            </Suspense>
          </div>
          <div className="col-span-12 lg:col-span-4 xl:col-span-9">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
