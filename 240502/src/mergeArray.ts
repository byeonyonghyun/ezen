// 중첩 배열 사용시 타입정의
//a = [], b = [] / c = [a, b] / c = [...a, ...b]

export const mergeArray = <T>(...arrays: T[][]): T[] => {
  let result: T[] = []
  for(let i = 0; i < arrays.length; i++) {
    const array: T[] = arrays[i];
    result = [...result, ...array];
  }
  return result;
};