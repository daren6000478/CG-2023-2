    <script>
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