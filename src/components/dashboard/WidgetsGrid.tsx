import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoAccessibility, IoAdd, IoCart, IoReloadCircle } from 'react-icons/io5'



export const WidgetsGrid = () => {
  return (
    <div className="flex flex-wrap p-2">
    <SimpleWidget
        title={ 'Primer componente'}
        subTitle={'subtitulo del componente'}
        href={'/dashboard/pokemons'}
        icon ={<IoCart size={70} className='text-blu-600' />}
        label={'Tarjeta #1'}
        />
        <SimpleWidget
        title={ 'Segundo componente'}
        subTitle={'subtitulo del componente'}
        href={'/dashboard/pokemons'}
        icon ={<IoReloadCircle size={70} className='text-blu-600' />}
        label={'Tarjeta #1'}
        />
        <SimpleWidget
        title={ 'Tercer componente'}
        subTitle={'subtitulo del componente'}
        href={'/dashboard/pokemons'}
        icon ={<IoAdd size={70} className='text-blu-600' />}
        label={'Tarjeta #1'}
        />
  </div>
  )
}
