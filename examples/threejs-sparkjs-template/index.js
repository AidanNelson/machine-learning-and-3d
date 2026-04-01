/*
This example uses the OrbitControls addon by importing it separately from the main THREE codebase.

*/
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { SplatMesh } from "@sparkjsdev/spark";

let scene, camera, renderer, my3DObject;

function init() {
  // create a scene in which all other objects will exist
  scene = new THREE.Scene();

  // create a camera and position it in space
  let aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.set(5, 5, 5); // place the camera in space
  camera.lookAt(0, 0, 0); // have the camera look at the origin

  // the renderer will actually show the camera view within our <canvas>
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // create a grid so we can understand the scene better
  let gridHelper = new THREE.GridHelper(25, 25);
  scene.add(gridHelper);

  // add orbit controls or another control setup
  let controls = new OrbitControls(camera, renderer.domElement);

  // create a few mesh objects to add to the scene
  for (let i = 0; i < 30; i++) {
    let geometry = new THREE.BoxGeometry(0.4,0.4,0.4);
    let material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
      roughness: Math.random(),
      metalness: Math.random(),
    });
    let mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    );
    mesh.rotation.set(Math.random(), Math.random(), Math.random());
    scene.add(mesh);
  }

  // create some lighting
  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // import a splat mesh
  const mySplat = new SplatMesh({ url: "./mushroom-compressed.ply" });
  mySplat.quaternion.set(1, 0, 0, 0);
  mySplat.scale.setScalar(5);
  scene.add(mySplat);

  loop();
}

function loop() {
  // finally, take a picture of the scene and show it in the <canvas>
  renderer.render(scene, camera);

  window.requestAnimationFrame(loop); // pass the name of your loop function into this function
}

init();
