const textureLoader = new THREE.TextureLoader();

const meatMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/meat.jpg'), side: THREE.DoubleSide});
const patchworkMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/patchwork.jpg'), side: THREE.DoubleSide});
const greenTextureMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/greenTexture.jpg'), side: THREE.DoubleSide});
const brownPatternMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/brownPattern.jpg'), side: THREE.DoubleSide});
const fawnFurMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/fawnFur.jpg'), side: THREE.DoubleSide});
const redWhiteDotsMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/redWhiteDots.jpg'), side: THREE.DoubleSide});
const checkerPanelsMat = new THREE.MeshLambertMaterial({map: textureLoader.load('img/checkerPanels.jpg'), side: THREE.DoubleSide});
const eyeMat = new THREE.MeshPhongMaterial({map: textureLoader.load('img/eye.jpg'), side: THREE.DoubleSide});

// FINAL