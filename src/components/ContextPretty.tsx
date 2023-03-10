// @ts-nocheck
import {Employee} from '../model/employee.ts'
import {EmployeeContext} from '../import/employeeContext.ts'
import React, { useContext, useEffect, useState } from 'react'
import ContextShow from './ContextShow.tsx'

export function ContextPretty(){
    const pp ="https://img.freepik.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?w=500"

    const {ID, fullname, position, mail, phone, img, joined, expire, dob} = useContext<Employee>(EmployeeContext)
    const [employee, setEmployee] = useState<Employee>({
        ID, fullname, position, mail, phone, img, joined, expire, dob
    })

    useEffect(()=>{
        setEmployee({...employee, img:pp})
    },[employee])

    return(
        <EmployeeContext.Provider value={employee}>
            <ContextShow/>
        </EmployeeContext.Provider>
    )
}

export default ContextPretty