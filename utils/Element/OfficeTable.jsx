import React from "react";
import style from "./OfficeTable.module.css";
export default function OfficeTable() {
  return (
    <div className={style.body}>
      {/* <!--FLOOR--> */}
      <div id={style.floor}></div>
      {/* <!--END OF FLOOR--> */}

      <div id={style.scene}>
        {/* <!--BOOK STACK--> */}

        {/* <!--POST-ITS-->  
        <div className={style.rightWheel} id={style.note1} draggable="true">
          <p className={style.rightWheel}>BUY MILK</p>
        </div>
        <div className={style.rightWheel} id={style.note2} draggable="true">
          <p className={style.rightWheel}>CALL MOM</p>
        </div>
        <div className={style.drag} id={style.note3} draggable="true">
          <p className={style.note}>FEED CATS</p>
        </div>
        <div className={style.drag} id={style.note4} draggable="true">
          <p className={style.note}>WATER CACTUS</p>
        </div>
        <!--END OF POST-ITS--> 

       <!--PHOTOS--> 
        <div className={style.drag} id={style.photo1}>
          <p className={style.photo}>CAT LADY</p>
        </div>
         <!--END OF PHOTOS--> */}

        {/* <!--CHAIR--> */}

        {/* <!--END OF CHAIR--> */}

        {/* <!--DESK--> */}
        <div id={style.desk}>
          {/* <!--DESK-start--> */}

          <div id={style.stackBook}>
            <div id={style.stackBook1}></div>
            <div className={style.stackBook2}></div>
            <div className={style.stackBook3}></div>
            <div className={style.stackBook4}></div>
            <div id={style.stackBook5}></div>
            <div className={style.stackBook6}></div>
            <div className={style.stackBook7}></div>
            <div id={style.stackBook8}></div>
            <div className={style.stackBook9}></div>
            <div id={style.stackBook10}></div>
            <div id={style.stackBook11}></div>
            <div id={style.stackBook12}></div>
          </div>
          {/* <!--END OF BOOK STACK--> */}

          {/* <!--BINDER STACK--> */}
          <div id={style.stackBinder}>
            <div id={style.stackBinder1}>
              <div
                className={style.stackBinderRightBind}
                id={style.stackBinder1Bind}>
                <div
                  className={`${style.stackBinderRightTop} ${style.stackBinder1Tb}`}></div>
                <div className={style.stackBinderRightRing}>
                  <div className={style.stackBinderRightPaper}></div>
                </div>
                <div
                  className={`${style.stackBinderRightBottom} ${style.stackBinder1Tb}`}></div>
              </div>
            </div>
            <div id={style.stackBinder2}>
              <div
                className={`${style.stackBinderLeftBind} ${style.stackBinder4Bind}`}>
                <div
                  className={`${style.stackBinderLeftTop} ${style.stackBinder4Tb}`}></div>
                <div className={style.stackBinderLeftRing}>
                  <div className={style.stackBinderLeftPaper}></div>
                </div>
                <div
                  className={`${style.stackBinderLeftBottom} ${style.stackBinder4Tb}`}></div>
              </div>
            </div>
            <div id={style.stackBinder3}>
              <div
                className={style.stackBinderRightBind}
                id={style.stackBinder3Bind}>
                <div
                  className={`${style.stackBinderRightTop} ${style.stackBinder3Tb}`}></div>
                <div className={style.stackBinderRightRing}>
                  <div className={style.stackBinderRightPaper}></div>
                </div>
                <div
                  className={`${style.stackBinderRightBottom} ${style.stackBinder3Tb}`}></div>
              </div>
            </div>
            <div id={style.stackBinder4}>
              <div
                className={`${style.stackBinderLeftBind} ${style.stackBinder4Bind}`}>
                <div
                  className={`${style.stackBinderLeftTop} ${style.stackBinder4Tb}`}></div>
                <div className={style.stackBinderLeftRing}>
                  <div className={style.stackBinderLeftPaper}></div>
                </div>
                <div
                  className={`${style.stackBinderLeftBottom} ${style.stackBinder4Tb}`}></div>
              </div>
            </div>
          </div>
          {/* <!--END OF BINDER STACK--> */}

          {/* <!--PENCIL HOLDER CONTENTS--> */}
          <div id={style.pencilHolderContents}>
            <div id={style.pencilCup}>
              <div id={style.heart}></div>
            </div>
            <div id={style.pencilHolder}>
              <div id={style.ruler}>
                <div id={style.rulerInner}></div>
              </div>
              <div id={style.pencil1}>
                <div className={style.pencilTip}>
                  <div className={style.pencilTipTop}></div>
                </div>
              </div>
              <div id={style.pencil2}>
                <div className={style.pencilTip}>
                  <div className={style.pencilTipTop}></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--END OF PENCIL HOLDER CONTENTS--> */}

          {/* <!--COFFEE CUP--> */}
          <div id={style.coffeeCup}>
            <div id={style.coffeeCupTop}>
              <div id={style.coffeeCupRim}></div>
            </div>
            <div id={style.coffeeCupBottom}>
              <div id={style.coffeeCupHolder}>
                <div id={style.coffeeCupLogo}></div>
              </div>
              <p className={style.cup}>Jackie</p>
            </div>
          </div>
          {/* <!--END OF COFFEE CUP--> */}

          {/* <!--BOOK STACK--> */}
          {/* <div id={style.stackBookSmall}>
            <div className={style.stackBook2}></div>
            <div className={style.stackBook4}></div>
            <div className={style.stackBook3}></div>
            <div className={style.stackBook7}></div>
            <div className={style.stackBook6}></div>
            <div className={style.stackBook9}></div>
          </div> */}
          {/* <!--END OF BOOK STACK--> */}

          {/* <!--takeOut--> */}
          <div id={style.takeOut}>
            <div id={style.takeOutBox}>
              <div id={style.takeOutBoxTop}></div>
              <div id={style.takeOutBoxBottom}>
                <div id={style.takeOutBoxHandle}>
                  <div id={style.takeOutBoxHandleDot}></div>
                </div>
              </div>
              <div id={style.takeOutBoxBottomBack}>
                <p className={style.box}>
                  Chinese
                  <br />
                  Food
                </p>
              </div>
            </div>
            <div id={style.chopsticks}>
              <div id={style.chopsticks1}></div>
              <div id={style.chopsticks2}></div>
            </div>
          </div>
          {/* <!--END OF takeOut--> */}
          {/* <!--GALLETAS--> */}
          <div id={style.galletas}>
            <div id={style.plato}>
              <div id={style.sombra}></div>
            </div>
            <div id={style.galleta1}>
              <div id={style.chispa1}></div>
              <div id={style.chispa2}></div>
              <div id={style.chispa3}></div>
            </div>
            <div id={style.galleta2}>
              <div id={style.chispa4}></div>
              <div id={style.chispa5}></div>
              <div id={style.chispa6}></div>
            </div>
          </div>
          {/* <!--END OF GALLETAS--> */}
          {/* <!--COMPUTER--> */}
          <div id={style.computer}>
            <div id={style.computerSide}>
              <div id={style.computerBack}>
                <div id={style.computerLogo}></div>
                <div id={style.computerLogoBite}></div>
                <div id={style.computerLogoStem}></div>
                <div id={style.computerLogoLeaf}></div>
              </div>
            </div>
            <div id={style.computerStand}>
              <div id={style.computerStandShadow}></div>
              <div id={style.computerStandHole}></div>
              <div id={style.computerCable}></div>
            </div>
            <div id={style.computerStandBottom}></div>
            <div id={style.computerStandCurve}></div>
          </div>
          {/* <!--END OF COMPUTER--> */}

          {/* <!--DESK-start-> */}
          <div id={style.deskTop1}></div>
          <div id={style.deskTop2}></div>
          <div id={style.deskTop3}>
            <div id={style.deskTop3Left}></div>
            <div id={style.deskTop3Right}></div>
          </div>
          <div id={style.deskLegLeft}></div>
          <div id={style.deskLegRight}></div>
          {/* <!--END OF DESK--> */}

          <div id={style.chair}>
            <div id={style.chairSeat}>
              <div id={style.chairArmLeft}></div>
              <div id={style.chairBack}></div>
              <div id={style.chairSpine}></div>
              <div id={style.chairPole}>
                <div id={style.chairRod}></div>
              </div>
              <div id={style.chairArmRight}></div>
              <div id={style.chairLegs}>
                <div id={style.chairLegLeft}>
                  <div id={style.leftWheel}></div>
                </div>
                <div id={style.chairLegMiddle}>
                  <div id={style.middleWheel}></div>
                </div>
                <div id={style.chairLegRight}>
                  <div id={style.rightWheel}></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--BIG BOX--> */}
          <div id={style.bigBox}>
            <div id={style.bigBoxBody}>
              <div id={style.bigBoxShadow}></div>
              <div id={style.bigBoxHole}></div>
            </div>
            <div id={style.boxFolder}></div>
            <div id={style.folderPaper}>
              <p className={style.paper}>
                Dear Jackie,
                <br />
                <br />
                Please bring home some chicken!
                <br />
                <br />
                <br />
                Love,
                <br />
                Your cats
              </p>
            </div>
            <div id={style.folderPaper2}>
              <p className={style.paper}>
                Grocery List
                <br />
                <br />
                Eggs
                <br />
                Butter
                <br />
                Flour
                <br />
                Coffee
                <br />
                Bread
              </p>
            </div>
          </div>
          {/* <!--END OF BIG BOX--> */}

          {/* <!--WALL OUTLET--> */}
          <div id={style.outlet}>
            <div className={style.outletFace}></div>
            <div className={style.outletFace}></div>
          </div>
          {/* <!--END OF WALL OUTLET--> */}

          {/* <!--BAG--> */}
          <div id={style.bag}>
            <div id={style.bagBody}>
              <div id={style.bagLogo}></div>
              <p className={style.pBag}>Groceries</p>
              <div id={style.bagHandleFront}></div>
              <div id={style.bagHandleBack}></div>
              <div id={style.bagSide}></div>
            </div>
          </div>
          {/* <!--END OF BAG--> */}

          {/* <!--FLOOR BINDER--> */}
          <div id={style.floorBinder}>
            <div id={style.floorBinder1}></div>
            <div id={style.floorBinder2}></div>
          </div>
          {/* <!--END OF FLOOR BINDER--> */}
          {/* <!--END OF DESK--> */}
        </div>
        {/* <!--END OF DESK22--> */}
      </div>
    </div>
  );
}
