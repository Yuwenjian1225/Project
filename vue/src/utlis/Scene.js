
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}


class Scene {
    constructor(model) {
        if (model != null) {
            _defineProperty(this, "render", () => {
                for (var ii = 0; ii < this.views.length; ++ii) {
                  var view = this.views[ii];
                  var camera = view.camera;
          
                  var bottom = Math.floor(this.h * view.bottom);
                  var height = Math.floor(this.h * view.height);
                  this.renderer.setViewport(0, 0, this.w, this.h);
                  this.renderer.setScissor(0, bottom, this.w, height);
                  this.renderer.setScissorTest(true);
          
                  camera.aspect = this.w / this.h;
                  this.renderer.render(this.scene, camera);
                }
              }); _defineProperty(this, "onResize",() => {
                  this.w = window.innerWidth;
                  this.h = window.innerHeight;
          
                  for (var ii = 0; ii < this.views.length; ++ii) {
                    var view = this.views[ii];
                    var camera = view.camera;
                    camera.aspect = this.w / this.h;
                    let camZ = (screen.width - this.w * 1) / 3;
                    camera.position.z = camZ < 180 ? 180 : camZ;
                    camera.updateProjectionMatrix();
                  }
          
                  this.renderer.setSize(this.w, this.h);
                  this.render();
                });
              this.views = [{ bottom: 0, height: 1 }, { bottom: 0, height: 0 }];
              this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
              this.renderer.setSize(window.innerWidth, window.innerHeight);
              this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
              this.renderer.setPixelRatio(window.devicePixelRatio); document.body.appendChild(this.renderer.domElement); // scene
              this.scene = new THREE.Scene();
              for (var _ii = 0; _ii < this.views.length; ++_ii) {
                var _view = this.views[_ii];
                var _camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
                _camera.position.fromArray([0, 0, 180]);
                _camera.layers.disableAll();
                _camera.layers.enable(_ii);
                _view.camera = _camera; _camera.lookAt(new THREE.Vector3(0, 5, 0));
              } 
              //light
              this.light = new THREE.PointLight(0xffffff, 100000);
              this.light.position.z = 150;
              this.light.position.x = 70;
              this.light.position.y = -20;
              this.scene.add(this.light);
              this.softLight = new THREE.AmbientLight(0xffffff, 10);
              this.scene.add(this.softLight); 
              this.onResize();
              window.addEventListener('resize', this.onResize, false);
              var edges = new THREE.EdgesGeometry(model.children[0].geometry);
              let line = new THREE.LineSegments(edges); line.material.depthTest = false;
              line.material.opacity = 0.5; line.material.transparent = true;
              line.position.x = 0.5;
              line.position.z = -1;
              line.position.y = 0.2;
              this.modelGroup = new THREE.Group();
              model.layers.set(0); line.layers.set(1);
              this.modelGroup.add(model);
              this.modelGroup.add(line);
              this.scene.add(this.modelGroup);
   
        } else {
            console.log(0)
        }

    }
}

export default Scene;