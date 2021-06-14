import Head from "./Head";
import Nav from "./Nav";

const Base = ({
      title="",
      className="",
      children
}) => (
    <div>
        <Head title={title} />

        <Nav />
        <div className={className}>{ children }</div>
    </div>
)

export default Base