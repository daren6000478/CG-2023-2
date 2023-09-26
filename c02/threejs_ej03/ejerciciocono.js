// Variables globales
let scene, camera, renderer, cone;

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
    createCustomConeGeometry();

    // Agregar iluminación
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
}

function createCustomConeGeometry() {
    // Crear una geometría personalizada (cono)
    const geometry = new THREE.Geometry();
    const radius = 2;
    const height = 5;
    const radialSegments = 20;
    const twoPi = 2 * Math.PI;

    for (let i = 0; i <= radialSegments; i++) {
        const theta = (i / radialSegments) * twoPi;
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);
        const y = (i / radialSegments) * height;

        geometry.vertices.push(new THREE.Vector3(x, y, z));
    }

    // Cargar una textura en formato .jpg
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('C:\Users\Estudiante\Desktop\threejs_ej03\obamna.jpg\'); // Reemplaza con la ruta correcta

    // Crear un material con textura
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Crear un objeto 3D (Malla) utilizando la geometría y el material
    cone = new THREE.Mesh(geometry, material);
    scene.add(cone);
}

function startInteractiveScene() {
    init();
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotación interactiva del cono
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    renderer.render(scene, camera);
}

window.onload = startInteractiveScene;
