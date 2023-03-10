// @ts-nocheck
import {Employee} from '../model/employee.ts'
import {EmployeeContext} from '../import/employeeContext.ts'
import React, { useContext } from 'react'

export function ContextShow(){
    function toPretty(date: Date){
        const day: string = (date.getDate()+1)
        const month: string = (date.getMonth()+1)
        const year: string = (date.getFullYear())
        return `${year} / ${month} / ${day}`
    }

    const {ID, fullname, position, mail, phone, img, joined, expire, dob} = useContext<Employee>(EmployeeContext)

    return(
        <div className='card'>

            <div className='header-card'>
                <div className='employee-img'>
                    <img src={img} alt='employee profile'/>
                </div>
                
                <div className='employee-name'>
                    <p>{fullname}</p>
                    <p>{position}</p>
                </div>

            </div>
            <div className='body-card'>
                <div className='column'>
                    <label>ID</label>
                    <p>{ID}</p>
                    <label>D.O.B.</label>
                    <p>{toPretty(dob)}</p>
                </div>
                <div className='center-column'>
                    <label>Joined Date</label>
                    <p>{toPretty(joined)}</p>
                    <label>Expire Date</label>
                    <p>{toPretty(expire)}</p>
                </div>
                <div className='column'>
                    <label>Email</label>
                    <p>{mail}</p>
                    <label>Phone number</label>
                    <p>{phone}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ContextShow