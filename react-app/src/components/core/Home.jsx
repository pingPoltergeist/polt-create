import "../../styles/CORE/Home.scss"
import Base from "../base/Base";
import techImg from '../../media/technologies.png'

const Home = () => {
    return (
        <Base title="New React App" className="hero">
            <div className="left">
                <h1 className="heading">MAKING SOMETHING BIG AREN'T YOU?</h1>
                <p className="content">Well, we can help with that. We have just created a React application for you to work on. This application has everything pre-configured that you might need in a general project. It has Webpack configured for advanced deployment as well as support for SASS, Enjoy!!</p>
                <img src={techImg} alt="technologies used" className="techs"/>
            </div>
            <div className="right"></div>
        </Base>
    )
}

export default Home