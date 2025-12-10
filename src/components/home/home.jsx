import "./home.css"
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <div className="main-div">
             <h2>Welcome to Personal Finance</h2>
             {/* <button>Get Started</button> */}
             <Link to="/dashboard" className="button">Get started</Link>

             

        </div>
       
        </>
    )
}
export default Home;