import "../../styles/CORE/Home.scss"
import Base from "../base/Base";
import {Link} from "react-router-dom";

const notFound = () => {
    return (
        <Base title="404 Not Found" className="hero">
            <div className="left">
                <h1 className="heading">IT'S 404 YOU IDIOT!!</h1>
                <p className="content">We don't have this page. And how many more page do you want? This is just a demo site. Is one home page not enough for you? Huh??</p>
                <Link className="button" to="/" >Go to Home</Link>
            </div>
            <div className="right"></div>
        </Base>
    )
}

export default notFound