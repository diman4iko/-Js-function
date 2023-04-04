// BEGIN
export default function getChildren(users) {
    return users.reduce((children, user) => {
      if (user.children) {
        children.push(...user.children);
      }
      return children;
    }, []);
  }
// END