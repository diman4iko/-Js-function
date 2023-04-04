// BEGIN
export default function getAllFriends(users) {
    return users.flatMap(user => user.friends.filter(friend => friend.gender === 'female'));
  }
// END