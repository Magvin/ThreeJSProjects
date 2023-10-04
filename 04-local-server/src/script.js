import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as lil from 'lil-gui';


// Start of the code
THREE.ColorManagement.enabled = false

// Debug panel

const gui = new lil.GUI();

// Cursor

const cursor = {
    x:0,
    y:0
}

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
}

window.addEventListener('resize', (ev)=> {
    size.width = window.innerWidth
    size.height = window.innerHeight

    // Updating aspect
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(size.width, size.height)

    // Pixel resize
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,  2))


})

window.addEventListener('dblclick', ()=> {
    const canvas = document.querySelector('.webgl');
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    //  Safari
    if(!fullscreenElement) {
        if(canvas.requestFullscreen) {
        canvas.requestFullscreen();
        return;
        } else if(canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    }
    if(document.exitFullscreen) {
    document.exitFullscreen();
    return;
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }

})

window.addEventListener('mousemove', (ev) => {
 const xPos = ev.clientX / size.width - 0.5;
 const yPos = -(ev.clientY / size.height - 0.5);
 cursor.x = xPos;
 cursor.y = yPos;
})



const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);
// Green is Y
// Blue is Z
// Red is X

scene.add(axesHelper)

// Rotation by Euler
// Half rotation is equal to PI 3.14159 / 2

const positionsArray = new Float32Array([0,0,0,0,1,0,1,0,0]);

const positionsAttributes = new THREE.BufferAttribute(positionsArray,3)

const geometryCustom = new THREE.BufferGeometry()
geometryCustom.setAttribute('position', positionsAttributes)
// Objects
const material =  new THREE.MeshBasicMaterial({color:0x0000ff, wireframe: true })
const mesh =  new THREE.Mesh(
    geometryCustom,
    material
)
scene.add(mesh)

gui
    .add(mesh.position, 'y')
    .name('elevation')

gui.addColor(material,'color')

const group = new THREE.Group();
// scene.add(group)

const cube = [{position:[1, 1, 1], color:0xff0000, x: 0 },{position: [1, 1, 1], color: 0x00ff00, x: -2}, {position: [1,1,1], color: 0x0000ff,x: 2}].map(({position, color, x})=> {
    const mesh =  new THREE.Mesh(
        new THREE.BoxGeometry(...position,),
        new THREE.MeshBasicMaterial({color, wireframe: true })
    )
        mesh.position.x = x;
    
    return mesh
})
console.log(cube)
group.add(...cube)
// Size



// Camera 
// y - up
// x - to the right
// z - toward us

const aspectRatio = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 1000)
// const camera = new THREE.OrthographicCamera(-3 * aspectRatio,3 * aspectRatio, 3, -3)
camera.position.z = 3;
camera.lookAt(group.position)

scene.add(camera)

// Controls
const controls = new OrbitControls(camera,document.querySelector('.webgl'))
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})
// After instantiating the renderer
renderer.outputColorSpace = THREE.LinearSRGBColorSpace

renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,  2))

// Clock for adjusting FPS

const clock = new THREE.Clock()

// Animations

// gsap.to(group.position, {
//     duration: 1,
//     delay: 1,
//     x: 2
// })

const tick = () => {

    // // Adapting FPS

    // const elapsedTime = clock.getElapsedTime()

    // // Update position

    // camera.position.x = cursor.x * 3
    // camera.position.y = cursor.y * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2 ) * 3
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2 ) * 3
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(group.position)

    
    // Floating from top to bottom 
    // group.position.y = Math.sin(elapsedTime)
    // group.position.x = Math.cos(elapsedTime)

    controls.update()

    renderer.render(scene ,camera)

    window.requestAnimationFrame(tick)
}
tick()
