import React from "react";
import Picture from "../pictures/3.jpg";

const ResumeComponent = () => {
  return (
    <div class="body">
      <main>
        <section class="resume">
          <section class="table">
            <table>
              <tr style={{ borderTop: "2px solid white" }}>
                <td class="smallblue" style={{ width: "20%" }}>
                  姓名
                </td>
                <td style={{ width: "40%" }}>黃昱翔</td>
                <td class="smallblue" style={{ width: "8vw" }}>
                  性別
                </td>
                <td>男</td>
              </tr>
              <tr>
                <td class="smallblue">學歷</td>
                <td>
                  <ul>
                    <li>高中: 振聲高中資訊科</li>
                    <li>大學: 龍華科技大學多媒體與遊戲發展科學系</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="smallblue">專業技能</td>
                <td>
                  <ul>
                    <li>程式語言: C++、C#、javascript</li>
                    <li>遊戲開發: Unity、Unreal</li>
                    <li>
                      網頁開發: HTML、CSS、javascript、React、Node.js、MongoDB
                    </li>
                    <li>版本控制: Git、GitHub</li>
                    <li>3D建模: 3DMax、Maya、Blender</li>
                    <li>
                      Adobe: Photoshop、Illustrator、After Effects、Premiere Pro
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="smallblue">相關證照</td>
                <td>
                  <ol>
                    <li>乙級電腦硬體裝修技術士</li>
                    <li>丙級電腦硬體裝修技術士</li>
                    <li>丙級工業電子技術士</li>
                    <li>(IC3) Internet and Computing Core Certifcation</li>
                    <li>(ACP) Adobe Certified Professional _ Photoshop</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td class="smallblue">在校表現</td>
                <td>
                  <ol>
                    <li>
                      鑒於自己在大學時期並沒有就讀資訊類科系的背景，同時為了增強自己在後端方面的專業能力，我主動選了資管系的「資料庫設計課程」，無論在遊戲或網頁製作上都非常有幫助。
                    </li>
                    <li>
                      爭取與老師一同參與教育部 110
                      年「虛擬實境教學應用教材開發與教學實施計畫」,負責程式的部分,並且同時製作於「OCULUS
                      QUEST 2」、「HTC VIVE」兩款裝置上,藉此機會學習到了製作 VR
                      相關的經驗。
                    </li>
                  </ol>
                </td>
              </tr>
            </table>
          </section>
          <section class="picture">
            <img src={Picture} alt="證件照" />
          </section>
        </section>
      </main>
    </div>
  );
};

export default ResumeComponent;
