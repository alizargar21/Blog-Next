
import vazirFont from "@/constants/localFont";
import "../styles/globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: {
    template : "%s | بلاگ اپ",
    default : "بلاگ اپ"
  },
  description: "مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Toaster />
        <Header />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
