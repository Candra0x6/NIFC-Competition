import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../../assets/image/not-found-image-illustration.jpg";
import { useState } from "react";
import Layout from "../../../components/layout/layout";
function BookDetail() {
  const { bookId } = useParams();
  const [bookDetail, setBookDetail] = useState();
  const getBookById = async () => {
    try {
      const fetchDta = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/books/${bookId}`
      );
      const resJSON = await fetchDta.json();
      setBookDetail(resJSON);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    getBookById();
  }, []);

  return (
    <Layout className="lg:pt-[300px] pt-[100px] px-5">
      <div className="flex lg:flex-row flex-col w-full gap-x-10 2xl:px-[200px] lg:px-[150px] lg:-mb-[15vh]">
        <div className="flex flex-col items-center gap-y-3">
          <div
            className={`2xl:w-[445px] md:w-[18rem] w-[13rem] bg-gray-400 2xl:pr-2 2xl:pb-2 pr-1 pb-1 rounded-lg 2xl:h-[645px] md:h-[23rem] h-[15rem]`}
          >
            <img
              src={(bookDetail && bookDetail.image.cover) || NotFound}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 lg:gap-y-10 gap-y-4">
          <h1 className="2xl:text-[70px] lg:text-[60px] text-[30px] font-primary text-cusBrown lg:text-left text-center">
            {bookDetail && bookDetail.title}
          </h1>
          <div className="flex">
            {bookDetail &&
              bookDetail.genre &&
              bookDetail.genre.map((item, id) => (
                <h1
                  key={id}
                  className="font-primary 2xl:text-[40px] lg:text-[30px] text-[5vw] text-cusBrown"
                >
                  {item + (id !== bookDetail.genre.length - 1 ? "," : "")}
                </h1>
              ))}
          </div>
        </div>
      </div>
      <div className="bg-cusGrey w-full rounded-lg lg:mt-0 mt-10">
        <p className="text-cusBrown font-alata lg:p-20 2xl:px-36 lg:pt-[20vh] lg:pb-36 lg:text-[25px] p-5 text-[3vw] whitespace-pre-line">
          {bookDetail && bookDetail.content}
        </p>
      </div>
    </Layout>
  );
}

export default BookDetail;
