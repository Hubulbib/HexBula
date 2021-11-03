import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { Context } from "../../Context";
import "./tests.css";

const Tests = () => {
  const {
    test: { dispacth1 },
  } = useContext(Context);

  function onPressLink() {
    dispacth1({ type: "true" });
  }

  return (
    <div className="tests">
      <div className="container">
        <div className="test_div1">
          <Link
            to={{ pathname: "/tests/test", props: { number: 1 } }}
            className="test_item"
            onClick={onPressLink}
          >
            <h1 className="test_number">ТЕСТ №1</h1>
            <h1 className="test_name">Перевод из n'10 в n'2</h1>
            <h1 className="test_many">30 примеров</h1>
          </Link>
          <Link
            to={{ pathname: "/tests/test", props: { number: 2 } }}
            className="test_item"
            onClick={onPressLink}
          >
            <h1 className="test_number">ТЕСТ №2</h1>
            <h1 className="test_name">Перевод из n'2 n'10</h1>
            <h1 className="test_many">30 примеров</h1>
          </Link>
          <Link
            to={{ pathname: "/tests/test", props: { number: 3 } }}
            className="test_item"
            onClick={onPressLink}
          >
            <h1 className="test_number">ТЕСТ №3</h1>
            <h1 className="test_name">Перевод из n'10 в n'16</h1>
            <h1 className="test_many">30 примеров</h1>
          </Link>
        </div>
        <div className="test_div2">
          <Link
            to={{ pathname: "/tests/test", props: { number: 4 } }}
            className="test_item"
            onClick={onPressLink}
          >
            <h1 className="test_number">ТЕСТ №4</h1>
            <h1 className="test_name">Перевод из n'10 в n'8</h1>
            <h1 className="test_many">30 примеров</h1>
          </Link>
          <Link
            to={{ pathname: "/tests/test", props: { number: 5 } }}
            className="test_item"
            onClick={onPressLink}
          >
            <h1 className="test_number">ТЕСТ №5</h1>
            <h1 className="test_name">Перевод из n'2 в n'8</h1>
            <h1 className="test_many">30 примеров</h1>
          </Link>
          <Link
            to={{ pathname: "/tests/test", props: { number: 6 } }}
            className="test_item"
            onClick={onPressLink}
          >
            <h1 className="test_number">ТЕСТ №6</h1>
            <h1 className="test_name">Перевод из n'2 в n'16</h1>
            <h1 className="test_many">30 примеров</h1>
          </Link>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Tests;
