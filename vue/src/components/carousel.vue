<template>
    <div class="body">
        <div class="header">
            <div class="mid-spot"></div>
        
            <div class="spotlight">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        
          <div class="heroSubP">
            <p>欢迎进入</p>
          </div>
          <div class="hero">
            <div class="heroT">
              <h2>破浪</h2>
              <h2>破浪</h2>
            </div>
          </div>
          <p class="heroP">全国最大的数字个性化平台 <br>
            没有之一</p>
          <div class="mountains">
            <div></div>
            <div></div>
            <div></div>
          </div>
    </div>
</template>

<style scoped>

* {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
}

.body {
    margin: 0;
    background: #05060fc5 linear-gradient(0deg, rgba(216, 236, 248, .06), rgba(152, 192, 239, .06));
    height: 666px;
    max-height: 666px;
    overflow: hidden;
    position: relative;
}
h2,
p {
    margin: 0;
    padding: 0;
}

.header {
    display: flex;
    width: 100%;
    justify-content: center;
    color: #bad6f7;
    padding: 2em;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0;
    translate: 0 -1em;
    animation: load 1s ease-in 1s forwards, up 1.4s ease-out 1s forwards;

}
.header> :nth-child(1) {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
}
.header>div.mid-spot {
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    background: black;
    box-shadow: 0 0 1em 0 #98c0ef;
    cursor: pointer;
    transition: box-shadow 1s ease-in-out;
}

.header>div.mid-spot:hover {
    box-shadow: -0.3em 0.1em 0.2em 0 #d8bd10;
}

body.gold .header>div.mid-spot:hover {
    box-shadow: -0.3em 0.1em 0.2em 0 #98c0ef;
}

body.gold .header>div.mid-spot {
    box-shadow: 0 0 1em 0 #d8bd10;
}

.header > :nth-child(1):hover ~ .spotlight {
    animation: colorize 8s linear infinite;
}

@keyframes colorize {
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(-380deg);
    }
}
.header .spotlight {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    transition: filter 1s ease-in-out;

    height: 42em;
    width: 100%;
    overflow: hidden;
}

.header .spotlight>div {
    border-radius: 0 0 50% 50%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 3em;
    width: 30em;
    height: max(42em, 86vh);
    background-image: conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, .3) 49%, rgba(124, 145, 182, .5) 50%, rgba(124, 145, 182, .3) 51%, transparent 55%);
    transform-origin: 50% 0;
    filter: blur(15px) opacity(0.5);
    z-index: -1;
    animation: load 1s ease-in-out forwards, loadrot 1s ease-in-out forwards, spotlight 21s ease-in-out infinite reverse;
}

.header .spotlight>div:nth-child(1) {
    rotate: 20deg;
    animation: load 1s ease-in-out forwards, loadrot 1s ease-in-out forwards, spotlight 17s ease-in-out infinite;
}

.header .spotlight>div:nth-child(2) {
    rotate: -20deg;
    animation: load 1s ease-in-out forwards, loadrot 1s ease-in-out forwards, spotlight 14s ease-in-out infinite;
}

@keyframes loadrot {
    0% {
        rotate: 0deg;
        scale: 0;
    }

    100% {
        scale: 1;
    }
}

@keyframes spotlight {
    0% {
        transform: rotateZ(0deg) scale(1);
        filter: blur(15px) opacity(0.5);
    }

    20% {
        transform: rotateZ(-1deg) scale(1.2);
        filter: blur(16px) opacity(0.6);
    }

    40% {
        transform: rotateZ(2deg) scale(1.3);
        filter: blur(14px) opacity(0.4);
    }

    60% {
        transform: rotateZ(-2deg) scale(1.2);
        filter: blur(15px) opacity(0.6);
    }

    80% {
        transform: rotateZ(1deg) scale(1.1);
        filter: blur(13px) opacity(0.4);
    }

    100% {
        transform: rotateZ(0deg) scale(1);
        filter: blur(15px) opacity(0.5);
    }
}


p {
    font-size: 1.5em;
}

.hero {
    width: 100%;
    height: 100%;
    max-height: 140px;
    position: absolute;
    top: 16em;
}

.heroT {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20em;
    padding-top: 1em;
    translate: 0 -1.6em;
    opacity: 0;
    animation: load 1s ease-in-out 0.6s forwards;
}

