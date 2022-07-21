//查询数组里面的某一项
export function handleSerachSomeOne<
  T, //extends { label: string; value: string },
  K extends T[keyof T]
>(array: T[], value: K, serachKey: keyof T, returnKey: keyof T) {
  const length = array.length;
  if (length < 1) return null;
  //找list的中位数 然后两端开始找
  const mid = Math.floor(length / 2);
  for (let index = 0; index <= mid; index++) {
    //小于中位数的item
    const beforeItem = array[index];
    //大于中位数的item
    const afterItem = array[mid + index];
    if (beforeItem[serachKey] === value) {
      return beforeItem[returnKey];
    }
    if (afterItem[serachKey] === value) {
      return afterItem[returnKey];
    }
  }
  return null;
}

//设置组件的事件
