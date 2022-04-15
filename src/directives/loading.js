import loadingUrl from '@/assets/images/loading.svg';
import style from './loading.module.less';

function createImgEl() {
  const img = document.createElement('img');
  img.src = loadingUrl;
  img.dataset.role = 'loading';
  img.className = style.loading;
  return img;
}

function getImgEl(el) {
  return el.querySelector('img[data-role=loading]');
}

// loading 指令配置
// 根据 loading dom 中 binding.value 的值，删除或者创建 img 元素
export default function (el, binding) {
  const curImg = getImgEl(el);
  if(binding.value) { // loading 值为 true
    // 创建 img dom， 插入到 el中
    if(!curImg) {
      const img = createImgEl();
      el.appendChild(img);
    }
  } else {  // loading 值为 false
    curImg && curImg.remove();
  }
}