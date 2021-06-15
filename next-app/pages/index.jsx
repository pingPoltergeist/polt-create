import styles from '/styles/pages/Home.module.scss'

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.main_heading}>Next, Let's go!</h1>
            <p className={styles.main_description}>We have just created a starting point of a Next application for you which is rigged with Poltergeist special CSS framework and all the initial setup you will need for a scalable application. To get started, start editing the <strong>index.js</strong> in the <strong>/pages</strong> directory.</p>
        </div>
    )
}

export default Home