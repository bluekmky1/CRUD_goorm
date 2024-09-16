import React from "react";

function List({
  spendList,
  setSpendList,
  setSpendItemValue,
  setSpendAmountValue,
  editingItemId,
  setEditingItemId,
  handleShowToast,
}) {
  return (
    <div>
      {spendList.map((data) => (
        <ListItem
          spendList={spendList}
          setSpendList={setSpendList}
          spendData={data}
          editingItemId={editingItemId}
          setEditingItemId={setEditingItemId}
          setSpendItemValue={setSpendItemValue}
          setSpendAmountValue={setSpendAmountValue}
          handleShowToast={handleShowToast}
        />
      ))}
    </div>
  );
}

export default List;

function ListItem({
  spendData,
  spendList,
  setSpendList,
  editingItemId,
  setEditingItemId,
  setSpendItemValue,
  setSpendAmountValue,
  handleShowToast,
}) {
  const handleDelete = (id) => {
    if (id === editingItemId) {
      setEditingItemId("");
      setSpendItemValue("");
      setSpendAmountValue(0);
    }
    let newSpendList = spendList.filter((data) => data.id !== id);
    setSpendList(newSpendList);
    handleShowToast("아이템이 삭제되었습니다", "red");
  };

  const handleToggleEditListItem = (id) => {
    if (id === editingItemId) {
      setEditingItemId("");
      setSpendItemValue("");
      setSpendAmountValue(0);
      return;
    }
    setEditingItemId(id);
    setSpendItemValue(spendData.spendItem);
    setSpendAmountValue(spendData.spendAmount);
  };

  return (
    <div
      className={`flex border ${
        editingItemId === spendData.id ? "border-blue-400" : undefined
      } rounded-lg p-4 mb-4 items-center bg-white hover:scale-105 transition duration-500`}
    >
      <div className="flex-1 text-2xl font-semibold">{spendData.spendItem}</div>
      <div className="flex-1 text-2xl text-gray-600">
        {spendData.spendAmount}
      </div>
      <div className="flex">
        <button
          onClick={() => handleToggleEditListItem(spendData.id)}
          className="px-3 py-1 border border-green-500 rounded-md text-green-500 hover:text-white hover:bg-green-500 transition-colors"
        >
          {editingItemId === spendData.id ? "취소" : "수정"}
        </button>
        <div className="w-3" />
        <button
          onClick={() => handleDelete(spendData.id)}
          className="px-3 py-1 border border-red-500 rounded-md text-red-500 hover:text-white hover:bg-red-500 transition-colors"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
