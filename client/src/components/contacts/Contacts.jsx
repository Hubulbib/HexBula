import React, { useState } from "react";
import axios from "axios";
import google from "./google.png";
import instagram from "./instagram.png";
import vk from "./vk.png";
import "./contacts.css";
import Nav from "./Nav";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeText(event) {
    setText(event.target.value);
  }

  async function onPressBtn() {
    if (name && email && text) {
      try {
        await axios({
          method: "post",
          url: "/api/mail",
          data: {
            username: name,
            useremail: email,
            usertext: text,
          },
        });
      } catch (e) {
        console.log(e.message || "Ошибка сервера, повторите попытку");
      }
    }
  }

  return (
    <form className="form" onSubmit={onPressBtn}>
      <div className="contacts">
        <div className="contacts_div">
          <div className="contacts_text_div">
            <h1 className="contacts_text">Задайте нам вопрос</h1>
          </div>
          <input
            type="text"
            className="contacts_input"
            placeholder="ИМЯ"
            maxLength={30}
            minLength={2}
            value={name}
            onChange={handleChangeName}
          />
          <input
            type="email"
            className="contacts_input"
            placeholder="E-MAIL"
            maxLength={50}
            minLength={5}
            value={email}
            onChange={handleChangeEmail}
          />
          <textarea
            className="contacts_textarea"
            placeholder="Сообщение"
            maxLength={300}
            minLength={30}
            value={text}
            onChange={handleChangeText}
          />
          <button className="contacts_btn" type="submit">
            Отправить
          </button>
          <div className="contacts_find_us">
            <a href="https://vk.com/reactorit" target="_blank" rel="noreferrer">
              <img src={vk} alt="vk" className="find_us" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:reactoriT.tag.info@gmail.com"
              className="mail_text"
            >
              <img src={google} alt="google" className="find_us" />
            </a>
            <a
              href="https://www.instagram.com/reactor.it"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" className="find_us" />
            </a>
          </div>
        </div>
        <Nav />
      </div>
    </form>
  );
};

export default Contacts;
