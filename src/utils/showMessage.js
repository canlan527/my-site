import getComponentRootDom from './getComponentRootDom'
import Icons from '@/components/Icons'
import styles from './shwMessage.module.less'

/**
 * 弹出消息
 * @param {*} options 
 * options - {String} content 消息内容
 * options - {String} type 消息类型  info  error  success  warn
 * options - {Number} duration 多久后消失
 * options - {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function(options = {}) {
  const content = options.content || ''
  const type = options.type || 'info'
  const duration = options.duration || 1000
  const container = options.container || document.body

  // 创建消息元素 
  const div = document.createElement('div')
  const iconDOM = getComponentRootDom(Icons, { type })
  div.innerHTML = `<span class="${styles.icon}">${iconDOM.outerHTML}</span><div>${content}</div>`

  // 设置样式
  const typeClassName = styles[`message-${type}`] // 类型样式名
  div.className = `${styles.message} ${typeClassName}`;

  // 将div加到容器中
  if(getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  } 
  container.appendChild(div)

  // 浏览器强行渲染 导致reflow
  div.clientHeight;

  // 回到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  // 等待一段时间消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform =  `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener('transitionend', function(){
      div.remove()
      // 运行回调函数
      options.callback && options.callback();
    }, {once: true})
  }, duration);

}