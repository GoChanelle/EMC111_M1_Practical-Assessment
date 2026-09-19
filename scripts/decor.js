// ----- BED DECOR -----
// Pillow 1
const pillow1Geo = new THREE.RoundedBoxGeometry(2.5,0.5,1);
const pillow1 = new THREE.Mesh(pillow1Geo,patchworkMat);

pillow1.position.set(7.2,1.8,-1.8);
pillow1.castShadow = true;
pillow1.rotateX(-2);

scene.add(pillow1);

// Pillow 2
const pillow2Geo = new THREE.RoundedBoxGeometry(2.5,0.5,1);
const pillow2 = new THREE.Mesh(pillow2Geo,patchworkMat);
pillow2.position.set(4.8,1.8,-1.8);
pillow2.castShadow = true;
pillow2.rotateX(-2);

scene.add(pillow2);

// Heart Pillow
const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
heartGeometry.computeBoundingBox();
const heartCenter = new THREE.Vector3();
heartGeometry.boundingBox.getCenter(heartCenter);
heartGeometry.translate(-heartCenter.x, -heartCenter.y, -heartCenter.z);

const heart = new THREE.Mesh(heartGeometry, meatMat);

heart.scale.set(0.10, 0.10, 0.10);
heart.rotateZ(Math.PI);
heart.position.set(7.7, 1.8, -1.2);
heart.rotateX(7.5);
heart.rotateY(7);
heart.rotateZ(5);
heart.castShadow = true;
scene.add(heart);

// Capsule Pillow
const capsuleGeo = new THREE.CapsuleGeometry(0.37, 2.5, 4, 8, 1);
const capsuleMat = new THREE.MeshLambertMaterial({color: 0x789657});
const capsulePillow = new THREE.Mesh(capsuleGeo, capsuleMat);

capsulePillow.position.set(5.6,1.8,-1.2);
capsulePillow.rotateZ(4.7);
capsulePillow.castShadow = true;

scene.add(capsulePillow);

// Sphere Pillow
const sphereGeo = new THREE.SphereGeometry(0.3, 32, 16);
const spherePillow = new THREE.Mesh(sphereGeo, greenTextureMat);
spherePillow.position.set(6.5,1.7,-0.6);
spherePillow.castShadow = true;

scene.add(spherePillow);


// ----- BED DECOR -----
// Laptop
const laptopMat = new THREE.MeshLambertMaterial({color: 0x2E2618});

const laptopbBottomGeo = new THREE.BoxGeometry(2,0.1,1);
const laptopBottom = new THREE.Mesh(laptopbBottomGeo,laptopMat);
laptopBottom.position.set(-1,1.5,-2.7);
laptopBottom.castShadow = true;

const laptopbTopGeo = new THREE.BoxGeometry(2,1,1);
const laptopbTop = new THREE.Mesh(laptopbTopGeo,laptopMat);
laptopbTop.position.set(-1,2,-3.4);
laptopbTop.castShadow = true;

const laptopScreenGeo = new THREE.PlaneGeometry(1.5,0.7);
const laptopScreenMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/marvelRivals.jpg'), side: THREE.DoubleSide});
const laptopScreen = new THREE.Mesh(laptopScreenGeo,laptopScreenMat);
laptopScreen.position.set(-0.9,2,-2);

scene.add(laptopBottom);
scene.add(laptopbTop);
scene.add(laptopScreen);

// Laptop Mouse
const mousegeo = new THREE.CapsuleGeometry(0.2,0.1,8,10,1);
const mouseMat = new THREE.MeshLambertMaterial({color: 0x7CC1C4});
const mouse = new THREE.Mesh(mousegeo,mouseMat);
mouse.position.set(0.4,1.4,-3);
mouse.rotateX(-0.5 * Math.PI);

scene.add(mouse);

// Lamp
const lampBottomGeo = new THREE.CylinderGeometry(0.2,0.3,1,32);
const LampBottomMat = new THREE.MeshLambertMaterial({color: 0xF2DFBF});
const lampBottom = new THREE.Mesh(lampBottomGeo,LampBottomMat );
lampBottom.position.set(2,1.9,-2.8);
lampBottom.castShadow = true;

const mushroomPoints = [];
const capRadius = 0.7;       // widest point of the cap
const capHeight = 0.5;       // how tall the dome rises
const stemRadius = 0.15;     // where it narrows to meet the stem
const underCurl = 0.15;      // how much the edge curls under

