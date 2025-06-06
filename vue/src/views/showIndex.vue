 <!-- 进入平台初始页面 -->
<template>
    <Header></Header>
    <div class="content">
        <!-- <div class="loading" style="color: #3ba6df;margin-top:5rem">
            <svg t="1712843289440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="19113" width="100" height="100">
                <path
                    d="M609.4 927.3c-7.1 0-13.8-2.8-19-8l-22.6-22.6c-6.4-6.4-9.2-14.9-7.8-23.3l42.1-248.8c1.6-11.3 10.8-20.6 22.2-22.2L873 560.3c1.4-0.2 2.9-0.4 4.3-0.4 7.5 0 14.7 3.2 19.4 8.6l22.2 22.2c6.4 6.4 9.2 14.8 7.8 23.3-1.4 8.5-7.1 16.2-14.7 20l-186.2 92.2L633 912.4c-4.1 8.2-11.3 13.5-20.3 14.8l-1 0.1h-2.3z m0.8-77.9l71.2-155.5c2.7-5.3 6.8-9.5 12.1-12.1l155.9-72.6-197.3 43.3-41.9 196.9z"
                    p-id="19114" fill="#3ba6df"></path>
                <path
                    d="M610.6 730.7c-4.9-0.3-8.7-1.8-11.7-3.4l-0.4-0.2-0.4-0.2c-4.9-2.8-9.7-6.5-14.1-10.9L173.6 341.4c-38.2-35.5-64-81.4-74.7-132.7-6.7-30.6 2.8-62.4 25.3-84.9 17.7-17.7 40.9-27.4 65.4-27.4 6.5 0 13.1 0.7 19.6 2.1h0.1c51.1 11.4 96.8 37.5 131.9 75.3L715.8 585c3.4 3.5 6 7.2 8.8 11.1l1.4 2 0.1 0.2c5.3 7.9 5.8 17.8 1.5 26.4-3.7 7.4-10.1 12.6-18.4 15l-0.7 0.2-59.9 10.3-10.2 59c-1.4 9.3-7.1 16.6-16.1 20.4l-9 3.9-2.7-2.8z m-17-78.7l5-29.6c1.6-11.3 10.8-20.6 22.2-22.2l29.7-5-348.8-384.7c-28.4-30.2-64.4-50.4-104-58.5-3.2-0.5-6.1-1-8.7-1-9.9 0-19.5 4.1-26.9 11.5l-0.3 0.3c-9.3 8.8-13.1 21.9-10.3 34.9v0.2c8.1 39.7 28.3 75.7 58.6 104.2L593.6 652z"
                    p-id="19115" fill="#3ba6df"></path>
                <path
                    d="M245 865.3c-7.1 0-13.8-2.8-19-8l-42.8-42.8c-6.9-6.9-9.5-16.4-6.9-25.2L259.9 404l0.1-0.4c2.6-9.1 9.3-16.4 17.5-19.2l0.3-0.1 0.3-0.1c2.7-0.8 5.4-1.2 8.1-1.2 6.5 0 12.6 2.2 17.6 6.5l0.2 0.2 126.5 115.2c9 7.9 11.4 21.2 5.8 32.3l-0.2 0.3-167.2 313c-2.5 5-7.5 11-17.2 13.3-1.8 1.1-4.2 1.5-6.7 1.5z m-6.7-72.3l139.6-262.2-75.7-69.2-70.4 325 6.5 6.4z m286.5-354c-7.8 0-15.4-3.5-20.3-9.4L389.9 304.3c-6.4-6.6-8.7-16.7-5.9-26.5 2.7-9.6 10.8-16.8 20.7-18.4l385-83.7 0.5-0.1c1.4-0.2 2.9-0.3 4.3-0.3 7.5 0 14.5 2.7 19.3 7.5l42.8 42.8c6.1 6.1 9.1 15.2 7.8 23.3-1.3 7.9-6.3 15.4-13.1 19.4l-0.3 0.2-313.9 167.6-0.2 0.1c-3.3 1.7-8.1 2.8-12.1 2.8z m5.7-60.1l262.2-139.6-6.4-6.4-325 69.8 69.2 76.2z"
                    p-id="19116" fill="#3ba6df"></path>
                <path
                    d="M236.2 664.1c-7.1 0-13.8-2.8-19-8L143 581.9c-10.7-10.7-10.7-27.4 0-38l42.8-42.8c5.1-5.1 12.1-8 19.2-8 7.3 0 14.2 3 19 8.3l46.9 46.9c6.9 6.8 9.5 16.4 6.9 25.2l-15.1 69.7-0.1 0.5c-2.6 9.1-9.2 16.2-17.6 19-3.7 1.4-7.1 1.4-8.8 1.4z m-12.7-64.8l8.4-19.1-32.7-32.7-13.7 13.9 38 37.9zM567 278.6c-7.1 0-13.8-2.8-19-8l-47.2-47.2c-5.2-5.2-8-11.9-8-19s2.8-13.8 8-19l42.8-42.8c5.2-5.2 11.9-8 19-8s13.8 2.8 19 8l74.3 74.9c6.8 6.8 9.5 17.3 6.8 26.7-2.6 9-9.8 16-19.3 18.7l-0.5 0.1-71.9 15.6h-4z m13.4-45.1l19.8-8.4-40.4-40.4-14.2 14 34.8 34.8z"
                    p-id="19117" fill="#3ba6df"></path>
            </svg>
            加载中...
        </div> -->
        <div class="trigger"></div>
        <div class="section">
            <h1>破浪</h1>
            <h3>——数字个性化平台</h3>
            <p>引领数字时代的个性化浪潮</p>
            <div class="scroll-cta">下滑↓</div>
        </div>

        <div class="section right">
            <h2>与破浪同行，开启你的个性化数字之旅！</h2>
            <div style=" width: 330px;height: 370px;position: absolute;bottom: 3rem; left: 1rem;">
                <div class="card-border">
                    <div class="card-bg">
                        <div class="container-logo">
                            <div class="logo"></div>
                            <div class="logo-inside">
                                <div class="first"></div>
                            </div>
                        </div>
                        <div id="blur-area"></div>
                        <div class="marquee">
                            <div class="marquee__inner" aria-hidden="true">
                                <span class="viper">破浪</span>
                                <span class="viper">Join US</span>
                                <span class="viper">破浪</span>
                            </div>
                        </div>

                    </div>
                    <div class="mist-container">
                        <div class="mist"></div>
                    </div>
                    <!-- <div id="text-ext">就现在</div>
                    <strong id="text-border">加入我们</strong> -->
                </div>
            </div>
        </div>

        <div class="ground-container">
            <div class="parallax ground"></div>
            <div class="section right">
                <h2>在这里，探索无限可能</h2>
                <p>需要你的投资与信任</p>
            </div>

            <div class="section">
                <h2>在这里，打造独特数字体验</h2>
                <p>期待你的支持与贡献</p>

                <div style="position: absolute;bottom: 3rem; left: 1rem;">
                    <div class="section-banner">
                        <img class="clothesImg" src="../assets/modelPic1/golden-thread-clothes.png" alt="">
                        <div class="obj">
                            <div class="objchild">
                                <span class="inn6"></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="section right">
                <h2>想你敢想，做你敢做</h2>
                <p>梦想总会成真</p>
            </div>
            <div class="parallax clouds"></div>
        </div>

        <div class="blueprint">
            <svg class="blueSvg" width="100%" height="100%" viewBox="0 0 100 100">
                <line id="line-length" x1="10" y1="80" x2="90" y2="80" stroke-width="0.5"></line>
                <path id="line-wingspan" d="M10 50, L40 35, M60 35 L90 50" stroke-width="0.5"></path>
                <circle id="circle-phalange" cx="60" cy="60" r="15" fill="transparent" stroke-width="0.5"></circle>
            </svg>
            <div class="section dark top ">
                <h2>自由的装扮体验</h2>
                <div class="svg-frame">
                    <svg style="--i:0;--j:0;">
                        <g id="out1">
                            <path
                                d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z">
                            </path>
                            <path mask="url(#path-1-inside-1_111_3212)" stroke-miterlimit="16" stroke-width="2"
                                stroke="#1196db"
                                d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z">
                            </path>
                        </g>
                    </svg>
                    <svg style="--i:1;--j:1;">
                        <g id="out2">
                            <mask fill="white" id="path-2-inside-2_111_3212">
                                <path
                                    d="M102.892 127.966C93.3733 142.905 88.9517 160.527 90.2897 178.19L94.3752 177.88C93.1041 161.1 97.3046 144.36 106.347 130.168L102.892 127.966Z">
                                </path>
                                <path
                                    d="M93.3401 194.968C98.3049 211.971 108.646 226.908 122.814 237.541L125.273 234.264C111.814 224.163 101.99 209.973 97.2731 193.819L93.3401 194.968Z">
                                </path>
                                <path
                                    d="M152.707 92.3592C140.33 95.3575 128.822 101.199 119.097 109.421L121.742 112.55C130.981 104.739 141.914 99.1897 153.672 96.3413L152.707 92.3592Z">
                                </path>
                                <path
                                    d="M253.294 161.699C255.099 175.937 253.132 190.4 247.59 203.639L243.811 202.057C249.075 189.48 250.944 175.74 249.23 162.214L253.294 161.699Z">
                                </path>
                                <path
                                    d="M172 90.0557C184.677 90.0557 197.18 92.9967 208.528 98.6474C219.875 104.298 229.757 112.505 237.396 122.621L234.126 125.09C226.869 115.479 217.481 107.683 206.701 102.315C195.921 96.9469 184.043 94.1529 172 94.1529V90.0557Z">
                                </path>
                                <path
                                    d="M244.195 133.235C246.991 138.442 249.216 143.937 250.83 149.623L246.888 150.742C245.355 145.34 243.242 140.12 240.586 135.174L244.195 133.235Z">
                                </path>
                                <path
                                    d="M234.238 225.304C223.932 237.338 210.358 246.126 195.159 250.604C179.961 255.082 163.79 255.058 148.606 250.534L149.775 246.607C164.201 250.905 179.563 250.928 194.001 246.674C208.44 242.42 221.335 234.071 231.126 222.639L234.238 225.304Z">
                                </path>
                            </mask>
                            <path mask="url(#path-2-inside-2_111_3212)" fill="#1196db"
                                d="M102.892 127.966L105.579 123.75L101.362 121.063L98.6752 125.28L102.892 127.966ZM90.2897 178.19L85.304 178.567L85.6817 183.553L90.6674 183.175L90.2897 178.19ZM94.3752 177.88L94.7529 182.866L99.7386 182.488L99.3609 177.503L94.3752 177.88ZM106.347 130.168L110.564 132.855L113.251 128.638L109.034 125.951L106.347 130.168ZM93.3401 194.968L91.9387 190.168L87.1391 191.569L88.5405 196.369L93.3401 194.968ZM122.814 237.541L119.813 241.54L123.812 244.541L126.813 240.542L122.814 237.541ZM125.273 234.264L129.272 237.265L132.273 233.266L128.274 230.265L125.273 234.264ZM97.2731 193.819L102.073 192.418L100.671 187.618L95.8717 189.02L97.2731 193.819ZM152.707 92.3592L157.567 91.182L156.389 86.3226L151.53 87.4998L152.707 92.3592ZM119.097 109.421L115.869 105.603L112.05 108.831L115.278 112.649L119.097 109.421ZM121.742 112.55L117.924 115.778L121.152 119.596L124.97 116.368L121.742 112.55ZM153.672 96.3413L154.849 101.201L159.708 100.023L158.531 95.1641L153.672 96.3413ZM253.294 161.699L258.255 161.07L257.626 156.11L252.666 156.738L253.294 161.699ZM247.59 203.639L245.66 208.251L250.272 210.182L252.203 205.569L247.59 203.639ZM243.811 202.057L239.198 200.126L237.268 204.739L241.88 206.669L243.811 202.057ZM249.23 162.214L248.601 157.253L243.641 157.882L244.269 162.842L249.23 162.214ZM172 90.0557V85.0557H167V90.0557H172ZM208.528 98.6474L206.299 103.123L206.299 103.123L208.528 98.6474ZM237.396 122.621L240.409 126.611L244.399 123.598L241.386 119.608L237.396 122.621ZM234.126 125.09L230.136 128.103L233.149 132.093L237.139 129.08L234.126 125.09ZM206.701 102.315L204.473 106.791L204.473 106.791L206.701 102.315ZM172 94.1529H167V99.1529H172V94.1529ZM244.195 133.235L248.601 130.87L246.235 126.465L241.83 128.83L244.195 133.235ZM250.83 149.623L252.195 154.433L257.005 153.067L255.64 148.257L250.83 149.623ZM246.888 150.742L242.078 152.107L243.444 156.917L248.254 155.552L246.888 150.742ZM240.586 135.174L238.22 130.768L233.815 133.134L236.181 137.539L240.586 135.174ZM234.238 225.304L238.036 228.556L241.288 224.759L237.491 221.506L234.238 225.304ZM195.159 250.604L196.572 255.4L196.572 255.4L195.159 250.604ZM148.606 250.534L143.814 249.107L142.386 253.899L147.178 255.326L148.606 250.534ZM149.775 246.607L151.203 241.816L146.411 240.388L144.983 245.18L149.775 246.607ZM194.001 246.674L195.415 251.47L195.415 251.47L194.001 246.674ZM231.126 222.639L234.379 218.841L230.581 215.589L227.329 219.386L231.126 222.639ZM98.6752 125.28C88.5757 141.13 83.8844 159.826 85.304 178.567L95.2754 177.812C94.0191 161.227 98.1709 144.681 107.109 130.653L98.6752 125.28ZM90.6674 183.175L94.7529 182.866L93.9976 172.895L89.912 173.204L90.6674 183.175ZM99.3609 177.503C98.1715 161.8 102.102 146.135 110.564 132.855L102.131 127.481C92.5071 142.585 88.0368 160.4 89.3895 178.258L99.3609 177.503ZM109.034 125.951L105.579 123.75L100.205 132.183L103.661 134.385L109.034 125.951ZM88.5405 196.369C93.8083 214.41 104.78 230.259 119.813 241.54L125.815 233.542C112.512 223.558 102.802 209.532 98.1397 193.566L88.5405 196.369ZM126.813 240.542L129.272 237.265L121.274 231.263L118.815 234.54L126.813 240.542ZM128.274 230.265C115.679 220.813 106.486 207.534 102.073 192.418L92.4735 195.221C97.493 212.412 107.948 227.513 122.272 238.263L128.274 230.265ZM95.8717 189.02L91.9387 190.168L94.7415 199.767L98.6745 198.619L95.8717 189.02ZM151.53 87.4998C138.398 90.681 126.188 96.8793 115.869 105.603L122.325 113.239C131.457 105.519 142.262 100.034 153.884 97.2187L151.53 87.4998ZM115.278 112.649L117.924 115.778L125.56 109.322L122.915 106.193L115.278 112.649ZM124.97 116.368C133.616 109.059 143.846 103.866 154.849 101.201L152.495 91.4818C139.981 94.5132 128.347 100.419 118.514 108.732L124.97 116.368ZM158.531 95.1641L157.567 91.182L147.848 93.5364L148.812 97.5185L158.531 95.1641ZM248.334 162.327C250.028 175.697 248.181 189.277 242.978 201.708L252.203 205.569C258.082 191.522 260.169 176.177 258.255 161.07L248.334 162.327ZM249.521 199.027L245.741 197.445L241.88 206.669L245.66 208.251L249.521 199.027ZM248.423 203.987C254.025 190.602 256.014 175.98 254.19 161.585L244.269 162.842C245.873 175.5 244.125 188.357 239.198 200.126L248.423 203.987ZM249.858 167.174L253.923 166.659L252.666 156.738L248.601 157.253L249.858 167.174ZM172 95.0557C183.903 95.0557 195.644 97.8172 206.299 103.123L210.757 94.1717C198.717 88.1761 185.45 85.0557 172 85.0557V95.0557ZM206.299 103.123C216.954 108.429 226.233 116.135 233.406 125.634L241.386 119.608C233.281 108.874 222.796 100.167 210.757 94.1717L206.299 103.123ZM234.383 118.631L231.113 121.1L237.139 129.08L240.409 126.611L234.383 118.631ZM238.116 122.077C230.393 111.849 220.403 103.552 208.93 97.8393L204.473 106.791C214.56 111.814 223.345 119.11 230.136 128.103L238.116 122.077ZM208.93 97.8393C197.458 92.1263 184.816 89.1529 172 89.1529V99.1529C183.269 99.1529 194.385 101.767 204.473 106.791L208.93 97.8393ZM177 94.1529V90.0557H167V94.1529H177ZM239.79 135.601C242.416 140.49 244.504 145.649 246.02 150.988L255.64 148.257C253.927 142.225 251.567 136.395 248.601 130.87L239.79 135.601ZM249.464 144.813L245.523 145.932L248.254 155.552L252.195 154.433L249.464 144.813ZM251.698 149.376C250.067 143.628 247.818 138.073 244.991 132.808L236.181 137.539C238.666 142.168 240.644 147.052 242.078 152.107L251.698 149.376ZM242.951 139.579L246.561 137.64L241.83 128.83L238.22 130.768L242.951 139.579ZM230.441 222.051C220.763 233.351 208.017 241.603 193.746 245.808L196.572 255.4C212.698 250.649 227.101 241.325 238.036 228.556L230.441 222.051ZM193.746 245.808C179.475 250.012 164.291 249.99 150.033 245.742L147.178 255.326C163.289 260.125 180.447 260.151 196.572 255.4L193.746 245.808ZM153.397 251.962L154.567 248.035L144.983 245.18L143.814 249.107L153.397 251.962ZM148.348 251.399C163.7 255.973 180.049 255.997 195.415 251.47L192.588 241.877C179.077 245.858 164.702 245.837 151.203 241.816L148.348 251.399ZM195.415 251.47C210.78 246.942 224.504 238.058 234.924 225.891L227.329 219.386C218.167 230.084 206.099 237.897 192.588 241.877L195.415 251.47ZM227.874 226.436L230.986 229.101L237.491 221.506L234.379 218.841L227.874 226.436Z">
                            </path>
                        </g>
                    </svg>
                    <svg style="--i:0;--j:2;" fill="#1196db">
                        <g id="inner3">
                            <path
                                d="M195.136 135.689C188.115 131.215 179.948 128.873 171.624 128.946C163.299 129.019 155.174 131.503 148.232 136.099L148.42 136.382C155.307 131.823 163.368 129.358 171.627 129.286C179.886 129.213 187.988 131.537 194.954 135.975L195.136 135.689Z">
                            </path>
                            <path
                                d="M195.136 208.311C188.115 212.784 179.948 215.127 171.624 215.054C163.299 214.981 155.174 212.496 148.232 207.901L148.42 207.618C155.307 212.177 163.368 214.642 171.627 214.714C179.886 214.786 187.988 212.463 194.954 208.025L195.136 208.311Z">
                            </path>

                        </g>
                        <path stroke="#1196db"
                            d="M240.944 172C240.944 187.951 235.414 203.408 225.295 215.738C215.176 228.068 201.095 236.508 185.45 239.62C169.806 242.732 153.567 240.323 139.5 232.804C125.433 225.285 114.408 213.12 108.304 198.384C102.2 183.648 101.394 167.25 106.024 151.987C110.654 136.723 120.434 123.537 133.696 114.675C146.959 105.813 162.884 101.824 178.758 103.388C194.632 104.951 209.472 111.97 220.751 123.249"
                            id="out3">
                        </path>
                    </svg>
                    <svg style="--i:1;--j:3;">
                        <g id="inner1">
                            <path fill="#1196db"
                                d="M145.949 124.51L148.554 129.259C156.575 124.859 165.672 122.804 174.806 123.331C183.94 123.858 192.741 126.944 200.203 132.236C207.665 137.529 213.488 144.815 217.004 153.261C220.521 161.707 221.59 170.972 220.09 179.997L224.108 180.665L224.102 180.699L229.537 181.607C230.521 175.715 230.594 169.708 229.753 163.795L225.628 164.381C224.987 159.867 223.775 155.429 222.005 151.179C218.097 141.795 211.628 133.699 203.337 127.818C195.045 121.937 185.266 118.508 175.118 117.923C165.302 117.357 155.525 119.474 146.83 124.037C146.535 124.192 146.241 124.349 145.949 124.51ZM224.638 164.522C224.009 160.091 222.819 155.735 221.082 151.563C217.246 142.352 210.897 134.406 202.758 128.634C194.62 122.862 185.021 119.496 175.06 118.922C165.432 118.367 155.841 120.441 147.311 124.914L148.954 127.91C156.922 123.745 165.876 121.814 174.864 122.333C184.185 122.87 193.166 126.019 200.782 131.421C208.397 136.822 214.339 144.257 217.928 152.877C221.388 161.188 222.526 170.276 221.23 179.173L224.262 179.677C224.998 174.671 225.35 169.535 224.638 164.522Z"
                                clip-rule="evenodd" fill-rule="evenodd"></path>
                            <path fill="#1196db"
                                d="M139.91 220.713C134.922 217.428 130.469 213.395 126.705 208.758L130.983 205.286L130.985 205.288L134.148 202.721C141.342 211.584 151.417 217.642 162.619 219.839C173.821 222.036 185.438 220.232 195.446 214.742L198.051 219.491C197.759 219.651 197.465 219.809 197.17 219.963C186.252 225.693 173.696 227.531 161.577 225.154C154.613 223.789 148.041 221.08 142.202 217.234L139.91 220.713ZM142.752 216.399C148.483 220.174 154.934 222.833 161.769 224.173C173.658 226.504 185.977 224.704 196.689 219.087L195.046 216.09C185.035 221.323 173.531 222.998 162.427 220.82C151.323 218.643 141.303 212.747 134.01 204.122L131.182 206.5C134.451 210.376 138.515 213.607 142.752 216.399Z"
                                clip-rule="evenodd" fill-rule="evenodd"></path>
                        </g>
                    </svg>
                    <svg t="1712814428461" style="--i:2;--j:4;" id="pl" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5489">
                        <path
                            d="M947.2 281.6c0-19.2-6.4-32-25.6-38.4L537.6 12.8c-19.2-12.8-32-12.8-51.2 0L96 243.2c-12.8 6.4-19.2 19.2-19.2 38.4v460.8c0 19.2 6.4 32 25.6 38.4l390.4 230.4c6.4 6.4 12.8 6.4 25.6 6.4s19.2 0 25.6-6.4l390.4-230.4c12.8-6.4 25.6-25.6 25.6-38.4l-12.8-460.8zM512 915.2l-345.6-198.4V307.2L512 108.8l339.2 198.4v403.2L512 915.2z"
                            p-id="5490" fill="#1296db" id="center"></path>
                        <path
                            d="M672 358.4L512 454.4 352 358.4c-25.6-12.8-51.2-6.4-64 12.8-12.8 25.6-6.4 51.2 12.8 64l160 102.4v179.2c0 25.6 25.6 51.2 51.2 51.2s51.2-19.2 51.2-51.2V537.6l160-102.4c25.6-12.8 32-44.8 12.8-64-12.8-19.2-44.8-25.6-64-12.8z"
                            p-id="5491" fill="#1296db" id="center"></path>
                    </svg>
                </div>
            </div>
            <div class="section dark length">
                <h2>各种材质皮肤</h2>
                <p>*以藏品发布数量为准</p>
            </div>
            <!-- <div class="section dark wingspan">
                <h2>踏上一段奇妙的探索之旅</h2>
                <p>*根据各人购买力有不同差异</p>
            </div> -->
            <div class="section dark phalange">
                <h2>模型的部位分解</h2>
                <p>带来更丰富的搭配效果</p>
            </div>
            <div class="section dark">
                <h2>清晰丰富的细节</h2>
                <p></p>
            </div>
        </div>
        <div class="sunset">
            <div class="section"></div>
            <div class="section end">
                <!-- <h2>Let's Go</h2> -->
                <div style="height: 100%;width: 100%;display: flex;align-items: flex-end;justify-content: center;">
                    <div class="card">
                        <div class="svgContainer">
                            <svg t="1711969440100" class="svg-icon dartboard" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4700" width="30" height="30">
                                <path
                                    d="M672 358.4L512 454.4 352 358.4c-25.6-12.8-51.2-6.4-64 12.8-12.8 25.6-6.4 51.2 12.8 64l160 102.4v179.2c0 25.6 25.6 51.2 51.2 51.2s51.2-19.2 51.2-51.2V537.6l160-102.4c25.6-12.8 32-44.8 12.8-64-12.8-19.2-44.8-25.6-64-12.8z"
                                    p-id="4702" fill="#1883b8"></path>
                            </svg>
                            <svg class="svg-icon eyehole" viewBox="0 0 20 20">
                                <path
                                    d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403">
                                </path>
                            </svg>
                            <svg class="svg-icon batman" style="position: absolute;bottom: -35px;">
                                <path class="svg-fill-primary"
                                    d="M86.578,41.004s-8.219,.295-8.607,7.685c0,0-9.824-4.379-11.571,7.874,0,0-8.653-5.402-14.586,9.744l-1.861-3.908-1.861,3.908c-5.933-15.146-14.586-9.744-14.586-9.744-1.752-12.253-11.571-7.874-11.571-7.874-.366-6.927-7.609-7.621-8.514-7.68,11.643,.442,15.904-7.314,15.904-7.314,3.015,13.499,14.097,14.603,14.097,14.603l2.43-9.335,1.461,4.379h5.28l1.457-4.379,2.43,9.335s11.087-1.103,14.102-14.603c0,0,4.282,7.798,15.996,7.31Z">
                                </path>
                            </svg>
                        </div>
                        <div class="card-info">
                            <span>破浪</span>
                            <p>让前行无畏</p>
                            <button class="challengeButton" @click="inMain">进入</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scene from '../utlis/Scene';
