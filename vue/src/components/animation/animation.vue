<template>
    <div class="body">
        <div class="wrapper">
            <div class="codepen-logo__wrapper" ref="el">
                <svg class="intro-lines" :view-box.camel="'0 0 132 132'">
                    <path d="M66.25 131.5c36.03 0 65.24-29.22 65.24-65.25M66.22 1C30.2 1 1 30.2 1 66.25" :stroke="color"
                        fill="none" />
                </svg>

                <div class="codepen-logo">
                    <!-- top -->
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * 0.1 - 4" :z="hd * -1 + hh - diff - 10" :ry="75">
                    </cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * 1.3 - 3" :ry="20"></cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * 0.9 - 2" :ry="133" :z="cd - 18.8"></cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * -1.5 - 2" :z="cd * -0.3 - 3.4" :ry="138"></cube>

                    <cube :color="color" :w="cw" :h="ch" :d="cd - 5" :x="hd * -0.8 + 3.4" :z="cd * 0.9 + 3.4" :ry="75">
                    </cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd - 4" :x="hd * -2 + 4" :z="cd * 0.5 - 7" :ry="20"></cube>
                    <!-- Y  :y="dis*0.3" -->
                    <cube :color="color" :w="cw" :h="ch" :d="cd * 0.6" :x="hd * 0.2 - 1" :ry="70" :z="cd * -0.01 + 5"
                        :y="dis * 0.3">
                    </cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd * 0.5" :x="hd * -0.5 + 1" :z="cd * -0.3 - 2" :y="dis * 0.3"
                        :ry="20">
                    </cube>

                    <cube :color="color" :w="cw" :h="ch" :d="cd * 0.65" :x="hd * -0.8 + 4" :ry="-45" :z="cd * 0.2 + 1"
                        :y="dis * 0.3">
                    </cube>
                    <!-- 立柱-->
                    <cube :color="color" :w="cw" :h="dis" :d="ch" :x="hd - hh + diff" :z="cd * -1 + ch"></cube>
                    <cube :color="color" :w="cw" :h="dis" :d="ch" :x="hd * 1.5 - 0.8" :z="cd * -0.01 + 1.9" :ry="-45">
                    </cube>
                    <cube :color="color" :w="cw" :h="dis" :d="ch" :x="hd * -1 + hh - 1.1" :z="cd * -1.1 - 2" :ry="45">
                    </cube>
                    <cube :color="color" :w="cw * 0.85" :h="dis" :d="ch * 0.85" :x="hd * -1.6 + 0.7" :z="cd * 0.4 - 0.31"
                        :ry="5">
                    </cube>
                    <cube :color="color" :w="cw" :h="dis" :d="ch" :x="hd * 0.1 + 0.2" :z="cd * 0.6 + 2.8" :ry="75"></cube>
                    <cube :color="color" :w="cw" :h="dis" :d="ch" :x="hd * -2.2" :z="cd * -0.5 + 7.4" :ry="20"></cube>
                    <!-- bottom-->
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * 0.1 - 4" :z="hd * -1 + hh - diff - 10" :ry="75"
                        :y="dis"></cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * 1.3 - 3" :ry="20" :y="dis"></cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * 0.9 - 2" :ry="133" :z="cd - 18.8" :y="dis"></cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd" :x="hd * -1.5 - 2" :z="cd * -0.3 - 2.4" :ry="138" :y="dis">
                    </cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd - 5" :x="hd * -0.8 + 3.4" :z="cd * 0.9 + 3.4" :ry="75"
                        :y="dis">
                    </cube>
                    <cube :color="color" :w="cw" :h="ch" :d="cd - 4" :x="hd * -2 + 4" :z="cd * 0.5 - 7" :ry="20" :y="dis">
                    </cube>
                </div>
            </div>
            <h1 class="anim-type" ref="letters">
                <span class="anim-type__letter">破</span>
                <span class="anim-type__letter">浪</span>
            </h1>
        </div>
    </div>
</template>
    
