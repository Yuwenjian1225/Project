import * as THREE from 'three' //导入整个 three.js核心库
import { EquirectangularReflectionMapping } from 'three' //导入纹理映射模块
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader' //导入RGB加载器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' //导入控制器模块，轨道控制器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //导入GLTF模块，模型解析器,根据文件格式来定
import api from '@/api/user.js'


class Base3d {
    constructor(selector) {
        this.container = document.querySelector(selector)
        this.camera
        this.scene
        this.renderer
        this.controls
        this.init()
        this.sceneAnimation()
        // 模型材质原始数据缓存
        this.originalMaterials = new Map()
        //模型材质列表
        this.modelMaterialList = {
            account: '',
            head: '',
            face: '',
            clothes: '',
            pants: '',
            shoes: '',
            head_name: '',
            face_name: '',
            clothes_name: '',
            pants_name: '',
            shoes_name: '',
            head_ref: 0,
            face_ref: 0,
            clothes_ref: 0,
            pants_ref: 0,
            shoes_ref: 0,
        }

        this.once = 0
        //模型动画列表
        this.modelAnimation
        //模型动画对象
        this.animationMixer
        this.animationColock = new THREE.Clock()
        //动画帧
        this.animationFrame
        // 动画构造器
        this.animateClipAction = null
        // 动画循环方式枚举
        this.loopMap = {
            LoopOnce: THREE.LoopOnce, // 只播放一次
            LoopRepeat: THREE.LoopRepeat,//循环播放
            LoopPingPong: THREE.LoopPingPong // 来回播放
        }
        api.getSession().then(res => {
            this.modelMaterialList.account = res.data
            api.getTexture({ account: this.modelMaterialList.account }).then(res => {
                this.modelMaterialList = res.data[0]
            })

        })
    }
    init() {
        //初始化场景
        this.initScene()
        //初始化相机
        this.initCamera()
        //初始化渲染器
        this.initRender()
        //初始化控制器，控制摄像头,控制器一定要在渲染器后
        this.initControls()
        // 添加物体模型
        this.addMesh()
        //监听场景大小改变，跳转渲染尺寸
        window.addEventListener("resize", this.onWindowResize.bind(this))
    }
    initScene() {
        this.scene = new THREE.Scene()
        // this.setEnvMap('079')
        var textureLoader = new THREE.TextureLoader();
        var texture = textureLoader.load(require('../assets/picture/back.jpg'));
        this.scene.background = texture
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(18, window.innerWidth / window.innerHeight, 0.25, 200)
        this.camera.position.set(0, 0, 30)
        this.camera.enableRotate = false;

    }
    initRender() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })//设置抗锯齿
        //设置屏幕像素比
        this.renderer.setPixelRatio(window.devicePixelRatio)
        //渲染的尺寸大小
        this.renderer.setSize(window.innerWidth * 0.3, window.innerHeight)
        //色调映射
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.renderer.autoClear = true
        this.renderer.outputColorSpace = THREE.SRGBColorSpace
        //曝光
        this.renderer.toneMappingExposure = 4
        this.renderer.shadowMap.enabled = false
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.container.appendChild(this.renderer.domElement)

        // 创建环境光
        const ambientLight = new THREE.AmbientLight(0xfffefe, 1.5)
        ambientLight.visible = true
        this.scene.add(ambientLight)
        // 创建平行光
        const directionalLight = new THREE.DirectionalLight('#fff', 0.5)
        directionalLight.position.set(0, 5, 10)
        directionalLight.castShadow = true
        directionalLight.visible = true
        this.scene.add(directionalLight)
        // 创建点光源
        // this.pointLight = new THREE.PointLight(0xffffff);
        // this.pointLight.intensity = 30.0
        // this.pointLight.position.set(0, 5, 2); //设置点光源位置
        // this.scene.add(this.pointLight); //将点光源添加至场景
    }
    render() {
        this.renderer.render(this.scene, this.camera)
    }
    sceneAnimation() {
        this.renderer.setAnimationLoop(this.render.bind(this))
    }
    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false;
        this.controls.minPolarAngle = Math.PI / 2;
        this.controls.maxPolarAngle = Math.PI / 2;
    }
    // 开始执行动画
    onStartModelAnimaion(config) {
        this.onSetModelAnimaion(config)
        cancelAnimationFrame(this.animationFrame)
        this.animationFrame = this.animationFrameFun();
    }
    // 设置模型动画
    onSetModelAnimaion({ animations, animationName, loop, timeScale, weight }) {
        this.animationMixer = new THREE.AnimationMixer(this.model)
        const clip = THREE.AnimationClip.findByName(animations, animationName)
        if (clip) {
            this.animateClipAction = this.animationMixer.clipAction(clip)
            this.animateClipAction.setEffectiveTimeScale(timeScale)
            this.animateClipAction.setEffectiveWeight(weight)
            this.animateClipAction.setLoop(this.loopMap[loop])
            this.animateClipAction.play()
        }
    }
    // 动画帧
    animationFrameFun() {
        this.animationFrame = requestAnimationFrame(() => this.animationFrameFun());
        if (this.animationMixer) {
            this.animationMixer.update(this.animationColock.getDelta())
        }

    }
    //加载模型
    setModel(modelName) {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader().setPath('files/gltf/')
            loader.load(modelName, (result) => {
                this.model = result.scene
                this.model.position.x = -1;
                this.model.position.y = -3.3;
                this.model.scale.x = 3
                this.model.scale.z = 3
                this.model.name = 'people'
                this.modelAnimation = result.animations || []
                this.scene.add(this.model)
                //更改皮肤
                this.changeTexture()
                resolve(true)
            })
        })

    }

    //重置模型
    reset() {
        this.scene.remove(this.model)
        this.resetModel('scene.glb')
    }
    resetModel(modelName) {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader().setPath('files/gltf/')
            loader.load(modelName, (result) => {
                this.model = result.scene
                this.model.position.x = -1;
                this.model.position.y = -3.3;
                this.model.scale.x = 3
                this.model.scale.z = 3
                this.model.name = 'people'
                this.modelAnimation = result.animations || []
                this.scene.add(this.model)
                this.modelMaterialList.head = '';
                this.modelMaterialList.face = '';
                this.modelMaterialList.clothes = '';
                this.modelMaterialList.pants = '';
                this.modelMaterialList.shoes = '';
                this.modelMaterialList.head_name = '';
                this.modelMaterialList.face_name = '';
                this.modelMaterialList.clothes_name = '';
                this.modelMaterialList.pants_name = '';
                this.modelMaterialList.shoes_name = '';
                this.modelMaterialList.head_ref = 0;
                this.modelMaterialList.face_ref = 0;
                this.modelMaterialList.clothes_ref = 0;
                this.modelMaterialList.pants_ref = 0;
                this.modelMaterialList.shoes_ref = 0;

                resolve(true)
            })
        })

    }
    addMesh() {
        this.scene.remove(this.model)
        this.setModel('scene.glb').then(() => {

        })
    }
    changeTexture() {
        var model = this.scene.getObjectByName("people");
        let modelMateria = this.modelMaterialList
        model.traverse(function (obj) {
            const geometry = new THREE.PlaneGeometry(200, 100);
            const texLoader = new THREE.TextureLoader();
            if (obj.name == "Object_1" && modelMateria.shoes != '' && modelMateria.shoes != null) {
                let item = modelMateria.shoes
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
            if (obj.name == "Object_2" && modelMateria.pants != '' && modelMateria.pants != null) {
                let item = modelMateria.pants
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
            if (obj.name == "Object_3" && modelMateria.clothes != '' && modelMateria.clothes != null) {
                let item = modelMateria.clothes
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
            if (obj.name == "Object_4" && modelMateria.face != '' && modelMateria.face != null) {
                let item = modelMateria.face
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
            if (obj.name == "Object_5" && modelMateria.head != '' && modelMateria.head != null) {
                let item = modelMateria.head
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
    onWindowResize() { //调整屏幕大小
        this.camera.aspect = window.innerWidth / window.innerHeight //摄像机宽高比例
        this.camera.updateProjectionMatrix() //相机更新矩阵，将3d内容投射到2d面上转换
        this.renderer.setSize(window.innerWidth * 0.3, window.innerHeight)
    }
    //更换头部材质贴图
    changeHead(item, dressed) {
        var model = this.scene.getObjectByName("people");
        this.modelMaterialList.head = item;
        this.modelMaterialList.head_name = dressed.name;
        this.modelMaterialList.head_ref = dressed.ref;
        model.traverse(function (obj) {
            if (obj.name == "Object_5") {
                const geometry = new THREE.PlaneGeometry(200, 100);
                const texLoader = new THREE.TextureLoader();
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
    //更换脸部材质贴图
    changeGlasses(item, dressed) {
        var model = this.scene.getObjectByName("people");
        this.modelMaterialList.face = item;
        this.modelMaterialList.face_name = dressed.name;
        this.modelMaterialList.face_ref = dressed.ref;
        model.traverse(function (obj) {
            if (obj.name == "Object_4") {
                const geometry = new THREE.PlaneGeometry(200, 100);
                const texLoader = new THREE.TextureLoader();
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
    //更换身体材质贴图
    changeClothes(item, dressed) {
        var model = this.scene.getObjectByName("people");
        this.modelMaterialList.clothes = item;
        this.modelMaterialList.clothes_name = dressed.name;
        this.modelMaterialList.clothes_ref = dressed.ref;
        model.traverse(function (obj) {
            if (obj.name == "Object_3") {
                const geometry = new THREE.PlaneGeometry(200, 100);
                const texLoader = new THREE.TextureLoader();
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
        });
    }
    //更换腿部材质贴图
    changePants(item, dressed) {
        var model = this.scene.getObjectByName("people");
        this.modelMaterialList.pants = item;
        this.modelMaterialList.pants_name = dressed.name;
        this.modelMaterialList.pants_ref = dressed.ref;
        model.traverse(function (obj) {
            if (obj.name == "Object_2") {
                const geometry = new THREE.PlaneGeometry(200, 100);
                const texLoader = new THREE.TextureLoader();
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
        });
    }
    //更换鞋子材质贴图
    changeShoes(item, dressed) {
        var model = this.scene.getObjectByName("people");
        this.modelMaterialList.shoes = item;
        this.modelMaterialList.shoes_name = dressed.name;
        this.modelMaterialList.shoes_ref = dressed.ref;
        model.traverse(function (obj) {
            if (obj.name == "Object_1") {
                const geometry = new THREE.PlaneGeometry(100, 100);
                const texLoader = new THREE.TextureLoader();
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
        });

    }
    //展示动画
    show() {
        if (this.once == 0) {
            this.once = 1 - this.once
            const animationName = this.modelAnimation[0].name
            const config = {
                animations: this.modelAnimation,
                timeScale: 1, // 播放速度
                weight: 1, // 动作幅度
                loop: "LoopRepeat",
                animationName // 播放的动画名
            }
            this.onStartModelAnimaion(config)
        } else {
            this.once = 1 - this.once
            if (this.animateClipAction) {
                this.animateClipAction.stop();
                this.animateClipAction = null; // 清除引用，可选  
            }
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null; // 清除引用  

        }

    }
    //保存模型
    save() {
        var link = document.createElement('a');
        var canvas = this.renderer.domElement;
        link.href = canvas.toDataURL("image/png");
        link.download = `${new Date().toLocaleString()}.png`
        link.click();
        api.userTexture(this.modelMaterialList).then(res => {
            if (res.data.affectedRows == 1) {
                return
            }
        })


    }

    //取出
    getModel() {
        let modelJSON = JSON.parse(localStorage.getItem('modelJSON'));
        let loaderObject = new THREE.ObjectLoader();
        let loadedMesh = loaderObject.parse(modelJSON);
        this.scene.add(loadedMesh);
    }



}

export default Base3d