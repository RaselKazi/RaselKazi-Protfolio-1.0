import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className=" max-w-screen w-full bg-gray-900  dark:bg-gray-900">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
