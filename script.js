// --- 3D BACKGROUND (Subtle Spheres) ---
let scene, camera, renderer, core;

function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Геометрия сферы (еле заметная)
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x00f2ff, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.08 // UX: очень тускло, чтобы не отвлекать
    });
    core = new THREE.Mesh(geometry, material);
    scene.add(core);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light, new THREE.AmbientLight(0xffffff, 0.2));
    
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    core.rotation.y += 0.001;
    core.rotation.x += 0.001;
    renderer.render(scene, camera);
}

// --- SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

window.addEventListener('load', () => {
    init3D();
    animate();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});