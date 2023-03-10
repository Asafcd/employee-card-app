// @ts-nocheck

import {Employee} from '../model/employee.ts'
import {EmployeeContext} from '../import/employeeContext.ts'
import React from 'react'
import ContextPretty from './ContextPretty.tsx'
    
export function ContextText(){
    
    const asaf: Employee = {
        ID: '15209592',
        fullname: 'Asaf Contreras',
        position: 'Software Developer',
        mail: '15209592@modelo.edu.mx',
        phone: '9992253136',
        img:'',
        joined: new Date("2019-01-16"),
        expire: new Date("2024-03-20"),
        dob: new Date("1995-02-15")
    }

    

    return(
        <EmployeeContext.Provider value={asaf}>
            <ContextPretty/>
        </EmployeeContext.Provider>

    )
}


export default ContextText