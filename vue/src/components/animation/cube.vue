<template>
  <div ref="cubeElement" class="cube">
    <div class="cube__side cube__side--front"></div>
    <div class="cube__side cube__side--back"></div>
    <div class="cube__side cube__side--top"></div>
    <div class="cube__side cube__side--bottom"></div>
    <div class="cube__side cube__side--left"></div>
    <div class="cube__side cube__side--right"></div>
  </div>
</template>  
    
<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import tinycolor from 'tinycolor2';
export default {
  name: 'Cube',
  props: {
    x: { default: 0 },
    y: { default: 0 },
    z: { default: 0 },
    w: { default: 100 },
    h: { default: 100 },
    d: { default: 100 },
    rx: { default: 0 },
    ry: { default: 0 },
    rz: { default: 0 },
    sx: { default: 1 },
    sy: { default: 1 },
    sz: { default: 1 },
    color: { default: '#1296db' },
  },
  setup(props) {
    const cubeElement = ref(null);

    onMounted(() => {
      const qs = (s) => cubeElement.value.querySelector(`.cube__side--${s}`);
      const darker = tinycolor(props.color).darken(8);
      const [bg, to, h, w] = ['background', 'transformOrigin', 'height', 'width'];
      const [rx, ry, rz] = ['rotationX', 'rotationY', 'rotationZ'];
      const [sx, sy, sz] = ['scaleX', 'scaleY', 'scaleZ'];
      // 使用 TweenMax 设置动画和样式  
      gsap.set(cubeElement.value.querySelectorAll('.cube__side'), { background: darker.toString() });
      gsap.set(qs('back'), { z: props.d * -1 });
      gsap.set(qs('top'), { [to]: '50% 0', [bg]: props.color, [h]: props.d, [rx]: -90 });
      gsap.set(qs('right'), { [to]: '0 50%', [bg]: props.color, [w]: props.d, [ry]: 90, x: props.w });
      gsap.set(qs('bottom'), { [to]: '50% 0', [h]: props.d, [rx]: -90, y: props.h });
      gsap.set(qs('left'), { [to]: '0 50%', [w]: props.d, [ry]: 90 });

      const origin = `center center ${props.d / -2}px`;
      gsap.set(cubeElement.value, {
        [to]: origin, [h]: props.h, [w]: props.w,
        [sx]: props.sx, [sy]: props.sy,
        [rx]: props.rx, [ry]: props.ry, [rz]: props.rz,
        x: props.x, y: props.y, z: props.z
      });
    });

    return {
      cubeElement,
    };
  },
};
</script>  
<style  scoped>
.wrapper {
  position: relative;
  -webkit-box-reflect: below 0 linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4));
  padding-left: 6.5rem;
  padding-bottom: 2rem;
}

.cube {
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
}

.cube__side {
  position: absolute;
  width: 100%;
  height: 100%;
}

.codepen-logo__wrapper {
  perspective: 2000px;
  transform-style: preserve-3d;
}
</style>