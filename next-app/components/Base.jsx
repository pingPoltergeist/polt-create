import Nav from "./Nav";
import Head from "next/head";

const Base = ({children}) => (
    <div>
        <Head>
            <title>Poltergeist Next App</title>
            <link rel="icon" href="/logo/icon.png" />
        </Head>
        <Nav />
        { children }
    </div>
)

export default Base