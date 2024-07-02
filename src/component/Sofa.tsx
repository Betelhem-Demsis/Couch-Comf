import React, { useEffect } from "react";
import "../css/sofa.css";
import pic from "../assets/image/paul-weaver-nWidMEQsnAQ-unsplash.jpg";

const Sofa: React.FC = () => {
  useEffect(() => {
    const slides = document.querySelectorAll<HTMLDivElement>(".slide");
    const btnLeft =
      document.querySelector<HTMLButtonElement>(".slider__btn--left");
    const btnRight = document.querySelector<HTMLButtonElement>(
      ".slider__btn--right"
    );
    const dotContainer = document.querySelector<HTMLDivElement>(".dots");
    let curSlide = 0;
    const maxSlide = slides.length;

    const createDots = () => {
      slides.forEach((_, i) => {
        dotContainer?.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = (slide: number) => {
      document
        .querySelectorAll<HTMLButtonElement>(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      const activeDot = document.querySelector<HTMLButtonElement>(
        `.dots__dot[data-slide="${slide}"]`
      );
      activeDot?.classList.add("dots__dot--active");
    };

    const goToSlide = (slide: number) => {
      slides.forEach((s, i) => {
        if (s) {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
        }
      });
    };

    const nextSlide = () => {
      curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = () => {
      curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = () => {
      goToSlide(0);
      if (dotContainer?.children.length === 0) {
        createDots();
      }
      activateDot(0);
    };
    init();

    btnRight?.addEventListener("click", nextSlide);
    btnLeft?.addEventListener("click", prevSlide);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    });

    dotContainer?.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("dots__dot")) {
        const slideNum = parseInt(target.dataset.slide || "0", 10);
        goToSlide(slideNum);
        activateDot(slideNum);
      }
    });
  }, []);

  return (
    <section className="section best-selling" id="section--3">
      <h2>Best Selling Sofa of the Year</h2>
      <div className="slider">
        <div className="slide">
          <div className="bestselling-sofa">
            <img src={pic} className="sofa-img" alt="Sofa" />
            <div className="sofa-title">
            <h5>Best Spongy Sofa</h5>
            <button className="button-sofa">Buy</button>
            </div>
           
          </div>
        </div>
        <div className="slide">
          <div className="bestselling-sofa">
            <img src={pic} className="sofa-img" alt="Sofa" />
            <div className="sofa-title">
            <h5>Best Spongy Sofa</h5>
            <button className="button-sofa">Buy</button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bestselling-sofa">
            <img src={pic} className="sofa-img" alt="Sofa" />
            <div className="sofa-title">
            <h5>Best Spongy Sofa</h5>
            <button className="button-sofa">Buy</button>
            </div>
          </div>
        </div>
        <button className="slider__btn slider__btn--left">←</button>
        <button className="slider__btn slider__btn--right">→</button>
        <div className="dots"></div>
      </div>
    </section>
  );
};

export default Sofa;
