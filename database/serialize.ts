/* eslint-disable import/prefer-default-export */

export const serializeArray = (array: Array<any>) => array.map((doc) => {
  const { createdAt, updatedAt, ...obj } = doc.toObject();

  obj._id = obj._id.toString();
  return obj;
});
