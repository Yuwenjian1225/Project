 <!-- 元宇宙场景 -->
<template>
    <div class="container" ref="container">
        <div id="blocker" v-if="showBlocker">
            <div class="bg">
                <div class="loader"></div>
                <span class="loaderSpan">场景加载中</span>
            </div>
        </div>
    </div>
</template>


<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ref,onMounted } from "vue";
import { Octree } from 'three/examples/jsm/math/Octree'
import { Capsule } from 'three/examples/jsm/math/Capsule'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper'
import CapsuleHelper from "../utlis/CapsuleHelper"
import api from '@/api/user.js'
// 全局变量
let scene, camera, renderer, playerMesh, mixer, animations, space, modelMaterialList;

const showBlocker = ref(true);
onMounted(() => {
    let container = document.querySelector(".container");
    const { clientWidth, clientHeight } = container;
    const blocker = document.getElementById("blocker");
    const loader = new GLTFLoader().setPath('files/gltf/')

    let clock = new THREE.Clock();
    let run = false
    let keyW = false
    let keyShift = false
    space = true
    modelMaterialList = {
        head: '',
        face: '',
        clothes: '',
        pants: '',
        shoes: ''
    };
    const GRAVITY = 30;
    // 八叉树，碰撞检测
    const worldOctree = new Octree();
    // 角色碰撞胶囊
    const playerCollider = new Capsule(new THREE.Vector3(0, 0.35, 0), new THREE.Vector3(0, 1.5, 0), 0.35);
    const playerColliderHelper = CapsuleHelper(1, 7)
    // 角色位置
    const playerFixVector = new THREE.Vector3(0, 3.25, 0)
    // 运动速度
    const playerSpeed = new THREE.Vector3();
    // 运动方向
    const playerDirection = new THREE.Vector3();
    // 角色是否在地面
    let playerOnFloor = false;

    // 按下前进按键的持续时间
    let ForwardHoldTimeClock = new THREE.Clock()
    ForwardHoldTimeClock.autoStart = false

    // 按键事件状态
    const keyStates = { W: false, A: false, S: false, D: false, Z: false, Space: false, ShiftLeft: false, ControlLeft: false };
    // 角色运动状态
    const playerActionState = { forward: 0, turn: 0 }
    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        var textureLoader = new THREE.TextureLoader();
        var texture = textureLoader.load(require('../assets/picture/sky.png'));
        scene.background = texture
        camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.01, 1000);
        camera.lookAt(scene.position);
        // 渲染器
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
        // 渲染多大的地方
        renderer.setSize(clientWidth, clientHeight);
        container.appendChild(renderer.domElement);
        // 环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
        scene.add(ambientLight);
        // 方向光
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(- 5, 25, - 1);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.near = 0.01;
        directionalLight.shadow.camera.far = 500;
        directionalLight.shadow.camera.right = 30;
        directionalLight.shadow.camera.left = - 30;
        directionalLight.shadow.camera.top = 30;
        directionalLight.shadow.camera.bottom = - 30;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.radius = 4;
        directionalLight.shadow.bias = - 0.00006;
        scene.add(directionalLight);
        api.getSession().then(res => {
            let user_account = res.data
            api.getTexture({ account: user_account }).then(res => {
                modelMaterialList = res.data[0]
            })
        })
        addBox();
    }
    function addBox() {
        loader.load('park.glb', (gltf) => {
            scene.add(gltf.scene);
            worldOctree.fromGraphNode(gltf.scene);
        });
        // 角色模型
        loader.load('gameModel.glb', (gltf) => {
            playerMesh = gltf.scene
            playerMesh.name = 'people'
            playerMesh.position.set(19, 3.25, 0);
            playerMesh.scale.x = 0.3
            playerMesh.scale.y = 0.3
            playerMesh.scale.z = 0.3
            playerMesh.rotateY(-Math.PI / 2);
            scene.add(playerMesh)

            playerMesh.add(playerColliderHelper)
            playerColliderHelper.visible = false
            playerMesh.add(camera);
            camera.position.set(0, 8, -10);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            //更改皮肤
            changeTexture()
            // 动画
            animations = gltf.animations;
            mixer = startAnimation(
                playerMesh,
                animations,
                "stay.001"
            );

        })
        setTimeout(() => {
            if (blocker) {
                handleClickOutside();
            }
        }, 5000)
    }
    const handleClickOutside = () => {
        const canvas = document.querySelector('.container canvas');
        showBlocker.value = false; // 当点击外部时隐藏blocker
        canvas.style.visibility = 'visible';

    };
    function changeTexture() {
        playerMesh.traverse(function (obj) {
            const texLoader = new THREE.TextureLoader();
            if (obj.name == "Object_1" && modelMaterialList.shoes != '') {
                let item = modelMaterialList.shoes
                const texture = texLoader.load(`http://localhost:8081/ipfs/${item}`);
                texture.wrapS = THREE.MirroredRepeatWrapping;
                texture.wrapT = THREE.MirroredRepeatWrapping;
                texture.flipY = false
                texture.colorSpace = THREE.SRGBColorSpace
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                obj.material = new THREE.MeshLambertMaterial({
                    map: texture,
                });
            }
            if (obj.name == "Object_2" && modelMaterialList.pants != '') {
                let item = modelMaterialList.pants
                const texture = texLoader.load(`http://localhost:8081/ipfs/${item}`);
                texture.wrapS = THREE.MirroredRepeatWrapping;
                texture.wrapT = THREE.MirroredRepeatWrapping;
                texture.flipY = false
                texture.colorSpace = THREE.SRGBColorSpace
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                obj.material = new THREE.MeshLambertMaterial({
                    map: texture,
                });
            }
            if (obj.name == "Object_3" && modelMaterialList.clothes != '') {
                let item = modelMaterialList.clothes
                const texture = texLoader.load(`http://localhost:8081/ipfs/${item}`);
                texture.flipY = false;
                texture.wrapS = THREE.MirroredRepeatWrapping;
                texture.wrapT = THREE.MirroredRepeatWrapping;
                texture.colorSpace = THREE.SRGBColorSpace
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                obj.material = new THREE.MeshLambertMaterial({
                    map: texture,
                });
            }
            if (obj.name == "Object_4" && modelMaterialList.face != '') {
                let item = modelMaterialList.face
                const texture = texLoader.load(`http://localhost:8081/ipfs/${item}`);
                texture.flipY = false;
                texture.wrapS = THREE.MirroredRepeatWrapping;
                texture.wrapT = THREE.MirroredRepeatWrapping;
                texture.colorSpace = THREE.SRGBColorSpace
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                obj.material = new THREE.MeshLambertMaterial({
                    map: texture,
                });
            }
            if (obj.name == "Object_5" && modelMaterialList.head != '') {
                let item = modelMaterialList.head
                const texture = texLoader.load(`http://localhost:8081/ipfs/${item}`);
                texture.flipY = false;
                texture.wrapS = THREE.MirroredRepeatWrapping;
                texture.wrapT = THREE.MirroredRepeatWrapping;
                texture.colorSpace = THREE.SRGBColorSpace
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                obj.material = new THREE.MeshLambertMaterial({
                    map: texture,
                });
            }
        });
    }
    //角色动画
    function startAnimation(skinnedMesh, animations, animationName, loopMode = THREE.LoopRepeat) {
        const m_mixer = new THREE.AnimationMixer(skinnedMesh);
        const clip = THREE.AnimationClip.findByName(animations, animationName);
        if (clip) {
            const action = m_mixer.clipAction(clip);
            action.setLoop(loopMode);
            action.play();
            // 监听动画完成事件  
            if (loopMode == THREE.LoopOnce) {
                m_mixer.addEventListener('finished', function (event) {
                    // 移除当前动画完成事件的监听器，防止重复触发  
                    m_mixer.removeEventListener('finished');
                    space = false
                });
            }
        }
        return m_mixer;
    }
    // 角色碰撞检测
    function playerCollisions() {
        const result = worldOctree.capsuleIntersect(playerCollider);
        playerOnFloor = false;
        if (result) {
            if (result.depth != 0) {
                playerOnFloor = result.normal.y > 0;
                if (!playerOnFloor) {
                    playerSpeed.addScaledVector(result.normal, - result.normal.dot(playerSpeed));
                }
                playerCollider.translate(result.normal.multiplyScalar(result.depth));
            }
        }
    }

    window.addEventListener('mousedown', () => {
        document.body.requestPointerLock();
    });
    window.addEventListener("mousemove", (e) => {
        if (document.pointerLockElement == document.body) {
            playerMesh.rotation.y -= e.movementX / 500;
        }
    });
    // 按下键盘
    window.addEventListener('keydown', (event) => {
        if (event.code === 'KeyW') {
            keyStates.W = true;
            keyStates.KeyZ = false;
            playerActionState.forward = 1;
            if (keyStates.ShiftLeft) {
                keyW = true
            }
            if (!keyW) { // keydown事件在按下按键不松时会持续激活，因此需进行状态控制，避免计时器重复计时
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "walk"
                );
                ForwardHoldTimeClock.start()
                keyW = true
            }

        }
        if (event.code === 'KeyA') {
            keyStates.A = true;
            keyShift = true
            keyStates.KeyZ = false;
            playerActionState.turn = -1;
            if (keyStates.W == false && keyStates.S == false) {
                if (!keyW) {
                    mixer = startAnimation(
                        playerMesh,
                        animations,
                        "walk"
                    );
                    keyW = true
                }
            }

        }
        if (event.code === 'KeyD') {
            keyStates.D = true;
            playerActionState.turn = 1;
            keyStates.KeyZ = false;
            keyShift = true
            if (keyStates.W == false && keyStates.S == false) {
                if (!keyW) {
                    mixer = startAnimation(
                        playerMesh,
                        animations,
                        "walk"
                    );
                    keyW = true
                }
            }
        }
        if (event.code === 'KeyS') {
            keyStates.S = true;
            keyStates.KeyZ = false;
            keyShift = true
            playerActionState.forward = -1;

            if (!keyW) {
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "backwalk"
                );
                keyW = true
            }
        }
        if (event.code === 'Space') {
            if (!keyStates.KeyZ) {
                keyStates.Space = true;
            }
        }
        if (event.code === 'ShiftLeft') {
            keyStates.ShiftLeft = true;
            keyStates.KeyZ = false;
            playerActionState.forward = 1;
            ForwardHoldTimeClock.stop()
            ForwardHoldTimeClock.elapsedTime = 0
            if (!keyShift && !keyStates.A && !keyStates.D && !keyStates.S) {
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "shiftwalk"
                );
                keyShift = true
            }
        }
        if (event.code === 'KeyZ') {
            keyStates.KeyZ = true;
            playerActionState.forward = 0;
            if (!keyStates.ShiftLeft && !keyStates.W && !keyStates.S) {
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "knee"
                );
            }
        }
    });
    // 松开键盘
    document.addEventListener('keyup', (event) => {
        if (event.code === 'KeyW') {
            keyW = false
            keyStates.W = false;
            playerActionState.forward = 0;
            ForwardHoldTimeClock.stop()
            ForwardHoldTimeClock.elapsedTime = 0
            if (keyStates.ShiftLeft == false) {
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "stay.001"
                );
            }

        }
        if (event.code === 'KeyA') {
            keyStates.A = false;
            keyShift = false;
            playerActionState.turn = 0;
            if (keyStates.W == false && keyStates.S == false) {
                keyW = false
                ForwardHoldTimeClock.stop()
                ForwardHoldTimeClock.elapsedTime = 0
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "stay.001"
                );
            }

        }
        if (event.code === 'KeyD') {
            keyStates.D = false;
            keyShift = false;
            playerActionState.turn = 0;
            if (keyStates.W == false && keyStates.S == false) {
                keyW = false
                ForwardHoldTimeClock.stop()
                ForwardHoldTimeClock.elapsedTime = 0
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "stay.001"
                );
            }
        }
        if (event.code === 'KeyS') {
            keyStates.S = false;
            playerActionState.forward = 0;
            keyW = false
            keyStates.S = false;
            playerActionState.forward = 0;
            ForwardHoldTimeClock.stop()
            ForwardHoldTimeClock.elapsedTime = 0
            mixer = startAnimation(
                playerMesh,
                animations,
                "stay.001"
            );
        }
        if (event.code === 'Space') {
            keyStates.Space = false;

        }
        if (event.code === 'ShiftLeft') {
            keyW = false
            keyShift = false
            keyStates.ShiftLeft = false;
            playerActionState.forward = 0;
            if (keyStates.W) {
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "walk"
                );
            }
            else if (keyStates.S || keyStates.A || keyStates.D) {
            } else {
                mixer = startAnimation(
                    playerMesh,
                    animations,
                    "stay.001"
                );
            }

        }


        // 保持按键打断前的状态
        playerActionState.forward = keyStates.W == true ? 1 : playerActionState.forward
        playerActionState.turn = keyStates.A == true ? -1 : playerActionState.turn
        playerActionState.forward = keyStates.S == true ? -1 : playerActionState.forward
        playerActionState.turn = keyStates.D == true ? 1 : playerActionState.turn
    });

    // 更新角色位置信息
    function updatePlayer(deltaTime) {
        if (!(playerMesh instanceof THREE.Object3D)) return
        let speedRatio = 5
        let damping = Math.exp(- 20 * deltaTime) - 1; // 阻尼减速
        if (!playerOnFloor) {
            playerSpeed.y -= GRAVITY * deltaTime;
            damping *= 0.1;
            speedRatio = 2
        }
        playerSpeed.addScaledVector(playerSpeed, damping);
        // 前进
        if (playerActionState.forward > 0) {
            if (playerActionState.turn != 0) {
                playerMesh.rotation.y -= playerActionState.turn * deltaTime * 2
            }
            if (ForwardHoldTimeClock.getElapsedTime() > 2) {
                if (playerOnFloor) {
                    speedRatio = 10
                    if (!run) {
                        mixer = startAnimation(
                            playerMesh,
                            animations,
                            "run"
                        );
                        run = true
                    }
                }
            } else {
                run = false
            }
        }
        if (playerActionState.forward < 0) {
        }
        // 原地转向
        if (playerActionState.forward == 0 && playerActionState.turn != 0) {
            playerMesh.rotation.y -= playerActionState.turn * deltaTime * 2
        }
        // 休息状态
        if (playerActionState.forward == 0 && playerActionState.turn == 0) {
        }
        const deltaPosition = playerSpeed.clone().multiplyScalar(deltaTime * speedRatio); // 速度*时间 = 移动距离 (向量)
        deltaPosition.y /= speedRatio // 速度系数不对高度分量产生效果
        playerCollider.translate(deltaPosition);
        playerCollisions();
        playerMesh.position.copy(new THREE.Vector3().subVectors(playerCollider.start, playerFixVector)); // 更新角色位置，辅以修正向量角色触地
    }
    // 前进方向上的向量
    function getForwardVector() {
        playerMesh.getWorldDirection(playerDirection);
        playerDirection.y = 0;
        playerDirection.normalize();
        return playerDirection;

    }
    // 横移方向上的向量
    function getSideVector() {
        playerMesh.getWorldDirection(playerDirection);
        playerDirection.y = 0;
        playerDirection.normalize();
        playerDirection.cross(playerMesh.up);
        return playerDirection;

    }
    // 角色控制
    function controls(deltaTime) {
        const speedDelta = deltaTime * (playerOnFloor ? 25 : 8);
        if (keyStates['W']) {
            playerSpeed.add(getForwardVector().multiplyScalar(speedDelta));

        }
        if (keyStates['S']) {
            playerSpeed.add(getForwardVector().multiplyScalar(-speedDelta));
        }
        if (keyStates['A']) {
            playerSpeed.add(getSideVector().multiplyScalar(-speedDelta));
        }
        if (keyStates['D']) {
            playerSpeed.add(getSideVector().multiplyScalar(speedDelta));
        }
        if (playerOnFloor) {
            if (keyStates['Space']) {
                playerSpeed.y = 15;
            }

        }

    }
    //角色重置
    function teleportPlayerIfOob() {
        if (!(playerMesh instanceof THREE.Object3D)) return
        if (playerMesh.position.y <= 0) {
            playerCollider.start.set(0, 4.25, 0);
            playerCollider.end.set(0, 1, 0);
            playerCollider.radius = 0.35;
            playerMesh.position.copy(new THREE.Vector3().subVectors(playerCollider.start, playerFixVector));
            playerMesh.rotation.set(0, 0, 0);
        }
    }

    function animate() {
        const deltaTime = Math.min(0.05, clock.getDelta())
        // 控制
        controls(deltaTime);
        // 更新位置
        updatePlayer(deltaTime);
        // 复位检测
        teleportPlayerIfOob();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        if (mixer) {
            mixer.update(deltaTime);
        }


    }
});
</script>

<style>
.container {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
}

.container canvas {
    visibility: hidden;
}

#blocker {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
}

.bg {
    position: absolute;
    top: 46%;
    left: 49%;
    --base-color: #000000;
}

.loader {
    width: 60px;
    height: 40px;
    position: relative;
    display: inline-block;
    background-color: var(--base-color);
}

.loader::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #FFF;
    background-image: radial-gradient(circle 8px at 18px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, var(--base-color) 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
}

.loader::after {
    content: '';
    left: 35px;
    top: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #FFF;
    background-image: radial-gradient(circle 5px at 12px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, var(--base-color) 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
}

.loaderSpan {
    display: flex;
    color: white;
    margin-left: -6px;
}

@keyframes rotationBack {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}
</style>


