import Vue from 'vue'

/**
 * 获取某个组件渲染的根元素
 * @param {*} comp 组件名
 * @param {*} props 组件属性
 */
export default function getComponentRootDom(comp, props) { 
  const vm = new Vue({
    render: (h) => h(comp, { props })
  });
  vm.$mount(); // 执行挂载
  return vm.$el; // 返回根元素
}