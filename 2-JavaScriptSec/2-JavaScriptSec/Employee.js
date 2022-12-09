class Employee

{

  constructor(firstName, lastName)

 

  {

    this.firstName = firstName;



    this.lastName = lastName;

  }



  getFullName() {

    return this.firstName + ":" + this.lastName;

  }

}



let employee = new Employee("mahesh", "shah");



employee.getFullName();


