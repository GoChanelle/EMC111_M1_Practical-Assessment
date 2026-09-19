// ----- BED -----
// Bed
const bedGeo = new THREE.RoundedBoxGeometry(6.5,1,5);
const bedMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/bedSheet.png')});
const bed = new THREE.Mesh(bedGeo, bedMat);

bed.position.set(7,0.9,-1);
bed.castShadow = true;


const bedBackGeo = new THREE.RoundedBoxGeometry(7.6,3,1);
const bedBackMat = new THREE.MeshLambertMaterial({color: 0x704E34});
const bedBack = new THREE.Mesh(bedBackGeo, bedBackMat);

bedBack.position.set(7,0,-2.6);
bedBack.castShadow = true;


const bedBottomGeo = new THREE.BoxGeometry(7.6,0.99,6);
const bedBottom = new THREE.Mesh(bedBottomGeo, bedBackMat);

bedBottom.position.set(7,0.2,-1);
bedBottom.castShadow = true;

scene.add(bed);
scene.add(bedBack);
scene.add(bedBottom);

// Blanket
const blanketGeo = new THREE.RoundedBoxGeometry(6.5,1.1,2);
const blanket = new THREE.Mesh(blanketGeo, patchworkMat);

blanket.position.set(6.9,0.9,0.6);
blanket.castShadow = true;

scene.add(blanket);


// ----- CUBBY -----
const cubbyMatTop = new THREE.MeshLambertMaterial({color: 0x717f68, side: THREE.DoubleSide});

const cubbyBack1Geo = new THREE.PlaneGeometry(3.5,1.3);
const cubbyBack1 = new THREE.Mesh(cubbyBack1Geo, brownPatternMat);

cubbyBack1.position.set(3,0.7,-0.9);
cubbyBack1.rotateY(Math.PI / 2)
cubbyBack1.castShadow = true;


const cubbyBack2Geo = new THREE.PlaneGeometry(10.3,1.6);
const cubbyBack2 = new THREE.Mesh(cubbyBack2Geo, brownPatternMat);

cubbyBack2.position.set(-2,0.6,-2.8);
cubbyBack2.castShadow = true


const cubbySide1Geo = new THREE.PlaneGeometry(1.2,1.4);
const cubbySide1 = new THREE.Mesh(cubbySide1Geo, brownPatternMat);

cubbySide1.position.set(2.5,0.7,0.9);
cubbySide1.castShadow = true;


const cubbySide2Geo = new THREE.PlaneGeometry(1.3,1.4);
const cubbySide2 = new THREE.Mesh(cubbySide2Geo, brownPatternMat);

cubbySide2.rotateY(Math.PI / 2)
cubbySide2.position.set(-5.9,0.7,-2.6);
cubbySide2.castShadow = true;


const cubbyTop1Geo = new THREE.RoundedBoxGeometry(1.3,3.5,0.2);
const cubbyTop1 = new THREE.Mesh(cubbyTop1Geo, cubbyMatTop);

cubbyTop1.rotateX(-Math.PI / 2)
cubbyTop1.position.set(2.4, 1.4, -0.5);
cubbyTop1.castShadow = true;
cubbyTop1.receiveShadow = true;


const cubbyTop2Geo = new THREE.RoundedBoxGeometry(9.2,1,0.2);
const cubbyTop2 = new THREE.Mesh(cubbyTop2Geo, cubbyMatTop);

cubbyTop2.rotateX(-Math.PI / 2)
cubbyTop2.position.set(-1.3,1.4,-2.3);
cubbyTop2.castShadow = true;
cubbyTop2.receiveShadow = true;

scene.add(cubbyBack1);
scene.add(cubbyBack2);
scene.add(cubbySide1);
scene.add(cubbySide2);
scene.add(cubbyTop1);
scene.add(cubbyTop2);


// ----- CHAIR -----
const chairMat1 = new THREE.MeshLambertMaterial({color: 0xF2DFBF});
const chairMat2 = new THREE.MeshLambertMaterial({color: 0xC27361});

const chairSeatGeo = new THREE.CylinderGeometry(0.9,0.9,0.1,228);
const chairSeat = new THREE.Mesh(chairSeatGeo,chairMat1);

chairSeat.position.set(-2.1,0.8,-1);
chairSeat.castShadow = true;
chairSeat.receiveShadow = true;


const heartShape = new THREE.Shape();
const x = -2.5;
const y = -5;

heartShape.moveTo(x + 2.5, y + 2.5);
heartShape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
heartShape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
heartShape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
heartShape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
heartShape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
heartShape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

const extrudeSettings = {
  steps: 5,
  depth: 2,
  bevelEnabled: true,
  bevelThickness: 1.20,
  bevelSize: 1,
  bevelSegments: 5,
};

const backrestGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
backrestGeometry.computeBoundingBox();
const backrestCenter = new THREE.Vector3();
backrestGeometry.boundingBox.getCenter(backrestCenter);
backrestGeometry.translate(-backrestCenter.x, -backrestCenter.y, -backrestCenter.z);
const chairBackrest = new THREE.Mesh(backrestGeometry,chairMat2);


chairBackrest.scale.set(0.15, 0.10, 0.05);
chairBackrest.rotateZ(Math.PI)
chairBackrest.rotateY(2.2)
chairBackrest.position.set(-2.6, 1.3,-1.09);
chairBackrest.castShadow = true;


