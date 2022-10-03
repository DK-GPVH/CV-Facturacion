import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { CgInsertAfterR } from "react-icons/cg";
import FacturaSearch from "../../../components/user/Factura/FacturaSearch";



export default function Factura() {
  return (
    <div className="px-1 lg:px-6 bg-gray-800 text-gray-100 rounded-lg">
  <form  action="" className="container flex flex-col mx-auto space-y-12">
    <div className="grid grid-cols-8 gap-6 p-6 rounded-md shadow-sm ">
      
    <div className="col-span-full sm:col-span-2">
          <label className="text-sm">Serie</label>
          <input type="text" disabled placeholder="F001-00637869" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
    </div>

    <div className="col-span-full sm:col-span-2">
          <label className="text-sm">Fecha de Emisión</label>
          <input type="date"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
    </div>

    <div className="col-span-full sm:col-span-2">
          <label className="text-sm">Tipo de Moneda</label>
          <select className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" >
                <option>Soles</option>
                <option>Dólares</option>
              </select>
    </div>

    <div className="col-span-full sm:col-span-2">
          <label  className="text-sm">Núm. Celular</label>
          <input  type="number" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
        </div>

    
        


      <div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-8">

        <FacturaSearch></FacturaSearch>
        <div className="col-span-full sm:col-span-2">
            <label className="text-sm ">
                Agregar Servicios o Productos
            </label>
            <Button className=" bg-[#2F9B86] px-[45%] w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-200">
                <CgInsertAfterR className="w-5 h-5 " />
            </Button>
        </div>

      </div>
    </div>
  </form>
</div>
  )
}
