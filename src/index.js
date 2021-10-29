import "./styles.css";

const onClickAdd = () => {
  // テキスト取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
