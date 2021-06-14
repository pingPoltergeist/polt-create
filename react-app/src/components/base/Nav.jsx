import nav_logo from '../../media/logo/logo.svg'
import '../../styles/BASE/Nav.scss'

const Nav = () => {
    return (
        <div className="navbar">
            <img src={nav_logo} alt="" className="nav-logo"/>
        </div>
    )
}

export default Nav