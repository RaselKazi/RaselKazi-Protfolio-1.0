import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [first, setFirst] = useState(true);

  useEffect(() => {
    setTimeout(() => setFirst(false), 1000);
  }, []);

  if (first) {
    return <Loading />;
  }
  return (
    <>
      <Navbar></Navbar>
      <div className=" max-w-full bg-slate-900  dark:bg-slate-900 ">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