mushroomPoints.push(new THREE.Vector2(stemRadius, 0));

for (let i = 0; i <= 6; i++) {
    const angle = (Math.PI / 2) * (i / 6);
    const px = stemRadius + (capRadius - stemRadius) * Math.sin(angle);
    const py = -underCurl * Math.sin(angle) * 0.5;
    mushroomPoints.push(new THREE.Vector2(px, py));
}

for (let i = 0; i <= 10; i++) {
    const angle = Math.PI * (i / 10);
    const px = capRadius * Math.cos(angle * 0.5);
    const py = capHeight * Math.sin(angle * 0.5);
    mushroomPoints.push(new THREE.Vector2(Math.max(px, 0), py));
}

const mushroomCapGeo = new THREE.LatheGeometry(mushroomPoints, 32);
const mushroomCap = new THREE.Mesh(mushroomCapGeo,redWhiteDotsMat);

mushroomCap.position.set(2,2.3,-2.8);
mushroomCap.castShadow = true;

scene.add(mushroomCap);
scene.add(lampBottom);

// Mirror
const mirrorMat = new THREE.MeshLambertMaterial({color: 0x55633F});

const mirrorBottomGeo = new THREE.CylinderGeometry(0.3,0.3,0.05,32);
const mirrorBottom = new THREE.Mesh(mirrorBottomGeo,mirrorMat);

mirrorBottom.position.set(2.3,1.5,0.1);
mirrorBottom.castShadow = true;

const mirrorStandGeo = new THREE.CylinderGeometry(0.07,0.07,0.7,32);
const mirrorStand = new THREE.Mesh(mirrorStandGeo,mirrorMat);

mirrorStand.position.set(2.3,1.6,0.1);
mirrorStand.castShadow = true;

const mirrorBackGeo = new THREE.CylinderGeometry(0.4,0.4,0.05,32);
const mirrorBack = new THREE.Mesh(mirrorBackGeo,mirrorMat);

mirrorBack.position.set(2.3,2.1,0.1);
mirrorBack.rotateY(-1);
mirrorBack.rotateX(-0.5 * Math.PI);
mirrorBack.castShadow = true;

const mirrorScreenGeo = new THREE.CircleGeometry(0.35, 32);
const mirrorScreenMat = new THREE.MeshPhongMaterial({color: 0xF2EFE9});
const mirrorScreen = new THREE.Mesh(mirrorScreenGeo, mirrorScreenMat);

mirrorScreen.position.set(2.2, 2.1, 0.3);
mirrorScreen.rotateY(-1);
mirrorScreen.castShadow = true;

scene.add(mirrorBack);
scene.add(mirrorStand);
scene.add(mirrorBottom);
scene.add(mirrorScreen)

// Cube Decor
const cubeDecorGeo = new THREE.BoxGeometry(0.5,0.5,0.5);
const cubeDecor = new THREE.Mesh(cubeDecorGeo,meatMat);

cubeDecor.position.set(2.8,1.7,-2);
cubeDecor.castShadow = true;

scene.add(cubeDecor);

// Dices
const diceMat = new THREE.MeshPhongMaterial({color: 0x85074E});

const dodecaDiceGeo = new THREE.DodecahedronGeometry(0.15);
const dodecahedronDice = new THREE.Mesh(dodecaDiceGeo,diceMat);

dodecahedronDice.position.set(2.1,1.6,-1.5)
dodecahedronDice.castShadow = true;

const octaDiceGeo = new THREE.OctahedronGeometry(0.15);
const octahedronDice = new THREE.Mesh(octaDiceGeo,diceMat);

octahedronDice.position.set(2.4,1.6,-1.4);
octahedronDice.rotateZ(7);
octahedronDice.castShadow = true;

scene.add(octahedronDice);
scene.add(dodecahedronDice);

// Make-up Box (Or just box?)
const makeUpBoxGeo = new THREE.BoxGeometry(0.8,0.2,0.3);
const makeUpBox = new THREE.Mesh(makeUpBoxGeo,LampBottomMat);

makeUpBox.position.set(2.3,1.6,1);
makeUpBox.castShadow = true;

const makeUpTopGeo = new THREE.CylinderGeometry(0.17,0.17,0.8,8);
const makeUpTop = new THREE.Mesh(makeUpTopGeo,redWhiteDotsMat);

makeUpTop.position.set(2.3,1.7,1);
makeUpTop.rotateZ(0.5 * Math.PI);
makeUpTop.castShadow = true;

