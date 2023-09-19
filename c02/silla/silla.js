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
    backrest.position.set(0, legHeight + chairHeight + chairThickness / 2 + 0.2, -0.2); // Ajustar posición en Z
    backrest.rotation.x = Math.PI / 2; // Rotar el cilindro verticalmente
    return backrest;
}

