import { Inter } from 'next/font/google';
import React, { useState } from 'react';


const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";


export async function getServerSideProps() {
   const res = await fetch("$ {YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId={playlistLink}&maxResults=50&key=${process.env.YOUTUBE_API_KEY");
   const data = await res.json();
   return {
       props: {
           data
       }
   }
}


export default function Home() {
   const [link, setLink] = useState("paste your link");
   const enter = () => {
       alert(link)
   }
   const change = event => {
       setLink(event.target.value)
   }


   return (
       <div>
           <Head>
               <title>My Playlist</title>
           </Head>


           <main>
               <section className=" bg-black">
                   <h1>Add a link to a Youtube Playlist</h1>
                   <input onChange={change}
                   link = {link}></input>
                   <button onClick = {enter}>Enter </button>
               </section>
           <ul>
               {data.items.map((item) => {
                   const { id, snippet = {} } = item;
                   const { title, thumbnails = {}, resourceId } = snippet;
                   const { medium = {}} = thumbnails
                   return (
                       <li key={id}>
                           <a href="https://www.youtube.com/watch?v=${resourceId.videoId}">
                               <p>
                                   <img width={medium.width} height={medium.height} src={medium.url} alt="" ></img>
                               </p>
                               <h3>{ title }</h3>
                           </a>
                       </li>
                   )
               })}
           </ul>
           </main>
       </div>
   )
}
