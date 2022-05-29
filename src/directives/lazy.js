// 图片懒加载
import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/images/default.gif";

let imgs = [];

function setImages() {
  for (const img of imgs) {
    setSingerImg(img);
  }
}

function setSingerImg(img) {
  const imgHeight = 150;
  const clientHeight = document.documentElement.clientHeight;
  img.dom.src = defaultGif;
  const rect = img.dom.getBoundingClientRect();
  // console.log(rect)
  // 在视口范围内
  if (rect.top >= -imgHeight && rect.top <= clientHeight) {
    const tempImg = new Image();
    tempImg.onload = function() {
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    // console.log("加载真实图片", img.dom);
    // 过滤，已加入过的都从数组里删除
    imgs = imgs.filter((it) => it !== img);
  }
}

function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    };
    imgs.push(img);
    setSingerImg(img);//立即处理一次图片
  },
  unbind(el) {
    imgs = imgs.filter((it) => it.dom != el);
  },
};
