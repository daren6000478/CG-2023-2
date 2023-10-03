// Paso 2: Creación de la Curva
const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(-5, 5, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 0),
    new THREE.Vector3(10, 0, 0),
], true);

// Paso 3: Generación del Tubo
const tubeRadius = 1; // Radio del tubo
const tubeSegments = 64; // Número de segmentos
const tubeGeometry = new THREE.TubeGeometry(curve, tubeSegments, tubeRadius, 8, false);
