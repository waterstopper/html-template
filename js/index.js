import { changeTheme } from "./loader.js";
import { byId } from "./utils.js";

console.log("Hello");

byId("main-title").onclick = () => {
    console.log("Change")
    changeTheme()
}