
import { useState } from "react";
import { toast } from 'react-toastify';




//which data contain by the mealRequest object
const defaultBazarCoastEntry={
    date:"",
    bazarPerson:"",
    bazarAmount: "",
    bazarList: "",
   
    
  
  }

export const BazarCoastEntry =()=>{


   const [bazar, setBazar]=useState(defaultBazarCoastEntry);

   const handleInput=(e)=>{
    console.log(e);
    let name= e.target.name;
    let value= e.target.value;
   
    setBazar({
        ...bazar,
        [name]: value,
   
    })
   };
   const handleSubmit=async(e)=>{
       e.preventDefault();
       //alert(user);
      // console.log(Contact);
   
       try {
        const response = await fetch("http://localhost:3000/api/bazar/bazarcoastentry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bazar),
        });
      
        if (response.ok) 
        {
           //const res_data= await response.json();
           //console.log("res from server", res_data);
           //store the token in the localhost
          // storeTokenInLS(res_data.token);
      
          setBazar(defaultBazarCoastEntry);
        
          const data = await response.json();
          console.log(data);
          toast.success("Bazar List Send By Manager");
        }
      } catch (error) {
        toast.error("Bazar List not Send", error);
      }
   
   
   
   
   };
   


   return (

    <div>
        <section>
               <main>
                <div className="section-registration">
                 
                    <h1> Bazar Amount Entry </h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                   

                    <div>
                      <label htmlFor="date"> Select Date</label>
                      <input type="date" 
                      name="date"
                      placeholder="Enter the Date "
                      id="date"
                      required autoComplete="off"
                      value={bazar.date}
                      onChange={handleInput}
                      
                      />
                      </div>

                      <div>
                      <label htmlFor="personPerson">Shopper Name</label>
                      <input type="text" 
                      name="bazarPerson"
                      placeholder="EXM:Johnny Sins "
                      id="bazarPerson"
                      required autoComplete="off"
                      value={bazar.bazarPerson}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="bazarAmount">Bazar Amount</label>
                      <input type="number" 
                      name="bazarAmount"
                      placeholder="Enter The Bazar Amount"
                      id="bazarAmount"
                      required autoComplete="off"
                      value={bazar.bazarAmount}
                      onChange={handleInput}
                      
                      />
                      </div>


                    <div>
                      <label htmlFor="bazarList">Bazar List</label>
                      <input type="text" 
                      name="bazarList"
                      placeholder="EX. Allu, Begun"
                      id="bazarList"
                      required autoComplete="off"
                      value={bazar.bazarList}
                      onChange={handleInput}
                      
                      />
                      </div>
                   <button type="submit">Submit</button>
                      
                   </form>
                </div>
               </main>
              
        </section>
      </div>

   );

}