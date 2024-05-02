export const filter = <T>(arr: T[], callback: (val: T, idx?: number) => boolean
): T[] => {
  let result: T[] = [];
  for(let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if(callback(value,i)){
      result=[...result, value];
    }
  }
}