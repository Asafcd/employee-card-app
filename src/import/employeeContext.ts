import { Employee } from "../model/employee"
import { createContext } from "react"

export const EmployeeContext = createContext<Employee>({
    ID: '',
    fullname: '',
    position: '',
    mail: '',
    phone: '',
    img:'',
    joined: new Date(),
    expire: new Date(),
    dob: new Date()

})