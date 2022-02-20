import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // mapを使う場合、keyを忘れないようにすること
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了 </button>
              {/* 関数に引数を渡す場合、そのまま書くのではなく、アロー関数で記述すること */}
              {/* <button onClick={onClickDelete(index)}>削除 </button> */}
              <button onClick={() => onClickDelete(index)}>削除 </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
