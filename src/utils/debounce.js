// 传递一个函数 ，进行防抖
export default function(fn, delay = 100) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() =>{
      fn(...args);
    }, delay);
  }
}