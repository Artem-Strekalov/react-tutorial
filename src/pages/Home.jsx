import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/actionsActions";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="content">
      <header className="content__header">
        <input className="content__input" type="text" />
        <button className="content__btn">Add task</button>
        <button className="content__btn" onClick={() => dispatch(fetchData())}>
          Get data
        </button>
      </header>
      <main className="content__main">
        <header className="content__main-header"></header>
      </main>
    </div>
  );
};
export default Home;
