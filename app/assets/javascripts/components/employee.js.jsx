var Employee = React.createClass({
  getInitialState() {
    return {
      employee: this.props.employee
    }
  },

  render() {
    employees = this.state.employees.map( function(employee) {
      return (
        <Employee employee={employee} key={employee.id} />
      );
    });
  }
});