<script>
import { onMounted } from 'vue';
import cube from './cube.vue';
import { TimelineMax, Power1, gsap } from 'gsap';
import { useRouter } from 'vue-router';

export default {
    name: 'CodepenLogo',
    components: {
        cube,
    },
    props: {
        size: {
            type: Number,
            default: 8,
        },
        color: {
            type: String,
            default: '#1296db',
        },
        onAnimComplete: {
            type: Function,
            default: () => { },
        },
    },
    setup(props, { emit }) {
        const el = '.codepen-logo';
        const letters = document.getElementsByClassName('anim-type');
        const { size, onAnimComplete } = props;
        const cw = size, ch = size, cd = 10 * size;
        const hd = cd / 2, hh = ch / 2;
        const diff = 0.001, dis = ch * 5;
        const router = useRouter();
        onMounted(() => {
            const lines = document.querySelector('.intro-lines');
            const lpath = lines.querySelector('path').getTotalLength();
            const tl = new gsap.timeline({
                onComplete: () => onAnimComplete(),
            });

            tl.set(el, { transformOrigin: `${-hh}px ${dis / 2 - 15}px ${-hd}px` })
                .set(el, { scale: 0, rotationX: -110 })
                .set(lines, { strokeDasharray: lpath, strokeDashoffset: lpath, opacity: 1 })
                .to(el, 1, { scale: 1, ease: Power1.easeOut }, 0.1)
                .to(el, 2, { rotationX: -45, ease: Power1.easeOut }, 0.1)
                .to(el, 0.8, { rotationY: 37, rotationZ: -32, ease: Power1.easeOut }, 0.1)
                .to(lines, 1, { strokeDashoffset: lpath * -1, opacity: 0 }, 0.1);
            const lettersElements = letters[0].childNodes;
            gsap.fromTo(lettersElements[0], 1, {
                y: '100%',
                opacity: 0,
            }, {
                y: '0%',
                opacity: 1,
                delay: 2,
                ease: 'elastic.out(1, 0.4)',
                force3D: true,
            }, 0.05);
            gsap.fromTo(lettersElements[1], 1, {
                y: '100%',
                opacity: 0,
            }, {
                y: '0%',
                opacity: 1,
                delay: 2.1,
                ease: 'elastic.out(1, 0.4)',
                force3D: true,
            }, 0.05);

            setTimeout(() => {
                const el = document.getElementsByClassName("wrapper")
                const logo = document.querySelector('.codepen-logo__wrapper');
                const { top, left } = el[0].getBoundingClientRect();
                gsap.set(logo, {
                    transformOrigin: '50% 50% -40px' // 注意：需要添加单位，比如 'px'  
                });

                gsap.to(logo, {
                    duration: 0.8,
                    scale: 0.65,
                    rotateX: -15,
                    x: -70,
                    y: 10,
                    ease: 'expo.inOut',
                });
                gsap.to(logo, {
                    duration: 0.3,
                    rotateY: 2,
                    rotateZ: 3,
                    ease: 'none'
                });
                setTimeout(() => {
                    router.push('/index');
                }, 2600)
            }, 800)

        });

        // 确保在DOM挂载后访问元素  
        return {
            el, cw, ch, cd, hd, hh, diff, dis, letters,
        };
    },
};
</script>  
    
<style  scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(30, 26, 26);
}

.body {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: rgb(30, 26, 26);
}

.wrapper {
    position: relative;
    -webkit-box-reflect: below 0 linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4));
    padding-left: 6.8rem;
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
    perspective: 1000px;
    transform-style: preserve-3d;
}

.codepen-logo {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transform-style: preserve-3d;
}

.intro-lines {
    margin: auto;
    position: absolute;
    width: 10rem;
    height: 10rem;
    top: 1.5rem;
    bottom: 0;
    left: -6.2rem;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
}

.anim-type {
    color: #1296db;
    overflow: hidden;
    margin: 0;
    padding-top: 1rem;
}

.anim-type__letter {
    display: inline-block;
}
</style>