const chairBottomGeo = new THREE.CylinderGeometry(0.7,0.7,0.1,22);
const chairBottom = new THREE.Mesh(chairBottomGeo,chairMat2);

chairBottom.position.set(-2.1,0.1,-1);
chairBottom.receiveShadow = true;
chairBottom.castShadow = true;

const chairStandGeo = new THREE.CylinderGeometry(0.2,0.2,1.7,22);
const chairStand = new THREE.Mesh(chairStandGeo,chairMat1);

chairStand.position.set(-2.1,0,-1);
chairStand.castShadow = true;
chairStand.receiveShadow = true;

scene.add(chairSeat);
scene.add(chairBackrest);
scene.add(chairBottom);
scene.add(chairStand);

// Chair Cushion
const cushionPoints = [];
const cushionRadius = 0.8;
const cushionHeight = 0.09;
const cushionCornerRadius = 0.03;

cushionPoints.push(new THREE.Vector2(0, 0));
cushionPoints.push(new THREE.Vector2(cushionRadius - cushionCornerRadius, 0));

for (let i = 0; i <= 8; i++) {
    const angle = (Math.PI / 2) * (i / 8);
    const x = cushionRadius - cushionCornerRadius + cushionCornerRadius * Math.sin(angle);
    const y = cushionCornerRadius - cushionCornerRadius * Math.cos(angle);
    cushionPoints.push(new THREE.Vector2(x, y));
}

for (let i = 0; i <= 8; i++) {
    const angle = (Math.PI / 2) * (i / 8);
    const x = cushionRadius - cushionCornerRadius + cushionCornerRadius * Math.cos(angle);
    const y = cushionHeight - cushionCornerRadius + cushionCornerRadius * Math.sin(angle);
    cushionPoints.push(new THREE.Vector2(x, y));
}

cushionPoints.push(new THREE.Vector2(0, cushionHeight));

const chairCusionGeo = new THREE.LatheGeometry(cushionPoints, 32);
const chairCusion = new THREE.Mesh(chairCusionGeo,fawnFurMat);

chairCusion.position.set(-2,0.9,-0.8);
chairCusion.castShadow = true;
scene.add(chairCusion);


// ----- LOWSEAT -----
const lowSeatGeo = new THREE.CylinderGeometry(1,1,0.5,22);
const lowSeat = new THREE.Mesh(lowSeatGeo,chairMat1);

lowSeat.position.set(0.8,0.4,1.1);
lowSeat.castShadow = true;

scene.add(lowSeat);

// LowSeat Cushion
const lowSeatCushionPoints = [];
const lowSeatCushionRadius = 1;
const lowSeatCushionHeight = 0.15;
const lowSeatCornerRadius = 0.08;

lowSeatCushionPoints.push(new THREE.Vector2(0, 0));
lowSeatCushionPoints.push(new THREE.Vector2(lowSeatCushionRadius - lowSeatCornerRadius, 0));

for (let i = 0; i <= 8; i++) {
    const angle = (Math.PI / 2) * (i / 8);
    const px = lowSeatCushionRadius - lowSeatCornerRadius + lowSeatCornerRadius * Math.sin(angle);
    const py = lowSeatCornerRadius - lowSeatCornerRadius * Math.cos(angle);
    lowSeatCushionPoints.push(new THREE.Vector2(px, py));
}

for (let i = 0; i <= 8; i++) {
    const angle = (Math.PI / 2) * (i / 8);
    const px = lowSeatCushionRadius - lowSeatCornerRadius + lowSeatCornerRadius * Math.cos(angle);
    const py = lowSeatCushionHeight - lowSeatCornerRadius + lowSeatCornerRadius * Math.sin(angle);
    lowSeatCushionPoints.push(new THREE.Vector2(px, py));
}

lowSeatCushionPoints.push(new THREE.Vector2(0, lowSeatCushionHeight));

const lowSeatCushionGeo = new THREE.LatheGeometry(lowSeatCushionPoints, 32);
const lowSeatCushion = new THREE.Mesh(lowSeatCushionGeo,fawnFurMat);

lowSeatCushion.position.set(0.8,0.65,1.1);
lowSeatCushion.castShadow = true;

scene.add(lowSeatCushion);

// ----- BOX DECOR -----
const boxDecorGeo = new THREE.BoxGeometry(2.5,1,1);
const boxDecor = new THREE.Mesh(boxDecorGeo,checkerPanelsMat);
boxDecor.position.set(-7.2,0.5,-1.4);
boxDecor.castShadow = true;

const boxTopDecorGeo = new THREE.RoundedBoxGeometry(2.7,0.5,1.2);
const boxTopDecor = new THREE.Mesh(boxTopDecorGeo,fawnFurMat);
boxTopDecor.position.set(-7.2,1.1,-1.4);
boxTopDecor.castShadow = true;

scene.add(boxDecor);
scene.add(boxTopDecor);


// ----- RUGS ----- 
const rug1Geo = new THREE.RoundedBoxGeometry(8,3,0.1);
const rug1 = new THREE.Mesh(rug1Geo,checkerPanelsMat);

rug1.position.set(-0.8,0.01,-1.5);
rug1.rotateX(-0.5 * Math.PI);
rug1.receiveShadow = true;

const rug2Geo = new THREE.CylinderGeometry(2.2,2.2,0.04,32);
const rug2 = new THREE.Mesh(rug2Geo,fawnFurMat);

rug2.position.set(3,0.02,0.7);
rug2.receiveShadow = true;

scene.add(rug1);
scene.add(rug2);

// FINAL