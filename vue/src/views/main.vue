 <!-- 商城首页 -->
<template>
  <div class="login">
    <Header></Header>
    <Carousel></Carousel>

    <div class="nav">
      <div class="loader">
        <span>藏品列表</span>
        <span>藏品列表</span>
      </div>

      <button class="fairy" @click="fairy">
        <svg t="1712155926905" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="10946" width="36" height="36">
          <path
            d="M387.4 920.1c20.7 7.2 37.5 4.3 51.2-8.8 4.2-4 7.6-8.5 10.1-12.5l-90.3-42.6c0.5 22.4 5.3 55.7 29 63.9z m281-63.9L578 898.8c2.5 4 5.9 8.5 10.1 12.5 13.7 13.1 30.5 16 51.2 8.8 23.7-8.2 28.6-41.5 29.1-63.9zM513 660.6c-37.6 0-74.4-7-109.5-20.7-5.6 4-15.8 11.6-27.3 21.2l-0.1 0.1c-0.8 0.6-1.5 1.3-2.3 1.9-0.2 0.2-0.5 0.4-0.7 0.6l-2.1 1.8c-0.4 0.4-0.8 0.7-1.3 1.1-0.3 0.2-0.6 0.5-0.8 0.7-4 3.5-8 7.1-12 10.9-15.2 14.4-26.4 27.8-32.8 39.1-0.2 0.3-0.4 0.7-0.6 1-0.8 1.4-1.5 2.8-2.1 4.1-0.3 0.7-0.6 1.3-0.9 2-0.5 1.3-1 2.5-1.4 3.7-0.4 1.2-0.7 2.3-0.9 3.4-0.5 2.4-0.7 4.6-0.5 6.5 0 0.2 0 0.4 0.1 0.5 0 0.2 0 0.4 0.1 0.5 0.1 0.4 0.1 0.7 0.2 1.1 3.3 12 13.2 14.3 22.1 13.7h0.1c0.4-0.1 0.7-0.1 1.1-0.2 3-13.4 6.4-26.3 10.3-38.6 2.5-7.9 10.9-12.3 18.8-9.8s12.3 10.9 9.8 18.8c-4.8 15.4-8.9 31.9-12.4 49.4-0.2 0.8-0.3 1.7-0.5 2.5-0.3 1.4-0.5 2.8-0.8 4.3-0.2 0.9-0.3 1.7-0.5 2.6-0.3 1.4-0.5 2.8-0.7 4.2-0.2 0.9-0.3 1.9-0.5 2.9-0.2 1.4-0.5 2.8-0.7 4.2-0.2 1-0.3 2-0.5 3-0.2 1.4-0.4 2.7-0.6 4.1-0.2 1.1-0.3 2.2-0.5 3.4-0.2 1.3-0.4 2.6-0.5 3.9-0.2 1.3-0.3 2.6-0.5 3.9-0.2 1.2-0.3 2.4-0.5 3.6l-0.3 2.7c0 0.4-0.1 0.8-0.1 1.2h304.4c-4.2-35.1-10.8-67.2-19.7-95.6-2.5-7.9 1.9-16.3 9.8-18.8s16.3 1.9 18.8 9.8c3.8 12.3 7.3 25.2 10.3 38.7 9.2 0.9 19.9-1.1 23.4-13.6s-11.1-35.7-39-62.1c-18.4-17.4-37.8-31.9-46.3-38-35 13.3-71.8 20.3-109.4 20.3z m-0.3 103.3c-22.4 0-40.7-18.2-40.7-40.7s18.2-40.7 40.7-40.7c22.4 0 40.7 18.2 40.7 40.7s-18.3 40.7-40.7 40.7z"
            fill="#C1272D" p-id="10947"></path>
          <path d="M384 839.5C426.8 861 486.6 888 513 888c26.3 0 85.9-27 128.5-48.5H384z" fill="#FBB03B" p-id="10948">
          </path>
          <path d="M482.417 728.218a30.7 30.7 0 1 0 60.608-9.83 30.7 30.7 0 1 0-60.608 9.83z" fill="#FFFFFF" p-id="10949">
          </path>
          <path
            d="M512.7 682.6c-22.4 0-40.7 18.2-40.7 40.7s18.2 40.7 40.7 40.7c22.4 0 40.7-18.2 40.7-40.7s-18.3-40.7-40.7-40.7z m0 71.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z"
            p-id="10950"></path>
          <path
            d="M513 99.6c-152.2 0-276 116.3-276 259.3 0 101.8 60.4 192.7 147.1 239.2l-8.5-83.1-75.7-43.4c-1.8-1-3.2-2.6-4.1-4.5C280.6 434 272.6 399.7 272 365c-0.5-27.7 3.8-55.6 12.6-83 15-46.6 38-75.2 39-76.4 1.2-1.5 2.7-2.5 4.5-3.2l101.6-35c5-1.7 10.5 0.8 12.5 5.7l36.6 90.7H549l36.6-90.7c2-4.9 7.5-7.4 12.5-5.7l101.6 35c1.8 0.6 3.3 1.7 4.5 3.2 1 1.2 24 29.9 39 76.4 8.8 27.4 13.1 55.3 12.6 83-0.6 34.6-8.6 69-23.8 102.1-0.9 1.9-2.3 3.5-4.1 4.5L652.2 515l-8.4 82.1C729.4 550.3 789 460 789 358.8c0-142.9-123.8-259.2-276-259.2z"
            fill="#C1272D" p-id="10951"></path>
          <path
            d="M794.9 473.5c16-36.9 24.1-75.5 24.1-114.7 0-77.4-31.9-150.2-89.9-204.8C671.3 99.6 594.6 69.6 513 69.6s-158.3 30-216.1 84.4c-58 54.7-89.9 127.4-89.9 204.8 0 39.2 8.1 77.8 24.1 114.7 15.5 35.7 37.5 68.1 65.5 96.1 22.6 22.6 48 41.4 75.8 56-10.1 7.8-23.1 18.4-35.8 30.5-0.9 0.9-1.9 1.8-2.8 2.7-0.7 0.7-1.4 1.4-2.2 2.1l-0.7 0.7c-32.7 32.4-46.6 59.5-42.5 82.5 0 0.2 0.1 0.4 0.1 0.6 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.1 0.6 0.2 0.8 0.2 0.7 0.3 1.4 0.5 2 6.5 23.3 22.9 36.3 45 36.3h1.2c-0.1 0.7-0.2 1.5-0.4 2.2l-0.3 1.6c-0.1 0.3-0.1 0.7-0.2 1.1-0.1 0.9-0.3 1.8-0.4 2.7-0.1 0.9-0.3 1.7-0.4 2.6l-0.2 1.4c0 0.3-0.1 0.5-0.1 0.8-0.2 1-0.3 2.1-0.5 3.1-0.1 0.9-0.3 1.8-0.4 2.7l-0.2 1.2c0 0.2 0 0.3-0.1 0.5-0.2 1.2-0.3 2.4-0.5 3.7-0.1 1-0.3 1.9-0.4 2.9l-0.1 0.9v0.3c-0.1 0.5-0.1 0.9-0.2 1.4-0.2 1.9-0.5 3.9-0.7 5.9l-0.1 0.5v0.1c0 0.4-0.1 0.8-0.1 1.2-0.3 2.3-0.5 4.6-0.8 7 0 0.5-0.1 0.9-0.1 1.4v0.8c-0.1 0.3-0.1 0.5-0.2 0.8-0.5 3.9-12 96.5 48.1 117.5 10.6 3.7 20.8 5.5 30.6 5.5 11.1 0 21.7-2.4 31.6-7.2 21-10.2 33.2-28.9 39.1-40.3 13.6 4 25.8 6.5 35.4 6.5 9.3 0 20.9-2.4 33.8-6.2 5.9 11.5 18.1 29.9 38.9 40 9.9 4.8 20.4 7.2 31.6 7.2 9.8 0 20-1.8 30.6-5.5 55.2-19.2 49.1-118.6 48.9-120.5-1.5-15-3.5-29.6-5.9-43.8 5.3-0.4 10.3-1.6 14.9-3.5 0.6-0.2 1.2-0.5 1.8-0.7 0.4-0.1 0.7-0.3 1.1-0.4 0.3-0.1 0.7-0.3 1-0.5 0.6-0.3 1.3-0.6 1.9-0.9 0.1 0 0.2-0.1 0.3-0.1 10.7-5.5 18.4-14.6 22.5-26.9 0.3-1 0.7-2.1 1-3.1 7-25.1-8.5-55.2-47.3-91.9-12.7-12.1-25.7-22.7-35.8-30.5 27.8-14.6 53.2-33.4 75.8-56 28.4-28.2 50.4-60.5 65.9-96.3z m-87.1 266.6c-3.5 12.5-14.1 14.5-23.4 13.6-3-13.5-6.5-26.4-10.3-38.7-2.5-7.9-10.9-12.3-18.8-9.8s-12.3 10.9-9.8 18.8c8.9 28.4 15.5 60.5 19.7 95.6H360.8c0-0.4 0.1-0.8 0.1-1.2l0.3-2.7c0.1-1.2 0.3-2.4 0.5-3.6 0.2-1.3 0.3-2.6 0.5-3.9 0.2-1.3 0.4-2.6 0.5-3.9 0.2-1.1 0.3-2.3 0.5-3.4 0.2-1.4 0.4-2.7 0.6-4.1 0.2-1 0.3-2 0.5-3 0.2-1.4 0.5-2.8 0.7-4.2 0.2-1 0.3-1.9 0.5-2.9 0.2-1.4 0.5-2.8 0.7-4.2 0.2-0.9 0.3-1.7 0.5-2.6 0.3-1.4 0.5-2.8 0.8-4.3 0.2-0.8 0.3-1.7 0.5-2.5 3.5-17.5 7.6-34 12.4-49.4 2.5-7.9-1.9-16.3-9.8-18.8s-16.3 1.9-18.8 9.8c-3.8 12.3-7.3 25.1-10.3 38.6-0.4 0-0.8 0.1-1.1 0.2h-0.1c-8.9 0.6-18.8-1.7-22.1-13.7-0.1-0.4-0.2-0.7-0.2-1.1 0-0.2-0.1-0.3-0.1-0.5s-0.1-0.4-0.1-0.5c-0.2-1.9 0-4.1 0.5-6.5 0.2-1.1 0.5-2.2 0.9-3.4 0.4-1.2 0.9-2.4 1.4-3.7 0.3-0.6 0.6-1.3 0.9-2 0.6-1.3 1.3-2.7 2.1-4.1 0.2-0.3 0.4-0.7 0.6-1 6.5-11.3 17.7-24.7 32.8-39.1 4-3.8 8-7.4 12-10.9 0.3-0.2 0.6-0.5 0.8-0.7 0.4-0.4 0.8-0.7 1.3-1.1l2.1-1.8c0.2-0.2 0.5-0.4 0.7-0.6 0.8-0.7 1.5-1.3 2.3-1.9l0.1-0.1c11.5-9.6 21.7-17.2 27.3-21.2 35.1 13.8 71.8 20.7 109.5 20.7 37.6 0 74.4-7 109.5-20.8 8.5 6.1 27.9 20.6 46.3 38 27.8 26.9 42.4 50.1 38.9 62.6zM588.1 911.4c-4.2-4-7.6-8.5-10.1-12.5l90.3-42.6c-0.5 22.4-5.3 55.7-29 63.9-20.7 7.2-37.5 4.3-51.2-8.8z m-149.4 0c-13.7 13.1-30.5 16-51.2 8.8-23.7-8.3-28.6-41.5-29-63.9l90.3 42.6c-2.6 3.9-5.9 8.4-10.1 12.5zM395 507.8c-0.3-3.2-2.2-6-5-7.7l-77.3-44.4c-24.2-54.4-27.3-110.5-9.3-166.9 11.6-36.3 28.7-61.3 34.1-68.5l89.7-30.9 35.6 88.2c1.5 3.8 5.2 6.3 9.3 6.3h83.7c4.1 0 7.7-2.5 9.3-6.3l35.6-88.2 89.7 30.9c5.3 7.3 22.5 32.3 34.1 68.5 18 56.4 14.9 112.6-9.3 166.9l-77.3 44.4c-2.8 1.6-4.6 4.4-5 7.7L622.4 609c-15 6.4-62.2 24.3-119.7 23.8-30.4-0.3-80.6-17.9-97.4-24.2L395 507.8zM513.1 888c-26.4 0-86.3-27-129.1-48.5h257.5C599 861 539.4 888 513.1 888z m130.6-291l8.4-82.1 75.7-43.4c1.8-1 3.2-2.6 4.1-4.5 15.2-33.1 23.2-67.4 23.8-102.1 0.5-27.7-3.8-55.6-12.6-83-15-46.6-38-75.2-39-76.4-1.2-1.5-2.7-2.5-4.5-3.2l-101.6-35c-5-1.7-10.5 0.8-12.5 5.7L549 263.8h-70.2l-36.6-90.7c-2-4.9-7.5-7.5-12.5-5.7l-101.6 35c-1.8 0.6-3.3 1.7-4.5 3.2-1 1.2-24 29.9-39 76.4-8.8 27.4-13.1 55.3-12.6 83 0.6 34.6 8.6 69 23.8 102.1 0.9 1.9 2.3 3.5 4.1 4.5l75.7 43.4 8.5 83.1C297.4 551.6 237 460.7 237 358.8c0-143 123.8-259.3 276-259.3s276 116.3 276 259.3C789 460 729.4 550.3 643.7 597z"
            p-id="10952"></path>
          <path
            d="M502.7 632.8c57.5 0.5 104.7-17.4 119.7-23.8l10.4-101.3c0.3-3.2 2.2-6 5-7.7l77.3-44.4c24.2-54.4 27.3-110.5 9.3-166.9-11.6-36.3-28.7-61.3-34.1-68.5l-89.7-30.9-35.6 88.2c-1.5 3.8-5.2 6.3-9.3 6.3H472c-4.1 0-7.7-2.5-9.3-6.3l-35.6-88.2-89.7 30.9c-5.3 7.3-22.5 32.3-34.1 68.5-18 56.4-14.9 112.6 9.3 166.9l77.3 44.4c2.8 1.6 4.6 4.4 5 7.7l10.4 100.9c16.8 6.3 67 23.9 97.4 24.2z m208.1-300.2l3 9.6c6.5 21 4.4 43.2-5.8 62.7s-27.4 33.7-48.4 40.2c-8 2.5-16.3 3.7-24.4 3.7-13.2 0-26.2-3.2-38.2-9.5-19.4-10.2-33.7-27.4-40.2-48.4l-3-9.6 157-48.7zM392.6 448.8c-8.2 0-16.4-1.2-24.4-3.7-21-6.5-38.2-20.8-48.4-40.2-10.2-19.4-12.3-41.7-5.8-62.7l3-9.6 157 48.7-3 9.6c-6.5 21-20.8 38.2-40.2 48.4-12 6.3-25 9.5-38.2 9.5z"
            fill="#FBB03B" p-id="10953"></path>
          <path
            d="M448.2 394.3l-117.4-36.4c-1.8 12.9 0.4 25.9 6.6 37.6 7.7 14.7 20.8 25.5 36.6 30.4 15.9 4.9 32.7 3.4 47.4-4.4 11.8-6.1 21.1-15.6 26.8-27.2z"
            fill="#FFFFFF" p-id="10954"></path>
          <path
            d="M471 390.9l3-9.6-157.1-48.7-3 9.6c-6.5 21-4.4 43.2 5.8 62.7 10.2 19.4 27.4 33.7 48.4 40.2 8 2.5 16.3 3.7 24.4 3.7 13.2 0 26.2-3.2 38.2-9.5 19.6-10.3 33.8-27.5 40.3-48.4zM374.1 426c-15.9-4.9-28.9-15.7-36.6-30.4-6.2-11.7-8.4-24.8-6.6-37.6l117.4 36.4c-5.8 11.6-15 21.2-26.7 27.3-14.8 7.6-31.7 9.2-47.5 4.3z"
            p-id="10955"></path>
          <path
            d="M606.2 421.6c14.7 7.7 31.6 9.3 47.4 4.4 15.9-4.9 28.9-15.7 36.6-30.4 6.2-11.7 8.4-24.8 6.6-37.6l-117.4 36.4c5.9 11.5 15.1 21 26.8 27.2z"
            fill="#FFFFFF" p-id="10956"></path>
          <path
            d="M596.9 439.3c12 6.3 25.1 9.5 38.2 9.5 8.2 0 16.4-1.2 24.4-3.7 21-6.5 38.2-20.8 48.4-40.2s12.3-41.7 5.8-62.7l-3-9.6-157.1 48.7 3 9.6c6.6 20.9 20.9 38.1 40.3 48.4z m100-81.4c1.8 12.9-0.4 25.9-6.6 37.6-7.7 14.7-20.8 25.5-36.6 30.4-15.9 4.9-32.7 3.4-47.4-4.4-11.7-6.2-21-15.7-26.7-27.3l117.3-36.3z"
            p-id="10957"></path>
        </svg>
        <span class="now">now!</span>
        <span class="play">More</span>
      </button>
    </div>

    <div>
      <div class="placeholder"></div>
      <div class="goodList">
        <Goods v-for="item in goodsList" :data="item"></Goods>
      </div>
    </div>

    <el-affix position="bottom" :offset="100">
      <div class="scrolldown" style="--color: #0288ff" @click="toTop">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
    </el-affix>

    <div class="next">
      <button class="Documents-btn" @click="allCard">
        <span class="folderContainer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 146 113" height="113" width="146"
            class="fileBack">
            <path fill="url(#paint0_linear_117_4)"
              d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z">
            </path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" y2="95.4804" x2="72.93" y1="0" x1="0"
                id="paint0_linear_117_4">
                <stop stop-color="#8ed2f6"></stop>
                <stop stop-color="#1296db" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 88 99" height="99" width="88" class="filePage">
            <rect fill="url(#paint0_linear_117_6)" height="99" width="88"></rect>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" y2="160.5" x2="81" y1="0" x1="0" id="paint0_linear_117_6">
                <stop stop-color="white"></stop>
                <stop stop-color="#686868" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 79" height="79" width="160"
            class="fileFront">
            <path fill="url(#paint0_linear_117_5)"
              d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z">
            </path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" y2="82.8317" x2="66.9106" y1="8.71323" x1="38.7619"
                id="paint0_linear_117_5">
                <stop stop-color="#8ed2f6"></stop>
                <stop stop-color="#1296db" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <p class="text">全部藏品 →</p>
      </button>


    </div>

  </div>
