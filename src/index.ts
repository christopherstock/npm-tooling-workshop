import * as BABYLON from 'babylonjs';

console.log("src/index.ts being invoked!")

window.onload = () => {

    // create and add HTML rendering Canvas
    const canvas = document.createElement("canvas");
    canvas.style.width = '100%';
    canvas.style.outline = 'none';
    document.body.appendChild(canvas);
    document.body.style.background = '#000000';
    document.body.style.margin = '0';

    // create BABYLON engine
    const engine = new BABYLON.Engine(canvas, true);

    // create BABYLON scene
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0, 1.0);
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 0.5, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    const hemisphericLight = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 0, 0), scene);
    hemisphericLight.intensity = 0.1;
    const pointLightA = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 0, 2), scene);
    pointLightA.intensity = 2.0;
    pointLightA.range     = 2.0;
    pointLightA.diffuse   = new BABYLON.Color3(1.0, 1.0, 0.0);
    pointLightA.specular  = new BABYLON.Color3(1.0, 1.0, 1.0);
    const pointLightB = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 0, -2), scene);
    pointLightB.intensity = 2.0;
    pointLightB.range     = 2.0;
    pointLightB.diffuse   = new BABYLON.Color3(1.0, 0.0, 1.0);
    pointLightB.specular  = new BABYLON.Color3(1.0, 1.0, 1.0);
    const materialBox = new BABYLON.StandardMaterial('material', scene);
    materialBox.emissiveColor = new BABYLON.Color3(0.89, 0.32, 0.01);
    materialBox.specularColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    box.material = materialBox;
    const materialSphere = new BABYLON.StandardMaterial('material', scene);
    materialSphere.emissiveColor = new BABYLON.Color3(0.53, 0.53, 0.53);
    const sphereA = BABYLON.MeshBuilder.CreateSphere("box", {diameter: 0.4,});
    sphereA.material = materialSphere;
    sphereA.position = new BABYLON.Vector3(0.0, 0.0, 1.0);
    const sphereB = BABYLON.MeshBuilder.CreateSphere("box", {diameter: 0.4,});
    sphereB.material = materialSphere;
    sphereB.position = new BABYLON.Vector3(0.0, 0.0, -1.0);

    // register render loop that repeatedly renders the scene
    engine.runRenderLoop(() => {
        camera.alpha += 0.025;
        scene.render();
    });
}
