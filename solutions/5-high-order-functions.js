import _ from 'lodash';

// BEGIN
const takeOldest = (users, count = 1) => {
    const oldestUsers = users.sort((a, b) => {
      const dateA = new Date(a.birthday);
      const dateB = new Date(b.birthday);
      return dateA - dateB;
    });
    return oldestUsers.slice(0, count);
  };
  
  export default takeOldest;
// END