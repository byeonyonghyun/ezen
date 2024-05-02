export const fold = <T>(arr: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result = initValue;
  for(let i = 0; arr.length; i++) {
    const value = arr[i];
    result = callback(result, value);
  }
  return result;
}