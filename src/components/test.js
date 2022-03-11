function test (properties) {
    return(
        <div style={{color: properties.fontcolor, fontFamily:'cursive'}}>
            <h4>Nama :  {properties.name}</h4>
            <h4>City : {properties.city}</h4>
            <img src={properties.image}
            style={{width:'100px', height:'100px', borderRadius:'50%'}}>
            </img>
           <p>
               {properties.children}
           </p>
        </div>
        
    )
}
export default test;