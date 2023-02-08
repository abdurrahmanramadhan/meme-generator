import "./header-style.css"
import trollFace from "../../../images/Troll Face.svg"

export default function Header () {
    return (
        <header className="header">
            <div className="title">
                <img className="trollogo" src={trollFace} alt="" />
                <h1 className="title-title">Meme Generator</h1>
            </div>
        </header>
    )
}