import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";
import ToastMessage from "./components/toast";

function App() {
  const [spendList, setSpendList] = useState([]);
  const [spendItemValue, setSpendItemValue] = useState("");
  const [spendAmountValue, setSpendAmountValue] = useState(0);
  const [editingItemId, setEditingItemId] = useState("");

  const [toast, setToast] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const handleShowToast = (message, color) => {
    setToastMessage(message);
    setToastColor(color);
    setToast({ message, color });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  const handleDeleteAll = () => {
    if (spendList.length !== 0) {
      handleShowToast("아이템이 모두 삭제되었습니다", "red");
    }
    setSpendList([]);
  };

  return (
    <div className="App bg-blue-300  w-screen h-screen p-10 relative">
      {toast && (
        <ToastMessage
          message={toastMessage}
          toastColor={toastColor}
          onClose={handleCloseToast}
        />
      )}
      <div className="text-5xl font-bold mb-10">예산 계산기</div>
      <div className="w-full bg-white p-12 rounded-xl">
        <Form
          spendList={spendList}
          setSpendList={setSpendList}
          spendItemValue={spendItemValue}
          setSpendItemValue={setSpendItemValue}
          spendAmountValue={spendAmountValue}
          setSpendAmountValue={setSpendAmountValue}
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
          handleShowToast={handleShowToast}
        />
        <List
          spendList={spendList}
          setSpendList={setSpendList}
          spendItemValue={spendItemValue}
          setSpendItemValue={setSpendItemValue}
          spendAmountValue={spendAmountValue}
          setSpendAmountValue={setSpendAmountValue}
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
          handleShowToast={handleShowToast}
        />
        {/* 전체 리스트 삭제 */}
        <button
          onClick={handleDeleteAll}
          className="w-60 py-4 text-blue-400 border border-blue-300 hover:border-blue-200  hover:bg-blue-200  hover:text-white rounded-md text-xl font-bold transition-colors"
        >
          전체 목록 지우기
        </button>
        {/* 총 지출 */}
        <div className="text-4xl font-bold mt-5">
          총 지출 :{" "}
          {spendList.reduce((acc, cur) => {
            return acc + parseInt(cur.spendAmount);
          }, 0)}
          원
        </div>
      </div>
    </div>
  );
}

export default App;
