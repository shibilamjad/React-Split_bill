import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUSer, setPaidByUser] = useState("");
  const [whoPayingBill, setWhoPayingBill] = useState("user");

  const paidFriend = bill ? bill - paidByUSer : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUSer) return;

    onSplitBill(whoPayingBill === "user" ? paidFriend : -paidByUSer);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>🍟 Bill value</label>
      <input
        typeof="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>👨 Your Expenses</label>
      <input
        typeof="text"
        value={paidByUSer}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUSer : Number(e.target.value)
          )
        }
      />

      <label>👱‍♂️{selectedFriend.name} expenses</label>
      <input typeof="text" value={paidFriend} disabled />

      <label>🍔 who is paying money</label>
      <select
        value={whoPayingBill}
        onChange={(e) => setWhoPayingBill(e.target.value)}
      >
        <option value="user">You</option>
        <option value="Friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
