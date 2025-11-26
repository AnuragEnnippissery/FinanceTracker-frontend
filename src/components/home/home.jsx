import "./Home.css"
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <div className="main-div">
             <h2>Welcome to Personal Finance</h2>
             {/* <button>Get Started</button> */}
             <div className="button">
                <Link className="button" to="/dashboard">
                    Get started
                </Link>

             </div>
             

        </div>
       
        </>
    )
}
export default Home;