import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Table from "./TableRes";
import Nav from "./Nav";
import confetti from "./confetti.svg";
import "./result.css";

const Result = (props) => {
  const seconds = useRef(
    parseInt(props.location.props.minutes) * 60 +
      parseInt(props.location.props.seconds)
  );
  const [hideRegister, setHideRegister] = useState(true);
  const time = useRef(
    props.location.props.minutes + ":" + props.location.props.seconds
  );
  const [isNewLeader, setIsNewLeader] = useState(false);
  const corrects = useRef(props.location.props.correct);
  const [percent_correct, setPercentCorrect] = useState(0);
  const [mark, setMark] = useState("0");
  const [table_person, setTable] = useState(null);
  const [user_name, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPercentCorrect(Math.floor((corrects.current * 100) / 30));
  }, []);

  useEffect(() => {
    if (percent_correct < 60) setMark("2");
    else if (percent_correct >= 60 && percent_correct < 75) setMark("3");
    else if (percent_correct >= 75 && percent_correct < 90) setMark("4");
    else setMark("5");
  }, [percent_correct]);

  useEffect(() => {
    async function newLeader() {
      await axios({
        method: "post",
        url: "/api/tests/testResult",
        data: {
          time: seconds.current,
        },
      }).then((data) => {
        setIsNewLeader(data.data["isNewLider"] && corrects.current === 30);
        setTable(data.data.table);
      });
    }
    newLeader();
  }, []);

  function handleConfetti() {
    setHideRegister(!hideRegister);
  }

  function handleNewRecordName(event) {
    setUserName(event.target.value);
  }

  async function pressBtnSaveRecord() {
    if (isNewLeader) {
      if (user_name.length !== 0) {
        await axios({
          method: "post",
          url: "/api/tests/createNewLeader",
          data: {
            name: user_name,
            time: seconds.current,
            testNumber: props.location.props.number,
          },
        })
          .then((data) => {
            setMessage(data.data.message);
            setIsNewLeader(false);
            setHideRegister(true);
          })
          .catch(() => {
            setMessage("Произошла ошибка, попробуйте позднее");
          });
      }
    }
  }

  return (
    <div className="result">
      <div className="main">
        <div>
          <h1 className="your_result">Ваш результат</h1>
        </div>
        <div className="resulting">
          <div className="mark">
            <div className="righting">
              <h1>{percent_correct}%</h1>
            </div>
            <div className="mark_is">
              <h1>
                Оценка: <span className="mark_span">{mark}</span>
              </h1>
            </div>
          </div>
          <div className="mark_info">
            <div className="right_count_div">
              <h1>
                Количество правильных ответов{" "}
                <span className="right_count">{corrects.current}</span>
              </h1>
            </div>
            <div className="max">
              <h1>
                Максимальное возможное кол-во{" "}
                <span className="right_count">30</span>
              </h1>
            </div>
            <div className="mark_time">
              <h1 style={{ cursor: "default" }}>
                Время выполнения теста{" "}
                <span className="mark_time_span">{time.current}</span>
              </h1>
              <div
                className="btn_new_result"
                style={isNewLeader ? { display: "flex" } : { display: "none" }}
                onClick={handleConfetti}
              >
                <img className="confetti" src={confetti} alt="confetti" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="result_register"
          style={hideRegister ? { display: "none" } : { display: "flex" }}
        >
          <div>
            <h1 className="your_result">Регистрация результата</h1>
          </div>
          <div className="reg_info">
            <div className="reg_name_div">
              <h1 className="reg_places1">Имя</h1>
              <input
                type="text"
                value={user_name}
                className="reg_input"
                placeholder="Введите имя"
                maxLength={20}
                onChange={handleNewRecordName}
              />
            </div>
            <div className="reg_name_div">
              <h1 className="reg_places1">Время</h1>
              <h1 className="reg_places2">{time.current}</h1>
            </div>
            <div className="reg_name_div">
              <h1 className="reg_places1">Тест</h1>
              <h1 className="reg_places2">{props.location.props.number}</h1>
            </div>
          </div>
          <div className="btn_reg_save" onClick={pressBtnSaveRecord}>
            Сохранить
          </div>
          <div style={message ? { display: "block" } : { display: "none" }}>
            <h1 className="your_result" style={{ fontSize: "32px" }}></h1>
          </div>
        </div>
        <Table persons={table_person} />
      </div>
      <Nav />
    </div>
  );
};

export default Result;
