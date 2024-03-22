import { FaPlus, FaPaperPlane } from 'react-icons/fa'
import { FundingData } from '../FundingData'
import { useState } from 'react'

const FundingModal = () => {
    const [ fundingdRecord, setFundingRecord] = useState( FundingData );
    const [amount, setAmount] = useState(0)

    const addFundingRecord = () =>{
        const newRecord = { name: "NnaDid", amount: amount, status: "success",date: new Date() };
        setFundingRecord([...fundingdRecord, newRecord]);
        // log the funding record
        console.log( [...fundingdRecord, newRecord] );
    }

  return (
    <div> 
        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#fundingModal">
           <FaPlus/> Fund Account
        </button>

        <div className="modal fade" id="fundingModal"  aria-labelledby="fundingModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="fundingModalLabel">Funding Account</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                  
                <div className="form-floating mb-3">
                    <input 
                         type="number" 
                         className="form-control" 
                         id="floatingInput" placeholder="20000" 
                         value={amount} 
                         onChange={(e)=>setAmount(e.target.value)} 
                    />
                    <label htmlFor="floatingInput">Amount</label>
                </div>  
                <button className="btn btn-primary btn-lg" onClick={addFundingRecord}> Send &nbsp; <FaPaperPlane/> </button>

            </div> 
            </div>
        </div>
        </div>
    </div>
  )
}

export default FundingModal