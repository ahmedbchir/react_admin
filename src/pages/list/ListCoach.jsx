import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTableCoach from "../../components/datatable/DataTableCoach"

const ListCoach = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTableCoach />
      </div>
    </div>
  )
}

export default ListCoach