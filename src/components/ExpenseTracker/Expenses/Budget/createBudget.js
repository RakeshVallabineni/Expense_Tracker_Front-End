import { Grid } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
function CreateBudget(){
    const [budget, setBudget]=useState(0);

    const LoginToken=localStorage.getItem('Token');

    const month=new Date();

    let budgetDetails={
        budget:budget,
        currentMonth:month.getMonth()+1

    }
    
    async function saveBudget(e){
        try{
            e.preventDefault();
            let saveUserResponse=await axios.post('http://localhost:5000/user/home/savebudget',budgetDetails,{headers:{"Authorization":LoginToken}});
            alert(saveUserResponse.data.message)
        }
        catch(error){
            alert(error.response.data.message)
        }
    }
    return(
       <form className="budget" style={{position:"relative",textAlign:"center",marginTop:"15%"}}>
            
            <Grid container spacing={1} id="Grid" >
                 <Grid item xs={12}>
                    <TextField className="TextField" id="enterAmount" style={{width:"500px",marginLeft:"-20%"}}label="Enter Amount" variant="filled" onChange={(e)=>{setBudget(e.target.value)}} />
                </Grid>
                <Grid item xs={12}>
                    <Button id="submitBudget"  varaint="contained" style={{backgroundColor:"black",color:"white", width:"150px",marginLeft:"-20%"}} onClick={saveBudget}>Submit</Button>
                </Grid>
            </Grid>
       </form>
    )
}

export default CreateBudget;