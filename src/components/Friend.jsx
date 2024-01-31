import { Button } from "./Button";

export function Friend({ friend, onSelected, selectedFriend }) {
  const isSelect = selectedFriend?.id === friend.id;

  return (
    <li className={isSelect ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name} </h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}{" "}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even </p>}
      <Button onClick={() => onSelected(friend)}>
        {isSelect ? "Close" : "select"}
      </Button>
    </li>
  );
}
