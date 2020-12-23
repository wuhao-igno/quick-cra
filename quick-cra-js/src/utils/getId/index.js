/**
 * 生成唯一 id
 */
export const getUniqueId = () => {
  const array = new Uint32Array(4);
  window.crypto.getRandomValues(array);
  let uuid = "";
  array.forEach((num) => {
    uuid += num.toString(16).slice(0, 8);
  });
  return uuid;
};
