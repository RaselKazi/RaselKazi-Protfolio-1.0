import React from "react";
import style from "./Nokia.module.css";
export default function Nokia() {
  return (
    <div className={style.container}>
      <div className={style.back}>
        <div className={style.screen}>
          <span>NOKIA</span>
          <div className={style.bg}>01830225388</div>
        </div>
        <div className={style.buttons}>
          <div className={style.topRow}>
            <div className={style.start}>
              <div className={style.b1}></div>
              <div className={style.b2}></div>
            </div>
            <div className={style.middle}></div>
            <div className={style.end}>
              <div className={style.b1}></div>
              <div className={style.b2}></div>
            </div>
          </div>
          <div className={style.bottomRow}>
            <div className={style.column1}>
              <div className={style.b1}>1 ~</div>
              <div className={style.b2}>4 ghi</div>
              <div className={style.b3}>7 pqrs</div>
              <div className={style.b4}>* +</div>
            </div>
            <div className={style.column2}>
              <div className={style.b1}>2 abc</div>
              <div className={style.b2}>5 jkl</div>
              <div className={style.b3}>8 tuv</div>
              <div className={style.b4}>0 ~</div>
            </div>
            <div className={style.column3}>
              <div className={style.b1}>def 3</div>
              <div className={style.b2}>mno 6</div>
              <div className={style.b3}>wxyz 9</div>
              <div className={style.b4}>~ #</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
