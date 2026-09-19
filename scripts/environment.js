// ----- SETUP -----
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.set(0,2,5);

// BG Texture
scene.background = textureLoader.load('img/sceneBG.jpg')


// ----- LIGHT -----
renderer.shadowMap.enabled = true;

const ambientLight = new THREE.AmbientLight(0xBA7122,1);

const hemisphereLight = new THREE.HemisphereLight(0xE6BE95,0x687542,0.8);

const directionalLightSun = new THREE.DirectionalLight(0xFFF7D6);
directionalLightSun.position.set(0,3,-5.5);
directionalLightSun.castShadow = true;

const RoomLight = new THREE.PointLight(0xFFF1BA,7,30);
RoomLight.position.set(0,5.5,0.5);
RoomLight.castShadow = true;

// Depth Helper
const directionalLightRoom2 = new THREE.DirectionalLight(0xF0E9CC,-0.07);
directionalLightRoom2.position.set(7.6,7);
directionalLightRoom2.castShadow = true;

scene.add(ambientLight);
scene.add(hemisphereLight);
scene.add(directionalLightSun);
scene.add(RoomLight);
scene.add(directionalLightRoom2);

directionalLightSun.shadow.camera.left = -20;
directionalLightSun.shadow.camera.right = 20;
directionalLightSun.shadow.camera.top = 20;
directionalLightSun.shadow.camera.bottom = -20;
directionalLightSun.shadow.camera.near = 0.5;
directionalLightSun.shadow.camera.far = 50;
directionalLightSun.shadow.camera.updateProjectionMatrix();


// ----- ROOM BUILD -----
// Room Dimensions + Mats
const roomWidth = 17;
const roomHeight = 20;
const roomDepth = 6;
const wallMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/ginghamWallpaper.jpg')});
const floorMat = new THREE.MeshLambertMaterial({color: 0xD9CBB2, map: textureLoader.load('img/floor.jpg')});
const backWallMat = new THREE.MeshLambertMaterial({color: 0xF7F7E9});

// Floor
const floorGeo = new THREE.PlaneGeometry(roomWidth, roomDepth);
const floor = new THREE.Mesh(floorGeo, floorMat);

floor.rotateX(-0.5 * Math.PI)
floor.receiveShadow = true;

scene.add(floor);

// Left Wall
const lWallGeo = new THREE.PlaneGeometry(roomDepth, roomHeight);
const leftWall = new THREE.Mesh(lWallGeo, wallMat);

leftWall.rotateY(Math.PI / 2)
leftWall.position.set(-roomWidth / 2, roomHeight / 2, 0);
leftWall.receiveShadow = true;

scene.add(leftWall);

// Right Wall
const rWallGeo = new THREE.PlaneGeometry(roomDepth, roomHeight);
const rightWall = new THREE.Mesh(rWallGeo, wallMat);

rightWall.rotateY(-Math.PI / 2)
rightWall.position.set(roomWidth / 2, roomHeight / 2, 0);
rightWall.receiveShadow = true;

scene.add(rightWall);

// Back Wall
const bWallGeo1 = new THREE.PlaneGeometry(4, roomHeight);
const backWall1 = new THREE.Mesh(bWallGeo1, backWallMat);

backWall1.position.set(-8, roomHeight / 2, -roomDepth / 2);
backWall1.receiveShadow = true;

const bWallGeo2 = new THREE.PlaneGeometry(1, roomHeight);
const backWall2 = new THREE.Mesh(bWallGeo2, backWallMat);

backWall2.position.set(8, roomHeight / 2, -roomDepth / 2);
backWall2.receiveShadow = true;


const bWallGeo3 = new THREE.PlaneGeometry(roomWidth, 1);
const backWall3 = new THREE.Mesh(bWallGeo3, backWallMat);

backWall3.position.set(0, 8, -roomDepth / 2);
backWall3.receiveShadow = true;


const bWallGeo4 = new THREE.PlaneGeometry(roomWidth, 6);
const backWall4 = new THREE.Mesh(bWallGeo4, backWallMat);

backWall4.position.set(0, -1.5, -roomDepth / 2 );
backWall4.receiveShadow = true;

scene.add(backWall1);
scene.add(backWall2);
scene.add(backWall3);
scene.add(backWall4);

// Extruded Wall
const extraWallGeo = new THREE.BoxGeometry(3,20,1);
const extraWall = new THREE.Mesh(extraWallGeo, backWallMat);

extraWall.position.set(-7.5,0,-2.5);

scene.add(extraWall);

// Window
const windowGeo = new THREE.PlaneGeometry(13.5,6);
const windowMat = new THREE.MeshStandardMaterial({
    color: 0xFCDDA7,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
});
const windowMesh = new THREE.Mesh(windowGeo,windowMat);

