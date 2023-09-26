// Variables globales
let scene, camera, renderer, cone, controls;

function init() {
    // Crear una escena
    scene = new THREE.Scene();

    // Crear una cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Crear un renderizador
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Crear una geometría personalizada (cono)
    createCustomCone();

    // Agregar iluminación
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Iniciar controles para el usuario
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}