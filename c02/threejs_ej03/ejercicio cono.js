// Variables globales
var scene, camera, renderer, cone, controls;

// Inicialización de la escena
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Crear la geometría del cono personalizado
  var geometry = new THREE.Geometry();
  var radius = 1;
  var height = 2;
  var segments = 20;

