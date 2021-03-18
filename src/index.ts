import * as BABYLON from 'babylonjs';

console.log( "src/index.ts being invoked!" )

window.onload = () => {

    // generate and add HTML rendering Canvas
    const canvas = document.createElement("canvas");
    canvas.style.width = '100%';
    canvas.style.outline = 'none';
    document.body.appendChild(canvas);
    document.body.style.background = '#000000';
    document.body.style.margin = '0';

    // generate BABYLON engine
    const engine = new BABYLON.Engine(canvas, true);

    // create BABYLON scene
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0, 1.0);
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    const light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 0, 2), scene);
    light.intensity = 2.5;
    // light.diffuse   = new BABYLON.Color3( 1.0, 1.0, 1.0 );
    // light.specular  = new BABYLON.Color3( 1.0, 1.0, 1.0 );
    light.range     = 3.0;

    const materialBox = new BABYLON.StandardMaterial('material', scene );
    materialBox.emissiveColor = new BABYLON.Color3( 0.89, 0.32, 0.01 );
    materialBox.specularColor = new BABYLON.Color3( 0.0, 1.0, 0.0 );
    const box = BABYLON.MeshBuilder.CreateBox("box", {});
    box.material = materialBox;

    const materialSphere = new BABYLON.StandardMaterial('material', scene );
    materialSphere.emissiveColor = new BABYLON.Color3( 0.89, 0.32, 0.01 );
    const sphere = BABYLON.MeshBuilder.CreateSphere("box", {diameter: 0.25,});
    sphere.position = new BABYLON.Vector3( 0.0, 0.0, 1.0 );
    sphere.position = new BABYLON.Vector3( 0.0, 0.0, 1.0 );

    // register render loop that repeatedly renders the scene
    engine.runRenderLoop(() => {
        camera.cameraRotation.add(new BABYLON.Vector2(1.0, 1.0));

        // box.rotate(BABYLON.Vector3.Up(), 0.01);
        // box.rotate(BABYLON.Vector3.Right(), 0.005);
        // box.rotate(BABYLON.Vector3.Backward(), 0.001);

        scene.render();
    });
}
