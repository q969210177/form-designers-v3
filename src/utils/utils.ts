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
// 查询符合条件的list;
export function handleSerachArr<T, K = T[keyof T]>(
  array: any,
  value: any,
  serachKey: any
) {
  const length = array.length;
  const returnArr: T[] = [];
  if (length < 1) return returnArr;
  // 找list的中位数 然后两端开始找
  const mid = Math.floor(length / 2);
  for (let index = 0; index < mid; index++) {
    //小于中位数的item
    const beforeItem = array[index];
    //大于中位数的item
    const afterItem = array[mid + index];
    // console.log(mid + index, "afterItem", index, "beforeItem");
    if (beforeItem[serachKey].includes(value)) {
      returnArr.push(beforeItem);
    }
    if (afterItem && afterItem[serachKey].includes(value)) {
      returnArr.push(afterItem);
    }
  }
  return returnArr;
}

//滚动防抖
export function debounce<T = any>(fn: (params: T) => void, wait = 1000) {
  let timeout: number | null = null;
  // eslint-disable-next-line prefer-rest-params
  // const arg = arguments;
  // console.log(arg, "arg");

  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}

export function throttle<T = any>(
  this: T,
  // eslint-disable-next-line @typescript-eslint/ban-types
  func: Function,
  time: number,
  immediate = false
) {
  if (immediate) {
    let prevTime = 0;
    return (...args: any) => {
      const nowTime = Date.now();
      if (nowTime - prevTime >= time) {
        func.apply(this, args);
        prevTime = nowTime;
      }
    };
  } else {
    let timer: number | null = null;
    return (...args: any) => {
      if (!timer) {
        func.apply(this, args);
        timer = window.setTimeout(() => {
          if (timer) clearInterval(timer);
          timer = null;
        }, time);
      }
    };
  }
}
