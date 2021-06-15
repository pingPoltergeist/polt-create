import styles from '/styles/components/Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.navbar}>
            <img src='/logo/logo.svg' alt="" className="nav-logo"/>
        </div>
    )
}

export default Nav