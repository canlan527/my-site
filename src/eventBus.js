// 事件总线
// let listeners = {}

// export default {
//   $on(eventName, handler) {
//     if(!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   $off(eventName, handler) {
//     if(!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   $emit(eventName, ...args) {
//     if(!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].forEach(fn => fn(...args));
//   }
// }

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的 dom 元素
 */
import Vue from 'vue';

Vue.prototype.$bus = new Vue({});

