import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { getDates } from "./helpers/getDates";
import WriteRUC from "./WriteRUC";

export default function FacturaSearch() {
    const [RUC, setRUC] = useState({});
    const [TipoDocumento, setTipoDocumento] = useState();
    
    const selectDocumento=({target})=>{
        setTipoDocumento(target.value);
    }
    const getRUC=(number)=>{
        getDates(TipoDocumento,number).then(data=>setRUC(data));
    }
    return (
    <>
    <div className="col-span-full sm:col-span-2">
            <label className="text-sm">Tipo de Documento</label>
            <select className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" onChange={selectDocumento}>
                <option value="ruc">RUC</option>
                <option value="dni">DNI</option>
            </select>
        </div>

    <div className="col-span-full sm:col-span-2">
            <label  className="text-sm">Num. Documento</label>
            <WriteRUC onRUC={(data)=>setRUC(data)}></WriteRUC>
        </div>
            {
                RUC.numero&&RUC.numero.length===8&&TipoDocumento==="dni"&&getRUC(RUC.numero)
            }
            {
                RUC.numero&&RUC.numero.length===11&&TipoDocumento==="ruc"&&getRUC(RUC.numero)
            }
        <div className="col-span-full sm:col-span-4">
            <label  className="text-sm">Nombre o Razón Social</label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md ">
                  {/*boton para buscar el RUC */}
                
                <FaUserAlt />
                
                </span>
                <input
                    type="text"
                    className="w-full rounded-r-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                    placeholder=""
                    value={RUC.message?"Documento invalido":RUC.ruc?RUC.razonSocial:RUC.dni&&RUC.nombres+" "+RUC.apellidoPaterno+" "+RUC.apellidoMaterno}
                    readOnly
                />
            </div>
        </div>

        <div className="col-span-full sm:col-span-4">
            <label  className="text-sm">Dirección</label>
            <input  
            type="text"
            placeholder="" 
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
            value={RUC.message?"Documento invalido":RUC.ruc?RUC.direccion:RUC.nombres&&"Direccion no registrada"}
            readOnly
            />
        </div>

        <div className="col-span-full sm:col-span-2">
            <label  className="text-sm">Ubigeo</label>
            <input  
            type="number" 
            placeholder="" 
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
            value={RUC.message?0:RUC.ruc?RUC.ubigeo:RUC.nombres&&0}
            readOnly
            />
        </div>
    </>
    )
}
