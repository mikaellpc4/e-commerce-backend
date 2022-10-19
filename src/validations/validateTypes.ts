// Compare two objects and check if their types matches
const validateTypes = (recievedObject: any, validObject: any) => {
  if (typeof recievedObject !== typeof validObject) return false;
  let isValid = true;
  Object.keys(recievedObject).some((key) => {
    if (typeof recievedObject[key] !== typeof validObject[key]) {
      isValid = false;
      return true;
    }
    return null;
  });
  return isValid;
};

export default validateTypes;
