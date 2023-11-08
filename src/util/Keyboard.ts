export class Keyboard {
  public static readonly state: Map<string, boolean>;
  public static initialize() {
    document.addEventListener("keydown", Keyboard.keyDown);
    document.addEventListener("keyup", Keyboard.keyUp);
  }
  private static keyDown(e: KeyboardEvent): void {
    Keyboard.state.set(e.code, true);
    console.log("keydown");
  }
  private static keyUp(e: KeyboardEvent): void {
    Keyboard.state.set(e.code, false);
    console.log("keyup");
  }
}
