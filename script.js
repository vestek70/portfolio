let scene, camera, renderer, core;
function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    core = new THREE.Mesh(new THREE.IcosahedronGeometry(2,2), new THREE.MeshPhongMaterial({color:0x00f2ff, wireframe:true, transparent:true, opacity:0.1}));
    scene.add(core, new THREE.AmbientLight(0xffffff, 0.5));
    camera.position.z = 5;
}
function animate() {
    requestAnimationFrame(animate);
    core.rotation.y += 0.002;
    renderer.render(scene, camera);
}
window.onload = () => {
    init3D(); animate();
    const obs = new IntersectionObserver(e => e.forEach(en => { if(en.isIntersecting) en.target.classList.add('active') }));
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
};