</template>
  

<script>

export default {
  data() {
    return {
      imageSrc: '',
      goodsList: [],
    }
  },
  mounted() {
    window.scroll(0, 0);
    api.getCardList().then(result => {
      let res = result.data
      this.goodsList = res.map(item => ({ ...item }));
      const placeholder = document.querySelector('.placeholder');
      placeholder.classList.remove('placeholder'); // 移除占位符样式类
    }).catch(error => {
      console.log(error)
    })

  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    allCard() {
      this.$router.push('./allCard')
    },
    fairy() {
      this.$router.push('./allCard')
    }

  }
}
</script>

<script setup>
import Header from "@/components/Header.vue"
import Goods from "@/components/goods.vue"
import Carousel from "@/components/carousel.vue"
import api from '@/api/card.js'



</script>

<style scoped>
.nav {
  position: relative;
  width: 79%;
  max-width: 1200px;
  height: 50px;
  margin: 1rem auto;
}

.loader {
  position: relative;
}

.loader span {
  position: absolute;
  color: #fff;
  transform: translate(-50%, -50%);
  font-size: 30px;
  letter-spacing: 5px;
  top: 1.5rem;
  left: 2rem;
}

.loader span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 0.3px rgb(253, 253, 253);
}

.loader span:nth-child(2) {
  color: rgb(128, 198, 255);
  -webkit-text-stroke: 1px rgb(51, 161, 251);
  animation: uiverse723 3s ease-in-out infinite;
}

