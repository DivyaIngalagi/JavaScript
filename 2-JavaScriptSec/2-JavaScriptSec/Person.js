class Person

        {



  setName(name)

  {

    this._Name = name;

  }



  setEmail(email)

  {

    this._email = email;

  }



  getEmail()

  {

    return this._email;

  }



  set LastName(name)

  {

    this._LastName = name;

  }

get LastName()

  {

    return this._LastName

  }

  getFullName() {

    return this.firstName + ":" + this.email;

  }

}



let employee = new Person();



employee.setEmail("p@p.com");

employee.setName("paresh");



employee.LastName = "shah";