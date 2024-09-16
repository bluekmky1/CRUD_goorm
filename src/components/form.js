import React from "react";

function Form({
  spendList,
  setSpendList,
  spendItemValue,
  setSpendItemValue,
  spendAmountValue,
  setSpendAmountValue,
  editingItemId,
  setEditingItemId,
  handleShowToast,
}) {
  const handleSpendItemValueChange = (e) => setSpendItemValue(e.target.value);
  const handleSpendAmountValueChange = (e) =>
    setSpendAmountValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (spendItemValue === "" || spendAmountValue === 0) {
      return;
    }

    let newSpendListItem = {
      id: Date.now(),
      spendItem: spendItemValue.trim(),
      spendAmount: parseInt(spendAmountValue),
    };

    setSpendList((prev) => [...prev, newSpendListItem]);
    setSpendItemValue("");
    setSpendAmountValue(0);
    handleShowToast("아이템이 생성되었습니다", "green");
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (spendItemValue === "" || spendAmountValue === 0) {
      return;
    }

    let newSpendList = spendList.map((data) => {
      if (editingItemId === data.id) {
        data.spendItem = spendItemValue.trim();
        data.spendAmount = parseInt(spendAmountValue);
      }
      return data;
    });

    setSpendList(newSpendList);
    setEditingItemId("");
    setSpendItemValue("");
    setSpendAmountValue(0);
    handleShowToast("아이템이 수정되었습니다", "green");
  };
  return (
    <div>
      <form onSubmit={editingItemId ? handleEditSave : handleSubmit}>
        <div className="flex justify-between">
          <div className=" w-full">
            <div className="text-xl text-blue-400 mb-3">지출항목</div>
            <input
              onChange={handleSpendItemValueChange}
              value={spendItemValue}
              className="text-xl font-semibold w-full px-3 py-4 mr-4 border rounded-lg outline-none focus:border-blue-400 transition-colors"
              placeholder="예) 렌트비"
            />
          </div>
          <div className="w-8" />
          <div className="w-full">
            <div className="text-xl  text-blue-400 mb-3">비용</div>
            <input
              onChange={handleSpendAmountValueChange}
              value={spendAmountValue}
              className="text-xl font-semibold w-full px-3 py-4 mr-4 border rounded-lg outline-none focus:border-blue-400 transition-colors"
              type="number"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-4 text-blue-400 border border-blue-300 hover:border-blue-200  hover:bg-blue-200  hover:text-white rounded-md mt-5 text-xl font-bold transition-colors"
        >
          {editingItemId ? "수정" : "추가"}
        </button>
      </form>

      <div className="border my-5 border-gray-300" />
    </div>
  );
}

export default Form;
