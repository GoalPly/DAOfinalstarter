import "./investors.css"
function ReedemShare({state,account}){

    async function shareReedem(event){
        try{
            event.preventDefault();
            const {contract} = state;
            const amount = document.querySelector("#shares").value;
            await contract.methods.reedemShare(amount).send({from:account,gas:450000});

        }
        catch(error){
            alert(error);
        }
        window.location.reload();
       
    }
   
    return<><form onSubmit={shareReedem}>
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="submit">Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;