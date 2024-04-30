import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import SongCover from "../song/components/SongCover";
import Heading from "../../components/ui/heading";
import { Link } from "react-router-dom";

function ListMusik() {
  const [songs, setSongs] = useState();
  const getAllSongsData = async () => {
    try {
      const fetchData = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/songs`
      );
      const resJSON = await fetchData.json();
      setSongs(resJSON);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSongsData();
  }, []);
  return (
    <Layout className="lg:pt-[200px] md:pt-[100px] pt-[120px]">
      <Heading>Lagu Daerah</Heading>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row w-full mt-10 2xl:gap-x-[10rem] justify-items-center lg:gap-5 gap-2">
        {songs &&
          songs.map((item, id) => (
            <div className="flex flex-col " key={id}>
              <Link to={`/song/${item.id}`}>
                <SongCover
                  key={id}
                  image={item.image.path}
                  className="2xl:w-[25rem] xl:w-[22rem] lg:w-[20rem] w-full"
                />
              </Link>
              <Heading className="2xl:text-[2.4rem] xl:text-[2rem] lg:text-[1.8rem]">
                {item.title}
              </Heading>
            </div>
          ))}{" "}
      </div>
    </Layout>
  );
}

export default ListMusik;
