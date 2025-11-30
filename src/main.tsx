import { createRoot } from "react-dom/client";
import { AddButton } from "./modules";

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
        </>
    
    )
}


createRoot(document.getElementById('root')!).render(
    <div>
        <App/>
    </div>
)