import DrawSVGPlugin from '../utlis/DrawSVGPlugin3.min.js';
import Header from "@/components/Header.vue"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'ThreeJSComponent',
    components: { Header },
    setup() {
        let scene = null; // 初始化场景变量  
        let plane = null; // 初始化模型组变量

        const router = useRouter();
        const inMain = () => {
            router.push("/main")
        }
        const setupAnimation = (model) => {
            scene = new Scene(model);
            plane = scene.modelGroup;

            gsap.fromTo('canvas', { x: "50%", autoAlpha: 0 }, { duration: 1, x: "0%", autoAlpha: 1 });

            gsap.to('.scroll-cta', { opacity: 1 });
            gsap.set('svg', { autoAlpha: 1 });

            let tau = Math.PI * 2;

            gsap.set(plane.rotation, { y: tau * -.25 });
            gsap.set(plane.position, { x: 80, y: -32, z: -60 });

            scene.render();

            var sectionDuration = 1;
            gsap.fromTo(scene.views[1],
                { height: 1, bottom: 0 },
                {
                    height: 0, bottom: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: ".blueprint",
                        scrub: true,
                        start: "bottom bottom",
                        end: "bottom top"
                    }
                });
            gsap.fromTo(scene.views[1],
                { height: 0, bottom: 0 },
                {
                    height: 1, bottom: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: ".blueprint",
                        scrub: true,
                        start: "top bottom",
                        end: "top top"
                    }
                });
            gsap.to('.ground', {
                y: "30%",
                scrollTrigger: {
                    trigger: ".ground-container",
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top"
                }
            });
            gsap.from('.clouds', {
                y: "25%",
                scrollTrigger: {
                    trigger: ".ground-container",
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top"
                }
            });
            gsap.to('#line-length', {
                drawSVG: 100,
                scrollTrigger: {
                    trigger: ".top",
                    scrub: true,
                    start: "top center",
                    end: "top top"
                }
            });
            gsap.to('#line-length', {
                opacity: 0,
                drawSVG: 0,
                scrollTrigger: {
                    trigger: ".length",
                    scrub: true,
                    start: "top center",
                    end: "bottom bottom"
                }
            });
            gsap.to('#line-wingspan', {
                opacity: 0,
                drawSVG: 0,
                scrollTrigger: {
                    trigger: ".length",
                    scrub: true,
                    start: "top top",
                    end: "bottom top"
                }
            });
            gsap.to('#line-wingspan', {
                drawSVG: 100,
                scrollTrigger: {
                    trigger: ".length",
                    scrub: true,
                    start: "top 0%",
                    end: "bottom 50%"
                }
            });

            gsap.to('#circle-phalange', {
                drawSVG: 100,
                scrollTrigger: {
                    trigger: ".phalange",
                    scrub: true,
                    start: "top 50%",
                    end: "bottom 100%"
                }
            });
            gsap.to('#circle-phalange', {
                opacity: 0,
                drawSVG: 0,
                scrollTrigger: {
                    trigger: ".phalange",
                    scrub: true,
                    start: "top top",
                    end: "bottom top"
                }
            });

            let tl = new gsap.timeline(
                {
                    onUpdate: scene.render,
                    scrollTrigger: {
                        trigger: ".content",
                        scrub: true,
                        start: "top top",
                        end: "bottom bottom"
                    },

                    defaults: { duration: sectionDuration, ease: 'power2.inOut' }
                });
            let delay = 0;
            tl.to('.scroll-cta', { duration: 0.25, opacity: 0 }, delay);
            tl.to(plane.position, { x: -10, ease: 'power1.in' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { x: tau * .25, y: 0, z: -tau * 0.05, ease: 'power1.inOut' }, delay);

            tl.to(plane.position, { x: 40, y: 0, z: -60, ease: 'power2.inOut' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { x: tau * .2, y: 0, z: -tau * 0.1, ease: 'power3.inOut' }, delay);
            tl.to(plane.position, { x: -40, y: 0, z: -30, ease: 'power2.inOut' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { x: 0, z: 0, y: tau * .25 }, delay);
            tl.to(plane.position, { x: 0, y: -10, z: 50 }, delay);
            delay += sectionDuration;
            delay += sectionDuration;
            tl.to(plane.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay);
            tl.to(plane.position, { z: 30, ease: 'power4.inOut' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay);
            tl.to(plane.position, { z: 60, x: 30, ease: 'power4.inOut' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { x: tau * 0.35, y: tau * .75, z: tau * 0.6, ease: 'power4.inOut' }, delay);
            tl.to(plane.position, { z: 100, x: 20, y: 0, ease: 'power4.inOut' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { x: tau * 0.15, y: tau * .85, z: -tau * 0, ease: 'power1.in' }, delay);
            tl.to(plane.position, { z: -150, x: 0, y: 0, ease: 'power1.inOut' }, delay);
            delay += sectionDuration;
            tl.to(plane.rotation, { duration: sectionDuration, x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none' }, delay);
            tl.to(plane.position, { duration: sectionDuration, x: 0, y: 30, z: 260, ease: 'power1.in' }, delay);
            tl.to(scene.light.position, { duration: sectionDuration, x: 0, y: 0, z: 0 }, delay);
        }
        onMounted(() => {
            let a = document.getElementById("line-length")
            let b = document.getElementById("line-wingspan")
            let c = document.getElementById("circle-phalange")
            gsap.registerPlugin(ScrollTrigger);
            gsap.registerPlugin(DrawSVGPlugin);
            gsap.registerPlugin(DrawSVGPlugin);
            gsap.set(a, { drawSVG: 0 });
            gsap.set(b, { drawSVG: 0 });
            gsap.set(c, { drawSVG: 0 });
            var object;
            function onModelLoaded() {
                object.traverse(function (child) {
                    let mat = new THREE.MeshPhongMaterial({ color: 0x354350, specular: 0x00b0ff, shininess: 5, flatShading: true });
                    child.material = mat;
                });
                setupAnimation(object);
            }
            var manager = new THREE.LoadingManager(onModelLoaded);
            manager.onProgress = (item, loaded, total) => console.log(item, loaded, total);
            const loader = new OBJLoader(manager);
            loader.load('/files/gltf/plane.obj', function (obj) { object = obj; });
        });
        onBeforeUnmount(() => {
            var canvas = document.querySelectorAll('canvas')[0]
            canvas.parentNode.removeChild(canvas);
        });
        return {
            inMain
        };
    }

}
</script>


<style>
canvas {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
}
</style>

<style lang="scss" scoped>
//页面
.content {
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-family: "Libre Baskerville", serif;
    color: black;
    background-color: #D0CBC7;
}

.content .trigger {
    position: absolute;
    top: 0;
    height: 100%;
}

.content .section {
    position: relative;
    padding: 10vmin;
    --pad2: calc(10vmin * 2);
    width: calc(100vw - var(--pad2));
    height: calc(100vh - var(--pad2));
    margin: 0 auto;
    z-index: 2;
}

.content .section.dark {
    color: white;
    background-color: black;
}

.content .section.right {
    text-align: right;
}

.content .blueprint {
    position: relative;
    background-color: #131C2A;
    background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    background-attachment: fixed;
}

.blueSvg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    stroke: white;
    pointer-events: none;
    opacity: 1;
    visibility: inherit;
    z-index: 100;

}

.content .blueprint .dark {
    background-color: transparent;
}

.content .ground-container {
    position: relative;
    overflow: hidden;
}

.content .ground-container .parallax {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -100px;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    transform-origin: top center;
}

.content .ground-container .ground {
    z-index: -1;
    background-image: url("../assets/picture/background-reduced.jpg");
}

.content .ground-container .clouds {
    z-index: 2;
    background-image: url("../assets/picture/clouds.webp");
}

.content .scroll-cta {
    font-size: 2vw;
    position: absolute;
    bottom: 10vmin;
}


.content .sunset {
    background: url("../assets/picture/sunset-reduced.jpg") no-repeat top center;
    background-size: cover;
    transform-origin: top center;
}

.section h1 {
    font-size: 81px !important;
}

.section h3 {
    font-size: 50px !important;
}

.section p {
    font-size: 20px;
}

.content h1,
.content h2 {
    font-size: 64px;
    margin: 0vmin 0 2vmin 0;
    font-weight: 700;
    display: inline;
}

.content h3 {
    font-size: 32px;
    font-weight: 500;
    margin: 0;
}

.content .end h2 {
    margin-bottom: 50vh;
}

.content p {
    margin: 1rem 5px;
}

.content .loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vw;
}

//底部卡片
.card {
    position: absolute;
    margin-bottom: 2rem;
    width: 330px;
    height: 290px;
    background: linear-gradient(120deg, #a39e9a 0%, #9e9894 50%, #797470 100%);
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 15px;
    transition: all 0.5s ease;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.83);

}

.svg-icon {
    width: 5em;
    height: 5em;
    fill: #1883b8;
}

.svgContainer {
    height: 100px;
    width: 100px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

.svgContainer svg {
    position: absolute;
    overflow: visible;
}

.dartboard {
    width: 2em;
    height: 2em;
    padding: 6px;
    border: 3px solid #1883b8;
    border-radius: 50%;
    transition: all 0.5s ease;
    transform: scale(2) rotate(0deg);
}

.eyehole {
    transform: scale(1.2) rotate(-270deg);
    transition: all 0.5s ease;
}

.batman {
    transition: all .4s ease-in;
    transform: rotate(55deg) translate(240px, -45px) scale(1.2);
}

.svg-fill-primary {
    fill: #1196db;
}

.card-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    gap: 10px;
    align-items: center;
}

.card span {
    color: #000000;
    font-size: 42px;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-family: "Alimama";
}

.card-info p {
    color: black;
    font-size: 32px;
    position: relative;
    bottom: 18px;
    font-family: "Alimama";
}

.card-info .challengeButton {
    text-decoration: none;
    background-color: #343434;
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all 0.5s ease;
    position: relative;
    bottom: 5px;
    border: unset;

}

.card:hover {
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.83);
}

.card:hover .batman {
    transform: rotate(-50deg) translate(61px, -30px);
}

.card:hover .eyehole {
    transform: scale(1);
}

.card:hover .dartboard {
    transform: scale(1) rotate(120deg) translate(0, 0);
}

.challengeButton:hover {
    background-color: #1883b8;
}

.card:hover::before {
    border-left: 30px solid #1196db;
    border-right: 30px solid #1196db;
    border-bottom: 10px solid transparent;
    top: -15px;
}

//第一个卡片
.card-border {
    z-index: 0;
    position: relative;
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 2rem;
    background-image: radial-gradient(#2121218a, #212121cc), linear-gradient(35deg, #c2bcb7 62%, #a8a39f 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    transition: all 0.5s;
}

.card-bg {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.8rem;
    background: #0e0e0e00;
}

strong {
    display: flex;
    height: 57%;
    width: 100%;
    text-transform: uppercase;
    font-family: 'Open Sans Pro', sans-serif;
    font-size: 1.6rem;
    font-weight: 900;
    align-items: center;
    letter-spacing: 0.5rem;
}

.marquee {
    top: 0;
    z-index: -5;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    --offset: 2rem;
    --move-initial: calc(0% + var(--offset));
    --move-final: calc(-70% + var(--offset));
    border-radius: 0px 1rem;
    filter: opacity(0.3);
}

.marquee__inner {
    width: 666px;
    display: flex;
    position: relative;
    top: 5rem;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: slide 16s linear infinite;
    border-radius: 0px 1rem;
}

.marquee__inner {
    animation-play-state: running;
}

#blur-area {
    display: block;
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: 0 1rem;
    backdrop-filter: blur(3px);
    background: linear-gradient(90deg, transparent 0%, #00000044 100%);
}

.viper {
    display: flex;
    text-transform: uppercase;
    font-family: 'Open Sans Pro', sans-serif;
    font-size: 8rem;
    font-weight: 900;
    align-items: center;
    line-height: 0.9em;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
}

.container-logo {
    display: flex;
    position: absolute;
    width: 7rem;
    height: 6em;
    top: 1rem;
    left: 0rem;
    align-items: center;
    justify-content: center;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
}

.logo {
    position: absolute;
    width: 200%;
    height: 200%;
    background: conic-gradient(#06aae6 0%, #fff 10%, #11a2f6 25%, #2555cf 50%, #0091ff 70%, #18d1ff 90%);
    animation: spin 5s linear infinite;
}

.logo-inside {
    display: flex;
    width: 85%;
    height: 85%;
    align-items: center;
    justify-content: center;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background-color: #212121;
}

.first {
    position: absolute;
    width: 70px;
    height: 70px;
    transform: rotate(-90deg);
    background: url('../assets/logo.png') no-repeat center center;
    background-size: 130px 130px;
}

.mist-container {
    position: absolute;
    width: 450px;
    height: 150px;
    overflow: hidden;
    filter: blur(1rem);
    top: 60%;
    left: 0;
}

.mist {
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #82786f 10%, rgba(255, 255, 255, 0) 50%);
    animation: mist 10s infinite both;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes mist {
    0% {
        transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(0deg);
        opacity: 0.3;
    }

    50% {
        transform: translateX(0%) translateY(50%) scaleY(-10.3) rotate(20deg);
        opacity: 0.5;
    }

    100% {
        transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(-20deg);
        opacity: 0.3;
    }
}

@keyframes slide {
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
}

.svg-frame {
    position: relative;
    top: 10rem;
    left: 5rem;
    width: 200px;
    height: 200px;
    overflow: visible;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999999;
    background-color: rgba(33, 33, 33, 0);
}

.svg-frame svg {
    position: absolute;
    transition: .5s;
    z-index: calc(1 - (0.2 * var(--j)));
    transform-origin: center;
    width: 344px;
    height: 344px;
    fill: none;
}

#pl {
    width: 39px;
    height: 39px;
}

.svg-frame:hover svg {
    transform: rotate(80deg) skew(30deg) translateX(calc(45px * var(--i))) translateY(calc(-35px * var(--i)));
}

.svg-frame svg #center {
    transition: .5s;
    transform-origin: center;
}

.svg-frame:hover svg #center {
    transform: rotate(-30deg) translateX(45px) translateY(-3px);
}

#out2 {
    animation: rotate16 7s ease-in-out infinite alternate;
    transform-origin: center;
}

#out3 {
    animation: rotate16 3s ease-in-out infinite alternate;
    transform-origin: center;
    stroke: #1196db;
}

