import React from "react";
import Layout from "../../components/layout/layout";
import landingImage from "../../assets/image/LandingImg.svg";

import at3 from "../../assets/image/attribute3.svg";
import discoverImg1 from "../../assets/image/traditional-temple-image.png";
import discoverImg2 from "../../assets/image/traditional-dance-image.png";
import discoverImg3 from "../../assets/image/tradition-image.png";
import Shadow from "../../components/elements/Shadow";
import Heading from "../../components/ui/heading";
import Map from "../../components/ui/map";
import HeroPic from "../../assets/image/moh-hatta.png";

function Home() {
  return (
    <main className="relative min-w-screen">
      <div className="bg-cusOrange relative w-full ">
        <Layout>
          <div className="min-h-[40vh] lg:min-h-[50vh] w-full flex flex-col justify-end ">
            <div className="flex flex-col items-center ">
              <h1 className="text-[8vw] 2xl:text-[100px] font-primary text-center mb-20 text-cusBrown">
                Keanekaragaman Budaya <br /> Nusantara
              </h1>
              <img
                src={landingImage}
                className="xl:-mb-[250px] -mb-[140px] z-10 xl:w-[800px] w-[350px] "
              />
            </div>
          </div>
        </Layout>
        <Shadow className="bg-cusOrange -bottom-10 -left-10" />
      </div>
      <div className="flex flex-col 2xl:pb-[12rem] xl:pt-[400px] pt-[12rem] xl:pb-20 pb-[10rem] w-full">
        <Layout>
          <Heading>
            Keunikan Budaya tiap <br /> Daerah
          </Heading>
          <div className="grid grid-cols-3 xl:gap-20">
            <div className="w-full h-full flex flex-col items-center">
              <img src={discoverImg1} className="w-full h-full" />
              <h1 className="font-primary text-cusBrown xl:text-[50px]  text-[4vw] ">
                Arsitekture
              </h1>
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <img src={discoverImg2} className="w-full h-full" />
              <h1 className="font-primary text-cusBrown xl:text-[50px] text-[4vw]">
                Seni
              </h1>
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <img src={discoverImg3} className="w-full h-full" />
              <h1 className="font-primary text-cusBrown xl:text-[50px] text-[4vw]">
                Tradisi
              </h1>
            </div>
          </div>
        </Layout>
      </div>
      <div
        id="map-section"
        className="flex flex-col bg-cusGrey relative xl:h-[1500px] xl:pb-0 md:pb-20"
      >
        <Shadow className="bg-cusGrey -top-10 -left-10" />
        <Layout>
          <div className="flex flex-col items-center ">
            <img
              src={at3}
              alt="decoration"
              className=" xl:w-[1000px] w-[60vw] max-w-[1000px] xl:-my-10 -my-5"
            />
            <Heading>Mari Jelajahi Kebudayaan Nusantara</Heading>
          </div>
          <div className="indonesia w-full flex justify-center relative xl:mt-[300px] xl:ml-0 ml-2 mt-10 ">
            <Map />
          </div>
        </Layout>
        <Shadow className="bg-cusGrey -bottom-10 -left-10" />
      </div>
      <Layout>
        <div className="flex flex-row xl:mt-[200px] mt-[10rem] items-center">
          <div className="aspect-square xl:w-[1000px] lg:w-[40rem] md:w-[30rem] w-[45rem] max-w-[1000px]">
            <img
              src={HeroPic}
              alt="Moh Hatta"
              className="w-full h-full -scale-x-100 "
            />
          </div>
          <div className="flex flex-col items-center gap-10 font-latin">
            <p className="text-center xl:text-[30px] lg:text-[2.2vw] md:text-[2vw] text-[15px] text-xs xl:leading-normal">
              “Kebudayaan adalah cermin kehidupan suatu bangsa, barangsiapa yang
              membanggakan kebudayaan bangsanya adalah berharga untuk dikagumi.”
            </p>
            <h1 className="xl:text-[40px] md:text-xl text-sm">- Moh Hatta</h1>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default Home;
