import { useEffect, useState } from 'react'
import React from 'react'
import FundingModal from '../FundingModal'
import { FundingData } from '../../FundingData'

const Funding = () => {
    const [fData, setFData] = useState(FundingData);



  return (
    <div>
       <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="h2">Funding History</h2>
        <FundingModal />
       </div>
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Amount (NGN) </th>
          <th scope="col">Status</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody> 

        { 
           fData?.map( ( fd, indx ) =>( <tr key={indx}> 
             <td> {indx} </td> 
             <td> {fd.name} </td> 
             <td> {fd.amount} </td> 
             <td> {fd.status} </td> 
             <td> {fd.date} </td> 
            </tr>) )
        } 
       
      </tbody>
    </table>
    </div>
  )
}

export default Funding