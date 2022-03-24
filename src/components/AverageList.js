export default function AverageList(props){
    return(
       <div className="row m-2 py-2" style={{border: `2px solid lightgrey`}}> 
           {/** labels area */}
           <div className="col-lg-9 pt-3">
               <h6>ID: {props.id}</h6>
               <h4>{props.name}</h4>
               <h6>Math: {props.math}</h6>
               <h6>English: {props.english}</h6>
               <h6>Chemistry: {props.chemistry}</h6>
                <h6>Average: {props.average}</h6>   
                <h6>Status: {props.status}</h6>           
           </div>
       </div>                   
   )
}