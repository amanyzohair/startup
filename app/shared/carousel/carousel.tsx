"use client";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useRef } from "react";
import { useAutoplayProgress } from "./autoplay-progress";
import "./embla.scss";
import { DotButton, useDotButton } from "./carousel-dots";

type PropType = {
  slides: React.JSX.Element[];
};
const Carousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const options: EmblaOptionsType = { containScroll: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true }),
  ]);

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi);

  const progressNode = useRef<HTMLDivElement>(null);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);
  return (
    <>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide">
                {slide}
              </div>
            ))}
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
    </>
  );
};

export default Carousel;
