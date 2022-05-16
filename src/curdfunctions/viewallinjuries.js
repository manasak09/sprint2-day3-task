import { connect } from "react-redux";
import { findAllInjueries } from "../action/actionfun";
import { useEffect } from "react";
import { Card,CardContent } from "@mui/material";


function ViewAllInjuries(props){
    useEffect(()=>{
        props.mydispatch(findAllInjueries())
        
    },[])
    return <>
      <Card sx={{width:400,top:50}}>
                <CardContent> 
    <ul>
        {
        props.data.map((e)=>{
            return <li>{e.personName}{e.personAdderss}{e.mobile}</li>
        })
    }
        </ul>
        </CardContent>
        </Card></>
}
        const mapStateToProps=state=>({
            data:state
        })
        
        const mapDispatchToProps=dispatch=>({
            mydispatch:dispatch
        })
    
        export default connect(mapStateToProps,mapDispatchToProps)(ViewAllInjuries)
