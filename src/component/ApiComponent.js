import React,{useState} from 'react'
import { useSongs } from '../hooks/useSongs';
import { SongComponent } from './SongComponent';

export const ApiComponent = () => {
    const {songs} = useSongs();
 const [search, setSearch] = useState("");
  return (


    <>
    <input type="text" value={search} onChange={({target})=> setSearch(target.value)}/>

    {

songs.filter(song => `${song.id}`.includes(search)|| song.title.includes(search)).map(song => < SongComponent key={song.id} {...song}/> )    
    }


         
    </>
  )
}
