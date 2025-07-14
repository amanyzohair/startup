"use client";

import "./home.scss";
import "./embla.scss";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  DotButton,
  useDotButton,
} from "../shared/carousel-tools/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplayProgress } from "../shared/carousel-tools/autoplay-progress";
import { useRef } from "react";
import Image from "next/image";
import IMAGES from "../assets/images";

const Home = () => {
  const options: EmblaOptionsType = { containScroll: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const progressNode = useRef<HTMLDivElement>(null);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);
  return (
    <>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="banner">
                <Image
                  src={IMAGES.banner1}
                  priority={true}
                  fill
                  alt="home cleaning"
                />
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
              </div>
            </div>
            <div className="embla__slide">
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
              </div>
            </div>
          </div>
        </div>
        <div className="embla-progress-holder">
          <div
            className={`embla__progress ${
              showAutoplayProgress ? "" : "embla__progress--hidden"
            }`}
          >
            <div className="embla__progress__bar" ref={progressNode} />
          </div>
        </div>
        <div className="embla__controls">
          {/* <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div> */}
        </div>
      </section>
      <section className="main">
        {/* <div className="banner">  
          <div className="overlay"></div>
        </div> */}
      </section>
    </>
  );
};
export default Home;
