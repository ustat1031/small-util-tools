import { createRoot } from "react-dom/client";
import { AddButton, AddSelectMenu } from "./modules";

const ColorCodes:string[] = ["黒", "茶", "赤", "橙", "黄", "緑", "青", "紫", "灰", "白"];

function App(){
    return (
        <>
        <h1>
            test
        </h1>
        <div>
            <button> test button</button>
            <AddButton Button="added"></AddButton>
        </div>
        <div id="colorcode2register">
            <select>
            <AddSelectMenu id="1" values={ColorCodes} ></AddSelectMenu>
            </select>
        </div>
        </>
    
    )
}


createRoot(document.getElementById('root')!).render(
    <div>
        <App/>
    </div>
)
