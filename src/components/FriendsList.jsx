import { Friend } from "./Friend";

export function FriendsList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
