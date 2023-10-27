import {useState,useEffect} from "react"
function InvestorList({state}){
  const [list,setlist]=useState([]);
   useEffect(()=>{
      const {contract} = state;

      async function listInvestor(){
         const list = await contract.methods.InvestorList().call();
         setlist(list);
        // console.log(list);
      }

      contract && listInvestor();
   },[state])

   return<>
    <div className="list">
    <h3>Investor's List</h3>
   {list.map((investoraddress)=>{
      return <p key={investoraddress}>{investoraddress}</p>
   })}
    </div>
   </>
  }
  export default InvestorList;