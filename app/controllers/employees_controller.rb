class EmployeesController < ApplicationController
  def index
    @employees = Employee.all
    render component: 'Employees', props: { employees: @employees }
  end
end