scene.add(makeUpTop);
scene.add(makeUpBox);

// Books (hypothetically...)
const bookGeo = new THREE.RoundedBoxGeometry(0.4,1,0.6);
const book1 = new THREE.Mesh(bookGeo,fawnFurMat);

book1.position.set(-5.5,2,-2.3);
book1.castShadow = true;

const book2 = new THREE.Mesh(bookGeo,greenTextureMat);

book2.position.set(-5.1,2,-2.3);
book2.castShadow = true;

const book3 = new THREE.Mesh(bookGeo,checkerPanelsMat);

book3.position.set(-4.7,2,-2.3);
book3.castShadow = true;

scene.add(book1);
scene.add(book2);
scene.add(book3);

// Eye
const eyeGeo = new THREE.SphereGeometry(0.3,32,16);
const eye = new THREE.Mesh(eyeGeo,eyeMat);

eye.position.set(-4.25,1.7,-2.3);
eye.rotateY(-0.5 * Math.PI);
eye.castShadow = true;

scene.add(eye);


// ----- BOX DECOR -----
// Torus Pillow
const torusPillowGeo = new THREE.TorusGeometry(0.4,0.2,12,48);
const torusPillow = new THREE.Mesh(torusPillowGeo,patchworkMat);

torusPillow.position.set(-7.8,1.8,-1.6);
torusPillow.rotateY(4);
torusPillow.rotateX(3.7);
torusPillow.castShadow = true;

scene.add(torusPillow);

// Torus Knot Pillow
const knotPillowGeo = new THREE.TorusKnotGeometry(0.18,0.18,100,16);
const torusKnot = new THREE.Mesh(knotPillowGeo,meatMat);
torusKnot.position.set(-7,1.6,-1.8);
torusKnot.rotateX(2);
torusKnot.castShadow = true;

scene.add(torusKnot);


// ----- WALL DECOR -----
// CDs on Extruded Wall
const cdGeo = new THREE.RingGeometry(0.06,0.4,32);
cdGeo.rotateY(Math.PI / 2);
cdGeo.castShadow = true;
cdGeo.receiveShadow = true;

const cd1mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/cdCover1.png'), side: THREE.DoubleSide});
const cd1 = new THREE.Mesh(cdGeo,cd1mat);
cd1.position.set(-5.9,6,-2.4);

const cd2mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/cdCover2.png'), side: THREE.DoubleSide});
const cd2 = new THREE.Mesh(cdGeo,cd2mat);
cd2.position.set(-5.9,5,-2.4);

const cd3mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/cdCover3.png'), side: THREE.DoubleSide});
const cd3 = new THREE.Mesh(cdGeo,cd3mat);
cd3.position.set(-5.9,4,-2.4);

scene.add(cd1);
scene.add(cd2);
scene.add(cd3);

// Poster on Extruded Wall
const poster1Geo = new THREE.PlaneGeometry(1.5,1.1);
const poster1Mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/poster1.jpg'), side: THREE.DoubleSide});
const poster1 = new THREE.Mesh(poster1Geo,poster1Mat);
poster1.position.set(-7.6,5,-2);
poster1.castShadow = true;
poster1.receiveShadow = true;

const poster2Geo = new THREE.PlaneGeometry(1.3,0.9);
const poster2Mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/poster2.jpg'), side: THREE.DoubleSide});
const poster2 = new THREE.Mesh(poster2Geo,poster2Mat);
poster2.position.set(-7,6.2,-2);
poster2.castShadow = true;
poster2.receiveShadow = true;

const poster3Geo = new THREE.PlaneGeometry(0.9,1.3);
const poster3Mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/kayesPoster.png'), side: THREE.DoubleSide});
const poster3 = new THREE.Mesh(poster3Geo,poster3Mat);
poster3.position.set(-6.7,3.6,-2);
poster3.castShadow = true;
poster3.receiveShadow = true;

const poster4Geo = new THREE.PlaneGeometry(0.9,1);
const poster4Mat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/vinniesPoster.png'), side: THREE.DoubleSide});
const poster4 = new THREE.Mesh(poster4Geo,poster4Mat);
poster4.position.set(-7.8,3.8,-2);
poster4.castShadow = true;
poster4.receiveShadow = true;

scene.add(poster1);
scene.add(poster2);
scene.add(poster3);
scene.add(poster4);

// FINAL