import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actionsActions";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.data.tasks);

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
        <section className="content__main-section">
          <ul>
            {tasks
              ? tasks.map((task, i) => {
                  return (
                    <div key={task.id}>
                      {" "}
                      <span>{task.id}</span> <span>{task.title}</span>
                    </div>
                  );
                })
              : ""}
          </ul>
        </section>
      </main>
    </div>
  );
};
export default Home;
