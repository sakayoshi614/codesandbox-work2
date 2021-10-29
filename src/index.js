import "./styles.css";

const onClickAdd = () => {
  // テキスト取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リスト作成
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了から削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了に追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    // li作成
    const completeLi = document.createElement("li");
    completeLi.innerText = text;

    // 戻すボタン
    const undoButton = document.createElement("Button");
    undoButton.innerText = "戻す";
    undoButton.addEventListener("click", () => {
      // 完了から削除
      const undoTarget = undoButton.parentNode;
      document.getElementById("complete-list").removeChild(undoTarget);

      const text = undoTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(completeLi);
    addTarget.appendChild(undoButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // divを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divに各要素設定f
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
