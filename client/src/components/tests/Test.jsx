import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { clearInterval, setInterval } from "timers";
import { Context } from "../../Context";
import Nav from "./Nav";
import "./test.css";

const Test = (props) => {
  const {
    result: { dispacth2 },
  } = useContext(Context);

  const number = useRef(props.location.props.number);
  const minutes = useRef("00");
  const seconds = useRef("00");
  const timeout = useRef(null);
  const solvedCount = useRef(0);
  const [arr, setArr] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [rightAnswer, setRightAnswer] = useState("");
  const [view, setView] = useState(false);
  const [record, setRecord] = useState(0);
  const [time, setTime] = useState("00 : 00");
  const [solved, setSolved] = useState(0);
  const [nowProblem, setProblem] = useState("");
  const [answerPerson, setAnswerPerson] = useState("");

  // запрос к серверу
  useEffect(() => {
    async function app() {
      await axios({
        method: "post",
        url: "/api/tests",
        data: {
          testNumber: number.current,
        },
      })
        .then((data) => {
          if (data["data"]) {
            const arrs = data["data"];
            setArr(arrs);
            setProblem(Object.keys(data["data"][0]).toString());
            setRightAnswer(Object.values(data["data"][0]).toString());
            solvedCount.current++;
          } else throw new Error("Ошибка сервера, перезагрузите страницу");
        })
        .catch((e) => {
          console.log(e);
        });
    }
    async function getRec() {
      await axios({
        method: "post",
        url: "/api/tests/getRecord",
        data: {
          testNumber: number.current,
        },
      })
        .then((data) => {
          if (data["data"]["record"] === null) {
            setRecord("нет");
          } else setRecord(data["data"]["record"]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    app();
    getRec();
  }, []);

  // таймер
  useEffect(() => {
    timeout.current = setInterval(() => {
      if (seconds.current >= 59) {
        minutes.current = (parseInt(minutes.current) + 1).toString();
        seconds.current = "0";
        if (parseInt(minutes.current) < 10)
          minutes.current = "0" + minutes.current;
        if (parseInt(seconds.current) < 10)
          seconds.current = "0" + seconds.current;
        setTime(minutes.current + " : " + seconds.current);
      } else {
        seconds.current = (parseInt(seconds.current) + 1).toString();
        if (parseInt(seconds.current) < 10)
          seconds.current = "0" + seconds.current;
        setTime(minutes.current + " : " + seconds.current);
      }
    }, 1000);
  }, []);

  function answerPersonHandler(event) {
    setAnswerPerson(event.target.value);
  }

  // нажатие на кнопку Сдать
  function pressBtn() {
    if (answerPerson === rightAnswer) {
      setCorrect(correct + 1);
    }
    if (solved + 1 < 30) {
      if (arr) {
        setProblem(Object.keys(arr[solvedCount.current]).toString());
        setRightAnswer(Object.values(arr[solvedCount.current]).toString());
      }
      solvedCount.current++;
    } else {
      setView(true);
      clearInterval(timeout.current);
      setProblem("");
    }
    setAnswerPerson("");
    setSolved(solved + 1);
  }

  // нажатие на Enter
  function pressKey(event) {
    if (event.code === "Enter" && answerPerson && solved + 1 < 32) {
      pressBtn();
    }
  }

  function onPressLink() {
    dispacth2({ type: "true" });
  }
  return (
    <div className="test" onKeyPress={pressKey}>
      <div className="test_div_main">
        <div className="test_information">
          <div className="test_number_div">
            <h1 className="test_number_text">Тест №{number.current}</h1>
          </div>
          <div className="test_record">
            <h1 className="test_record_text">
              Рекорд теста:
              <br />
              {record}
            </h1>
          </div>
        </div>
        <div className="test_input">
          <div className="test_timer">
            <h1 className="test_timer_text">
              Таймер
              <br />
              {time}
            </h1>
          </div>
          <div className="test_count">
            <h1 className="test_count_text">
              Решено
              <br />
              {solved}/30
            </h1>
          </div>
          <div className="test_inputs">
            <input
              value={nowProblem}
              style={{ cursor: "default" }}
              className="test_inputs_f"
              readOnly
            />
            <div className="arrow">
              <div></div>
            </div>
            <input
              value={answerPerson}
              className="test_inputs_f"
              maxLength={11}
              onChange={answerPersonHandler}
              disabled={view}
            />
          </div>
          {!view ? (
            <div
              className="test_input_btn"
              onClick={answerPerson ? pressBtn : null}
            >
              сдать
            </div>
          ) : (
            <Link
              to={{
                pathname: "/tests/test/result",
                props: {
                  correct,
                  minutes: minutes.current,
                  seconds: seconds.current,
                  number: number.current,
                },
              }}
              className="test_input_btn"
              onClick={onPressLink}
            >
              закончить тест
            </Link>
          )}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Test;
