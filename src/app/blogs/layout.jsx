import React from "react";
import CategoryList from "../_components/CategoryList";
export const metadata = {
  title:"بلاگ ها",
  description : "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران"
};
const layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-12">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
        <CategoryList />
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
