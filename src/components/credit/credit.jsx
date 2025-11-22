import { Link } from "react-router-dom";
function Credit(){
    return(
        <>
        <h3>welcome to your financial dashboard</h3>
        <div>
            <ol>
                <Link to="/credit/dairy" >
                    <li>Dairy</li>
                </Link>
                <li>Vegetable</li>
                <li>Grocery</li>
                <li>Bills</li>
                <li>Shopping</li>
                <li>Medicine</li>
            </ol>
        </div>
        </>
    )
}
export default Credit;