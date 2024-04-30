import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import Heading from "../../../components/ui/heading";
import NotFound from "../../../assets/image/not-found-image-illustration.jpg";
import GalleryImageGrid from "../components/GalleryImageGrid";
import CultureSnapshot from "../components/CultureSnapshot";
import EthnicPhotoGrid from "../components/EthnicPhotoGrid";

function CulturesDetail() {
  const { culturesId } = useParams();
  const [culture, setCulture] = useState();
  const getCultureDetails = async () => {
    try {
      const getCulture = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/cultures/${culturesId}`
      );
      const res = await getCulture.json();
      setCulture(res);
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    getCultureDetails();
  }, []);
  return (
    <div className="">
      <div className="w-full relative">
        <div className="absolute w-full h-full bg-gradient-to-t from-white to-transparent " />
        <img
          src={(culture && culture.region_image) || NotFound}
          alt="Culture Discover"
          className="w-full lg:h-[23rem] h-[50vw] object-cover"
        />
      </div>
      <Layout>
        <div className="flex flex-col items-center 2xl:-mt-8 mb-20">
          <Heading className="text-[7vw]">{culture && culture.region}</Heading>
          <p className="text-center font-alata 2xl:text-[30px] lg:text-[25px] text-sm lg:leading-normal text-cusBrown">
            {culture && culture.region_description}
          </p>
        </div>
        <div className="flex flex-col">
          <Heading>Seni Tradisional</Heading>
          <GalleryImageGrid data={culture && culture} />
        </div>
        <div className="flex flex-col 2xl:mt-20 -mt-[140px]">
          <CultureSnapshot
            className="-mt-[140px]"
            data={culture && culture.architecture && culture.architecture}
            title="Arsitekture"
          />
        </div>
        <div className="flex flex-col 2xl:mt-20 mt-10">
          <CultureSnapshot
            className="mt-10"
            data={culture && culture.tradition && culture.tradition}
            title="Tradisi"
          />
        </div>
        <div className="flex flex-col mt-20">
          <EthnicPhotoGrid
            data={culture && culture.culinary && culture.culinary}
            title={`Kuliner`}
          />
        </div>
      </Layout>
    </div>
  );
}

export default CulturesDetail;
