export default function groupBy(arr, propertyName) {
    return arr.reduce((acc, obj) => {
      const key = obj[propertyName];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }