import { Container, FederatedPointerEvent, Sprite } from "pixi.js";

export class Scene extends Container {
  private readonly screenWidth: number;
  private readonly screenHeight: number;
  public bunny: Sprite;

  constructor(screenWidth: number, screenHeight: number) {
    super();

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.bunny = Sprite.from("https://pixijs.com/assets/bunny.png");
    this.bunny.anchor.set(0.5);
    this.bunny.x = this.screenWidth / 2;
    this.bunny.y = this.screenHeight / 2;

    this.addChild(this.bunny);
    this.bunny.on("pointertap", this.onClick, this);
    this.bunny.eventMode = "dynamic";
  }

  private onClick(e: FederatedPointerEvent): void {
    console.log("event data", e);
  }
}
