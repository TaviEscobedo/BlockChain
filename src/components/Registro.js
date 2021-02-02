import React, {useState,} from 'react';
import { useHistory } from 'react-router-dom';

// const url = process.env.REACT_APP_LOGIN; //api real
const url='http://localhost:3000/transaccion';

const  Registro= () => {

 const history= useHistory();
    const[formData, setFormData]=useState({
        sender:'',
        recipient:'',
        code:''
    });


    const registrar=async (e)=>{
        e.preventDefault();
     
        try {
        
              const res = await fetch(url,{
              method: 'POST',
              body: JSON.stringify(formData),
              headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            const formatoJson = await res.json();
            console.log(formatoJson);
            
          
            setFormData({
                sender:'',
                recipient:'',
                code:''
              })  
              history.push("/chain");
          
          } catch (error) {
            console.log(error.message);
          }
        
    }

    const handleChange =  (e) => {
       
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })    
      }

    return(

        <div className="Container">
        <div className="row">
        <div className="col-md-5 mx-auto ">
        
         <div className="container register"> 
        <form onSubmit={registrar}>
            <label className="title">Registro</label>


            <div className="form-group col">
              <label >Emisor</label>
              <input type="text" className="form-control"  placeholder="Ingresa DNI" 
              value={formData.sender} onChange={handleChange} name="sender"/>
              </div>
            <div className="form-group col">
            <label >Receptor</label>
            <input type="text" className="form-control" placeholder="Ingresa DNI" 
            value={formData.recipient} onChange={handleChange} name="recipient"/>
            </div>
            <div className="form-group col">
            <label >Botella</label>
            <input type="text" className="form-control"  placeholder="Ingresa código de la botella" 
            value={formData.code} onChange={handleChange} name="code"/>
            </div>
           
        
    
            <div className="form-group col">    
            <button type="submit" className="btn btn-success  btn-block"
            // onClick={()=>history.push("/chain")}
            >Registrar</button>
            </div>
        
        </form>
</div>
</div>
</div>
</div>
    );
}
 


export default Registro;