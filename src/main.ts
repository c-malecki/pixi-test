import { Application } from "pixi.js";
import { Scene } from "./scenes/Scene";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});
globalThis.__PIXI_APP__ = app;

const scene: Scene = new Scene(app.screen.width, app.screen.height);
document.body.appendChild(app.view);
app.stage.addChild(scene);

// app.ticker.add((delta) => {
//   scene.bunny.rotation += 0.1 * delta;
// });