@keyframes uiverse723 {

  0%,
  100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%,
        54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%,
        51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
}

.fairy {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -2.5rem;
  margin-top: 7px;
  padding: 0 8px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border: solid 1px black;
  font-weight: 600;
  font-size: 17px;
  background-color: #80c6ff;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.5s ease;
}

.fairy:active {
  transform: scale(0.9);
  transition: all 100ms ease;
}

.fairy svg {
  transition: all 0.5s ease;
  z-index: 2;
}

.play {
  transition: all 0.5s ease;
  transition-delay: 300ms;
}

.fairy:hover svg {
  transform: scale(3) translate(50%);
}

.now {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  z-index: 2;
}

.fairy:hover .now {
  transform: translateX(10px);
  transition-delay: 300ms;
}

.fairy:hover .play {
  transform: translateX(200%);
  transition-delay: 300ms;
}

.next {
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  margin: 10px 10px;
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto 0px;
  display: flex;
  justify-content: center;
}

.Documents-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  height: 45px;
  border: none;
  padding: 0px 15px;
  border-radius: 5px;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.folderContainer {
  width: 40px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.fileBack {
  z-index: 1;
  width: 80%;
  height: auto;
}

.filePage {
  width: 50%;
  height: auto;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease-out;
}

.fileFront {
  width: 85%;
  height: auto;
  position: absolute;
  z-index: 3;
  opacity: 0.95;
  transform-origin: bottom;
  transition: all 0.3s ease-out;
}

.text {
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.Documents-btn:hover .filePage {
  transform: translateY(-5px);
}

.Documents-btn:hover {
  background-color: rgb(58, 58, 94);
}

.Documents-btn:hover .fileFront {
  transform: rotateX(30deg);
}
</style>

<style  lang="scss" scoped>
.scrolldown {
  position: absolute;
  right: 2rem;
  transform: rotate(180deg);
  --color: white;
  --sizeX: 30px;
  --sizeY: 50px;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    display: none;
  }
}

.scrolldown::before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #2a547066;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }

  100% {
    height: 3px;
    opacity: 0;
  }
}

.chevrons {
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}

.placeholder {
  height: 200vh;
}

.goodList {
  max-width: 1325px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 1rem;
  justify-content: space-evenly;

  @media only screen and (min-width: 1000px) and (max-width: 1228px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 100px) and (max-width: 999px) {
    grid-template-columns: auto;
  }

}

:deep(.el-affix--fixed) {
  width: 100% !important;
}

.login {
  background: url('../assets/picture/123.png') no-repeat fixed center;
  background-size: cover;
  min-height: 100vh;
}
</style>