#inner3,
#inner1 {
    animation: rotate16 4s ease-in-out infinite alternate;
    transform-origin: center;
}

#center1 {
    fill: #1196db;
    animation: rotate16 2s ease-in-out infinite alternate;
    transform-origin: center;
}

@keyframes rotate16 {
    to {
        transform: rotate(360deg);
    }
}

//卡片2
.clothesImg {
    position: relative;
    left: 100px;
    top: 86px;
    width: 200px;
    height: 180px;
    transform: rotateX(0deg) rotateY(-20deg);
    transform-style: preserve-3d;
    border: 1px solid #D0CBC7;
    animation: rot 2s infinite ease;
}

@keyframes rot {
    0% {
        transform: rotateX(-15deg) translateY(0px);
    }

    50% {
        transform: rotateX(-15deg) translateY(-10px);
    }

    100% {
        transform: rotateX(-15deg) translateY(0px);
    }
}

.section-banner {
    height: 100%;
    width: 100%;
    position: relative;
}

.obj {
    position: relative;
    bottom: -7.8rem;
    left: 5rem;
    width: 250px;
    height: 250px;
    transform-style: preserve-3d;
    transition: 0.5s all;
    transform: rotateX(-25deg) rotateY(20deg);
}

.objchild {
    animation: rotate 4s infinite linear;
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
}

.objchild::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    box-shadow: 0 0 200px 15px white;
    transform: rotateX(90deg) scale(1.1) translateZ(0px);
}

.inn6 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #dbd7d7;
    transform: rotateX(90deg) translateZ(90px);
    animation: updown 4s infinite ease-in-out;
    border: 1px solid #D0CBC7;
}

@keyframes rotate {
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}
</style>