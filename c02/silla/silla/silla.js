import { OrbitControls } from 'OrbitControls.js';

// Constantes para las medidas
const chairWidth = 0.8;
const chairHeight = 0.2;
const chairThickness = 0.2;
const legHeight = 1.0;
const legWidth = 0.1;
const backrestRadius = 0.4;

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara en perspectiva
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 2);
camera.lookAt(0, 1, 0);

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función para crear una pata de la silla
function createLeg(x, z) {
    const legGeometry = new THREE.BoxGeometry(legWidth, legHeight, legWidth);
    const legMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 });
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(x, legHeight / 2, z);
    return leg;
}

// Función para crear el asiento de la silla
function createSeat() {
    const seatGeometry = new THREE.BoxGeometry(chairWidth, chairThickness, chairWidth);
    const seatMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(0, legHeight + chairThickness / 2, 0);
    return seat;
}

// Función para crear el respaldo de la silla
function createBackrest() {
    const backrestGeometry = new THREE.CylinderGeometry(backrestRadius, backrestRadius, chairThickness, 32);
    const backrestMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
    const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
    backrest.position.set(0, legHeight + chairHeight + chairThickness / 2 + 0.4, -0.2); // Ajustar posición en Y y Z
    backrest.rotation.x = Math.PI / 2; // Rotar el cilindro verticalmente
    return backrest;
}

// Crear las cuatro patas
const frontLeftLeg = createLeg(-chairWidth / 2 + legWidth / 2, -chairWidth / 2 + legWidth / 2);
const frontRightLeg = createLeg(-chairWidth / 2 + legWidth / 2, chairWidth / 2 - legWidth / 2);
const backLeftLeg = createLeg(chairWidth / 2 - legWidth / 2, -chairWidth / 2 + legWidth / 2);
const backRightLeg = createLeg(chairWidth / 2 - legWidth / 2, chairWidth / 2 - legWidth / 2);

// Crear el asiento
const seat = createSeat();

// Crear el respaldo y unirlo al asiento
const backrest = createBackrest();

// Agregar todos los elementos a la escena
scene.add(frontLeftLeg);
scene.add(frontRightLeg);
scene.add(backLeftLeg);
scene.add(backRightLeg);
scene.add(seat);
scene.add(backrest);

// Agregar una luz para mejorar la visibilidad
const light = new THREE.PointLight(0xffffff);
light.position.set(2, 3, 4);
scene.add(light);

// Variable para alternar entre perspectiva y ortogonal
let isPerspective = true;

// Función para alternar entre perspectiva y ortogonal
function toggleCamera() {
    if (isPerspective) {
        camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            -1000,
            1000
        );
        isPerspective = false;
    } else {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(2, 2, 2);
        isPerspective = true;
    }

    camera.lookAt(0, 1, 0);
}

// Agregar evento de teclado para alternar entre perspectiva y ortogonal
document.addEventListener('keydown', (event) => {
    if (event.key === 'o' || event.key === 'O') {
        toggleCamera();
    }
});

// Agregar controles OrbitControls para la cámara
const controls = new OrbitControls(camera, renderer.domElement);

// Configurar los controles
controls.enableDamping = true; // Habilita el amortiguamiento para movimientos suaves
controls.dampingFactor = 0.05; // Factor de amortiguamiento
controls.screenSpacePanning = false; // Panning en el espacio de la pantalla deshabilitado
controls.minDistance = 1; // Distancia mínima de zoom
controls.maxDistance = 10; // Distancia máxima de zoom
controls.update();

// Animación y renderizado
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update(); // Actualizar los controles
}

animate();
