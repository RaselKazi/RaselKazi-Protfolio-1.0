import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className=" max-w-screen-2xl w-full  dark:bg-gray-900">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
