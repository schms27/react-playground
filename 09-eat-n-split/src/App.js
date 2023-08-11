import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
      </div>

      <Form friend={selectedFriend} />
    </div>
  );
}

function Form({ friend }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [youPay, setYouPay] = useState(true);
  if (!friend) return;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friend.name}</h2>
      <LabelledInput caption="🤑 Bill value">
        <input
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        ></input>
      </LabelledInput>
      <LabelledInput caption="👨‍💼 Your expense">
        <input
          value={yourExpense}
          onChange={(e) => setYourExpense(Number(e.target.value))}
        ></input>
      </LabelledInput>
      <LabelledInput caption={`👨‍💼 ${friend.name}'s expense`}>
        <input value={billValue - yourExpense} readOnly></input>
      </LabelledInput>
      <LabelledInput caption={`You pay`}>
        <input
          type="checkbox"
          value={youPay}
          onChange={(youPay) => setYouPay(!youPay)}
        ></input>
      </LabelledInput>
    </form>
  );
}

function LabelledInput({ caption, children }) {
  return (
    <div>
      <label>{caption}</label>
      {children}
    </div>
  );
}

function Sidebar({ friends, selectedFriend, onSelection }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectClicked={onSelection}
            isSelected={selectedFriend === friend}
          />
        ))}
      </ul>
      <button className="button">Add friend</button>
    </div>
  );
}

function Friend({ friend, onSelectClicked, isSelected }) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <b>{friend.name}</b>
        <p
          className={
            friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
          }
        >
          {friend.balance > 0
            ? `${friend.name} owes you ${friend.balance}$`
            : friend.balance < 0
            ? `You owe ${friend.name} ${friend.balance}$`
            : `You and ${friend.name} are even`}
        </p>
      </div>
      <button className="button" onClick={() => onSelectClicked(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default App;
