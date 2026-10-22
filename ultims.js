export function isString(data){
  return typeof data === 'string';
}
export function isNumber(data){
  return typeof data === 'number';
}
export function isNotEmpty(data){
   return (
    data !== undefined ||
    data !== null ||
    JSON.stringify(data) !=='{}' ||
    data !== ''
   );
}
export function isEmpty(data){
  return (
  data === undefined ||
  data === null ||
  JSON.stringify(data) ==='{}' ||
  data === ''
  );
}