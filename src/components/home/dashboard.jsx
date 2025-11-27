import { Link } from "react-router-dom";
import './dashboard.css'
function Dashboard(){
    return(
        <>
            <div>
                <h2 className="title">Application Dashboard</h2>

                <div className="selection">
                    <Link to='/addEntry/insertTransaction'>
                        <div className="card card-1">Add Transaction</div>
                    </Link>

                    <Link to='/credit'>
                        <div className="card card-2">Credit</div>
                    </Link>

                    <Link to='/credit'>
                        <div className="card card-3">Email Reminder</div>
                    </Link>

                    <Link to='/credit'>
                        <div className="card card-4">Expense Predictor</div>
                    </Link>

                    <Link to='/credit'>
                        <div className="card card-5">Scan and Add</div>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default Dashboard;