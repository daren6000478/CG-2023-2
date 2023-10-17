// Crear una escena
var scene = new THREE.Scene();

// Crear una cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un cubo
var cubeGeometry = new THREE.BoxGeometry();
var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -2;

// Crear una esfera
var sphereGeometry = new THREE.SphereGeometry();
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 2;

// Crear un toro (donut)
var torusGeometry = new THREE.TorusGeometry();
var torusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var torus = new THREE.Mesh(torusGeometry, torusMaterial);

// Agregar los objetos a la escena
scene.add(cube);
scene.add(sphere);
scene.add(torus);

// Renderizar la escena
var animate = function () {
  requestAnimationFrame(animate);
  // Aplicar el Z-Buffer para detectar las superficies ocultas
  renderer.render(scene, camera);
};

animate();
