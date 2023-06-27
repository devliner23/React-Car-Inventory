import DataTable from "../components/DataTable"
import Navbar from "../components/Navbar"

function Dashboard() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <DataTable />
    </div>
  )
}

export default Dashboard
