import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import "./style.css"
export default function MemeGenerator () {
    return (
        <div className="container">
            <Header/>
            <Meme/>
        </div>
    )
}