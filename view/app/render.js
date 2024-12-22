//-Path: "langtext/view/app/render.js"
import { L } from "./setup";
import { getStorageSetting, setStorageSetting } from "../../dist/index"; //?@teachocoofficial/langtext

const helloWorld = document.querySelector(".helloWorld");
const btnsetEn = document.querySelector("button.setEn");
const btnsetTh = document.querySelector("button.setTh");

function render() {
    const storageSetting = getStorageSetting();

    console.log(storageSetting);
    helloWorld.textContent = L("hello.world");
    btnsetEn.textContent = L("buttons.setEn");
    btnsetTh.textContent = L("buttons.setTh");
}

render();
btnsetEn.addEventListener("click", () => {
    setStorageSetting("en");
    render();
});
btnsetTh.addEventListener("click", () => {
    setStorageSetting("th");
    render();
});