windowMesh.position.set(0.75,4.5,-3);
scene.add(windowMesh);

// Window Frame
const windowFrameLengthGeo = new THREE.BoxGeometry(0.3,13.5,0.01);
const windowFrameMat = new THREE.MeshLambertMaterial({color: 0x3B0E0E});

const windowFrameLength = new THREE.Mesh(windowFrameLengthGeo,windowFrameMat);
windowFrameLength.position.set(1,4.5,-4);

scene.add(windowFrameLength);


const windowFrameWidthGeo = new THREE.BoxGeometry(13,0.3,0.01);
const windowFrameWidth = new THREE.Mesh(windowFrameWidthGeo,windowFrameMat);
windowFrameWidth.position.set(1,4,-4);

scene.add(windowFrameWidth);

// ----- CURTAINS -----
// Curtain Rod
const curtainRodGeo = new THREE.CapsuleGeometry(0.1,13.7,4,8,1);
const curtainRod = new THREE.Mesh(curtainRodGeo,brownPatternMat);
curtainRod.position.set(1,7.7,-2.9);
curtainRod.rotateZ(0.5 * Math.PI);
curtainRod.castShadow = true;
curtainRod.receiveShadow = true;

scene.add(curtainRod);

// Curtain Top - Lace
const curtainMat = new THREE.MeshLambertMaterial({color : 0xFFFFFF, map: textureLoader.load('img/lace.jpg'), side: THREE.DoubleSide});
const curtainTrim = new THREE.CircleGeometry(0.9,32,0,Math.PI);
curtainTrim.rotateZ(Math.PI);
curtainTrim.castShadow = true;
curtainTrim.receiveShadow = true;

const curtainTrim1 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim1.position.set(-5.1,7.7,-2.9);

const curtainTrim2 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim2.position.set(-3.6,7.7,-2.9);

const curtainTrim3 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim3.position.set(-2.1,7.7,-2.9);

const curtainTrim4 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim4.position.set(-0.6,7.7,-2.9);

const curtainTrim5 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim5.position.set(0.9,7.7,-2.9);

const curtainTrim6 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim6.position.set(2.4,7.7,-2.9);

const curtainTrim7 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim7.position.set(3.9,7.7,-2.9);

const curtainTrim8 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim8.position.set(5.4,7.7,-2.9);

const curtainTrim9 = new THREE.Mesh(curtainTrim,curtainMat);
curtainTrim9.position.set(6.9,7.7,-2.9);

scene.add(curtainTrim1);
scene.add(curtainTrim2);
scene.add(curtainTrim3);
scene.add(curtainTrim4);
scene.add(curtainTrim5);
scene.add(curtainTrim6);
scene.add(curtainTrim7);
scene.add(curtainTrim8);
scene.add(curtainTrim9);

// Curtain Top
const curtainTopGeo = new THREE.CircleGeometry(2,32,0,Math.PI);
curtainTopGeo.rotateZ(Math.PI);
curtainTopGeo.castShadow = true;
curtainTopGeo.receiveShadow = true;

const curtainTop1 = new THREE.Mesh(curtainTopGeo,greenTextureMat);
curtainTop1.position.set(-4,7.8,-2.9);

const curtainTop2 = new THREE.Mesh(curtainTopGeo,greenTextureMat);
curtainTop2.position.set(-0.7,7.8,-2.9);

const curtainTop3 = new THREE.Mesh(curtainTopGeo,greenTextureMat);
curtainTop3.position.set(2.5,7.8,-2.9);

const curtainTop4 = new THREE.Mesh(curtainTopGeo,greenTextureMat);
curtainTop4.position.set(5.8,7.8,-2.9);

scene.add(curtainTop1);
scene.add(curtainTop2);
scene.add(curtainTop3);
scene.add(curtainTop4);

// Curtain Side
const curtainSideGeo = new THREE.PlaneGeometry(1.6,7.3);

const curtainSideL = new THREE.Mesh(curtainSideGeo,greenTextureMat);
curtainSideL.position.set(-5.2,4,-2.95);

const curtainSideR = new THREE.Mesh(curtainSideGeo,greenTextureMat);
curtainSideR.position.set(7.2,4,-2.95);

scene.add(curtainSideL);
scene.add(curtainSideR);


// ----- RENDERER -----
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


/*
// ----- HELPERS -----
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const dLightHelper1 = new THREE.DirectionalLightHelper(directionalLightSun);
scene.add(dLightHelper1);

const pLightHelper2 = new THREE.PointLightHelper(RoomLight);
scene.add(pLightHelper2);

const dLightHelper3 = new THREE.DirectionalLightHelper(directionalLightRoom2);
scene.add(dLightHelper3);

const dLightShadowHelper1 = new THREE.CameraHelper(directionalLightSun.shadow.camera);
scene.add(dLightShadowHelper1);
*/

// FINAL