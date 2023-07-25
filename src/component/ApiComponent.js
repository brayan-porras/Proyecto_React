import React,{useState} from 'react'
import { useSongs } from '../hooks/useSongs';
import { SongComponent } from './SongComponent';
import './SongComponent.css'; 

export const ApiComponent = () => {
const {songs} = useSongs();
const [search, setSearch] = useState("");

return (
<>
<div className='p'>
<h1>Listado de Canciones</h1>
</div>

<input type="text" value={search} onChange={({target})=> setSearch(target.value)}
placeholder='Busqueda por ID o Nombre del Titulo'/>
{/*aqui se crea un campo de texto en el que los usuarios pueden ingresar texto para buscar por ID o nombre de título. El valor ingresado se guarda en una variable llamada search, y cada vez que cambia el contenido del campo, se actualizará el valor de search  */}

  
{/* se coloco el metodo 'filter' para filtrar las canciones según el id y el titulo de cancion y 'map' para renderizar el componente SongComponent para cada canción filtrada*/} 
{
songs.filter(song => `${song.id}`.includes(search)|| song.title.includes(search)).map(song => < SongComponent key={song.id} {...song}/> )    
}   

</>
  )
}
