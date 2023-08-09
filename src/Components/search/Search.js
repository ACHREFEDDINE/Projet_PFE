import React from "react";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: props.rows,
    };
  }
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    //datepicker on change
    $("#example")
      .DataTable()
      .page.len(parseInt(localStorage.getItem("nbRows")))
      .draw();
  }
  render() {
    //Datatable HTML

    return (
      <div className="MainDiv">
        <div className="container-fluid p-3 bg-primary text-white text-center mb-3"></div>

        <div className="container">
          {/* <div class="col-sm-3 mb-3">
            <div class="form-group">
              <label for="sel1" class="form-label">
                Date Filter:
              </label>
              <input
                class="form-control"
                type="date"
                className="dateadded form-control"
              />
            </div>
          </div> */}
          <table id="example" className="display">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>Email</th>
                <th>Website</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tabledata.map((result) => {
                return (
                  <tr class="table-success">
                    <td>{result.firstName + " " + result.lastName}</td>
                    <td>{result.email}</td>
                    <td>{result.username}</td>
                    <td>{result.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default search;