@keyframes load {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.heroT>h2 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    font-size: 7em;
    font-weight: 600;
    color: #9dc3f7;
    background:
        radial-gradient(2em 2em at 50% 50%,
            transparent calc(var(--p) - 2em),
            #fff calc(var(--p) - 1em),
            #fff calc(var(--p) - 0.4em),
            transparent var(--p)),
        linear-gradient(0deg, #bad1f1 30%, #9dc3f7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 16px rgba(174, 207, 242, .24);
    --p: 0%;
    transition: --p 3s linear;
    animation: pulse 5s linear 1s infinite;
}
.heroT h2:nth-child(2) {
    background:
        radial-gradient(2em 2em at 50% 50%,
            transparent calc(var(--p) - 2em),
            transparent calc(var(--p) - 1em),
            #fff calc(var(--p) - 1em),
            #fff calc(var(--p) - 0.4em),
            transparent calc(var(--p) - 0.4em),
            transparent var(--p));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(16px) opacity(0.4);
}

@keyframes pulse {
    0% {
        --p: 0%;
    }

    50% {
        --p: 300%;
    }

    100% {
        --p: 300%;
    }
}

@property --p {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
}

.heroP {
    font-size: 1.2em;
    position: absolute;
    left: 0;
    right: 0;
    top: 20.6em;
    margin: auto;
    height: fit-content;
    width: fit-content;
    text-align: center;
    opacity: 0;
    translate: 0 1em;
    animation: load 1.5s ease-out 1s forwards, up 1s ease-out 1s forwards;
    color: #d8ecf8;
    text-shadow: 0 2px 16px rgba(174, 207, 242, .24);
    background: linear-gradient(0deg, #d8ecf8 0, #98c0ef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes up {
    100% {
        translate: 0;
    }
}

.heroSubP {
    position: absolute;
    left: 0;
    right: 0;
    top: 13em;
    margin: auto;
    height: fit-content;
    opacity: 0;
    translate: 0 -1em;
    animation: load3 1s ease-in 0s forwards, up 1.4s ease-out 0s forwards;
}

@keyframes load3 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 0.7;
    }
}

.heroSubP p {
    font-size: 1em;
    position: relative;
    width: fit-content;
    margin: auto;
    color: #d8ecf8;
    text-shadow: 0 2px 16px rgba(174, 207, 242, .24);
    background: linear-gradient(0deg, #d8ecf8 0, #98c0ef 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.heroSubP p::before,
.heroSubP p::after {
    position: absolute;
    top: 60%;
    display: block;
    content: '';
    width: 5em;
    height: 1px;
    opacity: 0;
    animation: load2 1s ease-in-out 0s forwards, up 1s ease-out 0s forwards;
}

@keyframes load2 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 0.3;
    }
}

.heroSubP p::before {
    background: linear-gradient(-90deg, #9dc3f7 0%, transparent 100%);
    right: 120%;
    translate: -5em 0;
}

.heroSubP p::after {
    background: linear-gradient(90deg, #9dc3f7 0%, transparent 100%);
    left: 120%;
    translate: 5em 0;
}

.mountains {
    position: absolute;
    left: 0;
    right: 0;
    top: 32em;
    margin: auto;
    width: 100%;
    height: 10em;
    pointer-events: none;
}

.mountains::before {
    content: '';
    display: block;
    width: 100%;
    height: 500%;
    position: absolute;
    top: 0%;
    background: linear-gradient(0deg, #191c2cc5 80%, transparent 90%);
    z-index: 2;
}

.mountains>div {
    box-shadow:
        -1em -0.2em 0.4em -1.1em #c2ccff,
        inset 0em 0em 0em 2px #c2ccff,
        inset 0.2em 0.3em 0.2em -0.2em #c2ccff,
        inset 10.2em 10.3em 2em -10em #d4e6ff2f;
    background: #121521;
    z-index: 1;
    filter: brightness(0.8);
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 20em;
    height: 20em;
    rotate: 45deg;
}

.mountains>div:nth-child(1) {
    bottom: -240%;
    translate: -6em 2em;
    animation: mountainload1 1s ease-out 1s forwards;
}

.mountains>div:nth-child(2) {
    bottom: -240%;
    translate: -2em 0em;
    width: 14em;
    height: 20em;
    animation: mountainload2 1s ease-out 1s forwards;
}

.mountains>div:nth-child(3) {
    bottom: -240%;
    translate: 7em 3em;
    animation: mountainload1 1s ease-out 1s forwards;
}

@keyframes mountainload1 {
    0% {
        bottom: -240%;
    }

    100% {
        bottom: -140%;
    }
}

@keyframes mountainload2 {
    0% {
        bottom: -240%;
    }

    100% {
        bottom: -108%;
    }
}

.mountains>div::before {
    content: '';
    display: block;
    background: repeating-radial-gradient(at 100% 100%, transparent 0%, #c2ccff22 2px, transparent 4px);
    width: 12em;
    height: 12em;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom-right-radius: 100%;
}
</style>