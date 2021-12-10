import React, { useState } from "react";
import icon from "../ICONS/facebook.svg";
import icon2 from "../ICONS/instagram.svg";
import icon3 from "../ICONS/github-brands 2.png";
import AuthService from "../services/auth.service";

const ContactComponent = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [need, setNeed] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeNeed = (e) => {
    setNeed(e.target.value);
  };
  const handleContact = () => {
    AuthService.contact(name, email, phone, need)
      .then(() => {
        window.alert("Contact succeeds.");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div class="body">
      <main>
        <section class="contact">
          <section class="contactWord">
            <h2>我的電話: 0903-356-451</h2>
            <h2>我的Email : a0903356451@gmail.com</h2>
            <h2>方便聯絡時間 : 周一至周六早上八點到晚上七點</h2>
            <h2>其他聯絡方式 : 臉書、IG</h2>
          </section>

          <div class="line"></div>

          <section class="form">
            <div class="form2">
              <div>
                <label for="name">姓名:</label>
                <input
                  onChange={handleChangeName}
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <br />

              <div>
                <label for="email">郵件:</label>
                <input
                  onChange={handleChangeEmail}
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <br />

              <div>
                <label for="phone">電話:</label>
                <input
                  onChange={handleChangePhone}
                  type="text"
                  id="phone"
                  name="phone"
                />
              </div>
              <br />

              <div>
                <label for="need">需求:</label>
                <textarea
                  onChange={handleChangeNeed}
                  name="need"
                  id="need"
                  rows="10"
                ></textarea>
              </div>
              <br />

              <button onClick={handleContact} type="submit">
                提交表單
              </button>
              <div>{message && <div class="error">{message}</div>}</div>
            </div>
          </section>
        </section>
      </main>

      <footer>
        <a
          href="https://www.facebook.com/profile.php?id=100004662224032"
          target="_blank"
        >
          <img src={icon} alt="facebook" title="facebook page" />
        </a>

        <a href="https://www.instagram.com/daniel38530324/" target="_blank">
          <img src={icon2} alt="instagram" title="instagram page" />
        </a>

        <a href="https://github.com/daniel38530324" target="_blank">
          <img src={icon3} alt="github" title="github page" />
        </a>
      </footer>
    </div>
  );
};

export default ContactComponent;
