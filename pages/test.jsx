/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useEffect } from "react";
import style from "../styles/text.module.css";

export default function test() {
  return (
    <>
      <div className={style.container}>
        <section className="card-area">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      <h2 className="card-front__heading">City break</h2>
                      <p className="card-front__text-price">From £29</p>
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back"></div>
                </div>
              </div>
              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    For urban lovers
                  </h3>
                  <p className="inside-page__text">
                    As cities never sleep, there are always something going on,
                    no matter what time!
                  </p>
                  <a
                    href="#"
                    className="inside-page__btn inside-page__btn--city"
                  >
                    View deals
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
