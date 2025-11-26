import { Link } from "react-router-dom";
function Dashboard(){
    return(
        <>
            <div>
                <h2>Application Dashboard</h2>
                <div>
                    <Link to='/credit'>
                        <div>Credit</div>
                    </Link>
                    <Link to='/credit'>
                        <div>Email Remainder</div>
                    </Link>
                    <Link to='/credit'>
                        <div>Expense Predictor</div>
                    </Link>
                    <Link to='/credit'>
                        <div>Scan and add</div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Dashboard;