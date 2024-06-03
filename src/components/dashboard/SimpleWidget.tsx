
'use client'
import Link from 'next/link';
import {  useAppSelector } from "@/store";

interface Props{
  title: string;
  subTitle?:string;
  label?: string;
  icon?:React.ReactNode;
  href?: string;
}
export const SimpleWidget = ({title, subTitle, label, icon, href }:Props) => {
const isCart = useAppSelector( state => state.counter.count)



  return (
    <div className="bg-white shadow-xl mt-2 p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{title}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {
              icon 
            }
              
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{ isCart }</h4>
              {
              subTitle && (<p className="text-xs text-gray-500">Subtitulo</p>)
              }
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          {
            href && (<Link href={ href } className="text-indigo-600 text-xs font-medium">Más</Link>)
          }
            
        </div>
        
      </div>
    </div>
  )
}