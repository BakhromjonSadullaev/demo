import React, { useEffect, useState } from "react";
import style from "./Feed.module.css";

const Feed = () => {
  let [update, setUpdate] = useState(false);
  let [lastValue, setLastValue] = useState("");
  let [inputValue, setInputValue] = useState("");
  let [list, setList] = useState([]);

  console.log(inputValue);

  function handlePost() {
    setList([...list, inputValue]);
    setInputValue("");
  }

  function handleDelete(e) {
    let item = e.currentTarget.id;

    let filteredList = list.filter((el) => el !== item);
    setList(filteredList);
  }

  function handleUpdate(e) {
    let item = e.currentTarget.id;
    setUpdate(true);
    setInputValue(item);
    setLastValue(item);
  }

  function handleUpdatePost() {
    let indexOfremove = list.indexOf(lastValue);
    let removedArr = list.slice(0, indexOfremove);
    removedArr.splice(indexOfremove, 0, inputValue);
    console.log(removedArr);
    setList(removedArr);
    setUpdate(false);
    setInputValue("");
  }

  console.log(list);

  return (
    <div className={style.feed}>
      <h1>Your feeds today !</h1>
      <input
        type="text"
        placeholder="share your thoughts"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      {update ? (
        <button onClick={() => handleUpdatePost()}>Update</button>
      ) : (
        <button onClick={handlePost}>Post</button>
      )}

      <ul>
        {list.map((item, index) => (
          <>
            <li key={index}>{item}</li>

            <button id={item} onClick={(e) => handleDelete(e)}>
              Delete
            </button>
            <button id={item} onClick={(e) => handleUpdate(e)}>
              Update
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
