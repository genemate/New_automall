"use client";

import Header from "../components/Header";
import Product from "../components/Pages/Product";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";

function PostPage() {
  return (
    <>
      <Header />
      <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Product />
        <Footer />
        <BackToTopBtn />
      </main>
    </>
  );
}

export default PostPage;
