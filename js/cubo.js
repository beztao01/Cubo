// Generamos la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color (0x333333);

//Agregamos una camara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
);

// Renderizamos
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Agregamos Geometria
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh (geometry, material);

//agrega el cubo a la escena y posicionamos la camara
scene.add(cube);
camera.position.z =5;

//UwU 
renderer.render(scene, camera);