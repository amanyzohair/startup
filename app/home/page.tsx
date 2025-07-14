import type { Metadata } from "next";
import Image from "next/image";
import IMAGES from "../assets/images";
import Carousel from "../shared/carousel/carousel";
import "./home.scss";

export const metadata: Metadata = {
  title: "Home | Phoenix",
  description: "Best Cleaning Service in Toronto",
};

const Home = () => {
  const SLIDES = [
    <div className="banner">
      <Image src={IMAGES.banner1} priority={true} fill alt="home cleaning" />
      <div className="overlay">
        <h1 className="font-bold  banner-title">Come Home Happy</h1>
        <p className="banner-text">We will clean for you</p>
        <button
          type="button"
          className="text-white focus:outline-none rounded-full text-sm px-6 py-3 text-center cursor-pointer mt-10 estimate-btn"
        >
          SCHEDULE AN APPOINTMENT
        </button>
      </div>
    </div>,
    <div className="banner banner-2">
      <div className="overlay">
        <h1 className="font-bold text-white banner-title-2">
          Focus on your Business and Let Us Make Your Facility Shine
        </h1>{" "}
        <button
          type="button"
          className="text-white focus:outline-none rounded-full text-sm px-6 py-3 text-center cursor-pointer mt-10 estimate-btn"
        >
          BOOK NOW
        </button>
      </div>
    </div>,
  ];
  return (
    <>
      <Carousel slides={SLIDES}></Carousel>
    </>
  );
};
export default Home;
