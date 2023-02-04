import { createContext, useState } from "react";
import { useNavigate } from "react-router";


const store = createContext();

const Provider=(props)=>{
    const [state,setstate]=useState("");
    const [islogin,setIslogin]=useState(sessionStorage.getItem('islogin'));
    const [cartproduct,setcartproduct]=useState([]);

    function handlecart(item){

      if(!cartproduct.includes(item)){
      setcartproduct([item,...cartproduct]);
      }
      
    }

    function handlecartdelete(id){
      const removeItem= cartproduct.filter((item)=>{
        return item.productId !== id;
      })

      setcartproduct(removeItem)
    }

    function handlelogin(username,password){
        if(username!=sessionStorage.getItem("userName")){
          alert("Please enter valid username")
        }else if(password!=sessionStorage.getItem("password")){
          alert("Please enter valid password")
        }else{
            setIslogin(true);
            sessionStorage.setItem('islogin',true);
            navigate('/')
        }
      } 
    const navigate=useNavigate();
    function handlelogout(){
        navigate('login');
        sessionStorage.removeItem('islogin')
    }
    function handleshowproduct(item){
      setstate(item);
      navigate('/product')
      
    }
    return(
        <store.Provider value={{islogin,
                                handlelogin, 
                                navigate, 
                                handlelogout, 
                                handlecart, 
                                cartproduct, 
                                handlecartdelete, 
                                handleshowproduct,
                                state}}>
            {props.children}
        </store.Provider>
    )
}

export {store,Provider};