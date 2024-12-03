import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
const RegisterProduct =()=>{
    
    const navigate = useNavigate();

    const apiUrl= 'http://localhost/products/api.php';
    let config={
        headers:{
             'Content-Type': 'application/json',
            'Accept': 'application/json'

        }
    }
    const dataProductInit = {
        name: "",
        description: "",
        price: 0,
    }

    const [dataProduct, setDataProduct] = useState(dataProductInit);

    const handelChange = (e) =>{
        
        setDataProduct({...dataProduct, [e.target.name]: e.target.value});
    }

    const handelSubmit = async (e) =>{
        e.preventDefault();
        console.log(dataProduct);
        await axios.post(`${apiUrl}/productos`, dataProduct, config)
        .then(response =>{
            console.log(response);
            navigate('/catalogo');
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return(
    <div className="bg-gradient-to-b from-purple-400 to-pink-300 py-5 px-4">
        <h1 className="text-center text-white py-5 text-2xl uppercase font-bold">Registro de Producto</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-center text-gray-500">Ingrese los datos del nuevo producto</p>
        <form onSubmit={handelSubmit} className="flex flex-col gap-3 max-w-sm mx-auto bg-gradient-to-r p-5 from-purple-500 to-red-300 shadow-2xl shdow-gray-400/50 rounded-xl">
       <div className="relative">
        <label htmlFor="name" classNameName="block text-whithe-600">Producto</label>
        <input  
        className="w-full outline-none rounded-lg py-1 px-2 bg-transparent text-gray-700 border-1 border"
        type="text"
        id="name"
        name="name"
        onChange={handelChange}
        placeholder="Ingresar el nombre del producto" 
        required
        />
        </div>
        <div className="relative">
        <label htmlFor="price" className="block text-white-600">Precio</label>
        <input
        className="w-full text-white outline-none py-1 px-2 rounded-lg border-1 border bg-transparent"
         type="number" 
         id="price"
         name="price"
         onChange={handelChange}
         placeholder='00.00'
         required
         />
        </div>
        <div className="relative">
        <label htmlFor="description" className="block text-white-600">Descripcion</label>
        <textarea 
        className="text-white outline-none bg-transparent border-1 border w-full" 
        rows="3" 
        cols="50"
        id="description"
        name="description"
        onChange={handelChange}
        required
        ></textarea>
        </div>
        <button type="submit" className="border border-1 py-1 px-2 border-gray-200 w-1/2 mx-auto text-white rounded-lg  hover:bg-red-300 ">Registrar producto</button>
       </form>
   </div>

    );
}
export default RegisterProduct;