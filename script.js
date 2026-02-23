let scene, camera, renderer, core;

function init3D() {
    const container = document.getElementById('canvas-container');
    if(!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x00f2ff, wireframe: true, transparent: true, opacity: 0.08 });
    core = new THREE.Mesh(geometry, material);
    scene.add(core);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light, new THREE.AmbientLight(0xffffff, 0.2));
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    if(core) { core.rotation.y += 0.001; core.rotation.x += 0.001; }
    if(renderer) renderer.render(scene, camera);
}

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
    if(!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});