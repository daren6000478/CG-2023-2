// Paso 2: Crear una Escena, Cámara y Renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

// Paso 3: Crear una Geometría Personalizada (Tubo)
const path = new THREE.CurvePath();
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-2, 0, 0),
  new THREE.Vector3(-1, 1, 0),
  new THREE.Vector3(1, 1, 0),
  new THREE.Vector3(2, 0, 0)
]);
path.add(curve);

const tubeGeometry = new THREE.TubeGeometry(path, 64, 0.5, 8, false);

// Paso 5: Crear una Malla (Objeto 3D)
const customMesh = new THREE.Mesh(tubeGeometry, new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }));
scene.add(customMesh);

// Paso 6: Configurar la Cámara y Renderizar
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Agrega controles para rotar el tubo
  customMesh.rotation.x += 0.01;
  customMesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
