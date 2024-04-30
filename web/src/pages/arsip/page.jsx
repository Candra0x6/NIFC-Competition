import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import BookCover from "./components/BookCover";
import Heading from "../../components/ui/heading";

function Arsip() {
  const [books, setBooks] = useState();
  const getBooksData = async () => {
    try {
      const fetchData = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/books`
      );
      const resJSON = await fetchData.json();
      setBooks(resJSON);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);
  return (
    <Layout className=" lg:pt-[200px] md:pt-[100px] pt-[120px]">
      <Heading>Cerita Rakyat</Heading>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row w-full mt-10 2xl:gap-x-[10rem] gap-5">
        {books && books.map((item, id) => <BookCover key={id} data={item} />)}
      </div>
    </Layout>
  );
}

export default Arsip;
