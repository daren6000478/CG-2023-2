
   <script>
        // Paso 1: Configuración del Entorno
        const scene = new THREE.Scene();
        const cameraPerspectiva = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const cameraOrtogonal = new THREE.OrthographicCamera(
            window.innerWidth / -2, window.innerWidth / 2,
            window.innerHeight / 2, window.innerHeight / -2,
            1, 1000
        );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Paso 2: Creación de Objetos
        const geometryCubo = new THREE.BoxGeometry();
        const materialCubo = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cubo = new THREE.Mesh(geometryCubo, materialCubo);

        const geometryEsfera = new THREE.SphereGeometry();
        const materialEsfera = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const esfera = new THREE.Mesh(geometryEsfera, materialEsfera);

        // Paso 3: Posicionamiento y Orientación
        cubo.position.x = -2;
        esfera.position.x = 2;

        // Paso 4: Proyección Perspectiva
        cameraPerspectiva.position.z = 5;

        // Paso 5: Proyección Ortogonal
        cameraOrtogonal.position.z = 5;

        // Paso 6: Alternancia de Cámaras
        let cameraActual = cameraPerspectiva;

        // Agregar objetos a la escena
        scene.add(cubo);
        scene.add(esfera);

        // Interacción básica de la cámara
        let isDragging = false;
        let previousX;

        document.addEventListener('mousedown', (event) => {
            isDragging = true;
            previousX = event.clientX;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('mousemove', (event) => {
            if (!isDragging) return;

            const delta = event.clientX - previousX;
            cameraActual.rotation.y += delta * 0.01;
            previousX = event.clientX;
            renderer.render(scene, cameraActual);
        });

        // Función de renderizado
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, cameraActual);
        }

        animate();
    </script>