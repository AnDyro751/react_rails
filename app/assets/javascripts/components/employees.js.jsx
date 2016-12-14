var Employees = React.createClass({
  getInitialState() {
    return {
      employees: this.props.employees,
      employee: {
        name: '',
        email: '',
        manager: false
      },
      errors: {}
    }
  },
  render: function() {
    employees = this.props.employees.map( function(employee) {
      return (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.manager ? '&#10004;' : ''}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Employees</h1>
        <div id="employees">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Manager</th>
              </tr>
            </thead>
            <tbody>
            <tbody>
              {employees}
              <tr>
                <td>
                  <input type="text" onChange={this.handleNameChange} /><br />
                  <span style={{color: 'red'}}>{this.state.errors.name}</span>
                </td>
                <td>
                  <input type="text" onChange={this.handleEmailChange} /><br />
                  <span style={{color: 'red'}}>{this.state.errors.email}</span>
                </td>
                <td><input type="checkbox" onChange={this.handleManagerChange} /></td>
                <td><button onClick={this.handleHireEmployee}>Hire</button></td>
              </tr>
            </tbody>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});
