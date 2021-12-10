import React from "react";
import { Link } from "react-router-dom";
import Picture from "../pictures/1_5.png";
import Picture2 from "../pictures/2.jpg";

const HomeComponent = () => {
  return (
    <div class="body">
      <main>
        <section class="up">
          <img src={Picture} alt="封面" />
          <h1 class="one">
            黃昱翔
            <br />
            <br />
            個人網頁
          </h1>
          <h1 class="two">遊戲、網頁開發者</h1>
          <a href="#introduce">開始了解</a>
        </section>
        <section class="down" id="introduce">
          <div class="left">
            <h1 class="blue">自傳簡介</h1>
            <p>
              我就讀龍華科技大學多媒體與遊戲發展科學系,高中時由於對程式設計感興趣而就讀資訊科,大學時想要將自身所學應用於遊戲領域因而進入本科系,未來乃想繼續升學獲得各方領域之專業知識及技能。
            </p>
            <p>
              我是一位適應力強,且認真負責的人,大二下學期的畢業專題製作,由於其他組員們不願意配合專
              題製作,因此我獨自當任專題製作的程式、美術、企畫等所有專題項目,雖然辛苦,但不論對於程式或
              是美術方面的能力都是有大幅度的提升。
            </p>
            <p>
              在校學習之餘,我除了積極考取證照及參加相關比賽,同時也有爭取與老師一同參與教育部
              110
              年「虛擬實境教學應用教材開發與教學實施計畫」,負責程式的部分,並且同時製作於「OCULUS
              QUEST 2」、「HTC VIVE」兩款裝置上,藉此機會學習到了製作 VR
              相關的經驗。
            </p>
          </div>
          <div class="right">
            <img src={Picture2} alt="大頭照" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeComponent;
