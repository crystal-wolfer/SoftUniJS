import Search from "./Search.jsx";
import UserTable from "./UserTable.jsx";

export default function UserList() {
  return(
    <section className="card users-container">
      <Search></Search>
      <UserTable></UserTable>
      {/* <!-- New user button  --> */}
      <button className="btn-add btn">Add new user</button>

    </section>
  )
}