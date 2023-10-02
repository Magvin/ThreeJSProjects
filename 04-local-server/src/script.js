import * as THREE from 'three';

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);
// Green is Y
// Blue is Z
// Red is X

scene.add(axesHelper)

// Rotation by Euler
// Half rotation is equal to PI 3.14159 / 2


// Objects

const group = new THREE.Group();
group.position.y = 1
scene.add(group)

const cube = [{position:[1, 1, 1], color:0xff0000, x: 0 },{position: [1, 1, 1], color: 0x00ff00, x: -2}, {position: [1,1,1], color: 0x0000ff,x: 2}].map(({position, color, x})=> {
    const mesh =  new THREE.Mesh(
        new THREE.BoxGeometry(...position),
        new THREE.MeshBasicMaterial({color })
    )
        mesh.position.x = x;
    
    return mesh
})
console.log(cube)
group.add(...cube)
// Size

const size = {
    width: 800,
    height: 600,
}

// Camera 
// y - up
// x - to the right
// z - toward us

const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3;

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})

renderer.setSize(size.width, size.height)
renderer.render(scene ,camera)
