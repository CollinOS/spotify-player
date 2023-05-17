import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { TbPlayerSkipForwardFilled, TbPlayerSkipBackFilled, TbPlayerPauseFilled, TbPlayerPlayFilled } from 'react-icons/tb';

function NotPlaying() {
  return (
    <Image
      alt={'/'}
      src={'/'}
      width={2000}
      height={2000}
      quality={50}
      className="h-screen w-fit rounded-full bg-zinc-600"
    />
  );
}

function WhenPlaying({ song }) {
  const [paused, setPaused] = useState(false);

  function handlePause() {
    !paused
    ? setPaused(true)
    : setPaused(false)
  }

  return (
    <div>
      <div className='absolute text-left p-8 top-0 left-0 h-56 w-1/3'>
        <h2 className='text-amber-100 text-2xl font-semibold'>{song.title}</h2>
        <h2 className='text-amber-100 bg-text-xl'>{song.artist}</h2>
      </div>
      <div className='absolute text-right p-8 top-0 right-0 h-56 w-1/3'>
        <div className='w-96 ml-auto mr-0 h-3 rounded-full bg-amber-100'/>
        <div className='p-1' />
        <h2 className='text-amber-100 bg-text-xl'>03:47</h2>
      </div>
      <div className='absolute text-right p-8 bottom-0 right-0 w-1/3'>
        <div className='flex flex-row justify-end'>
          <button className='flex justify-center items-center text-2xl text-amber-100 h-14 w-20 border border-amber-100 mr-2 rounded-xl hover:bg-amber-100 hover:text-zinc-900 duration-200'>
            <TbPlayerSkipBackFilled />
          </button>
          <button onClick={handlePause} className='flex justify-center items-center text-2xl text-amber-100 h-14 w-20 border border-amber-100 rounded-xl hover:bg-amber-100 hover:text-zinc-900 duration-200'>
            {!paused 
              ?<TbPlayerPauseFilled/>
              :<TbPlayerPlayFilled/>
            }
          </button>
          <button className='flex justify-center items-center text-2xl text-amber-100 h-14 w-20 border border-amber-100 ml-2 rounded-xl hover:bg-amber-100 hover:text-zinc-900 duration-200'>
            <TbPlayerSkipForwardFilled />
          </button>
        </div>
      </div>
      <div className='absolute text-left p-8 bottom-0 left-0 w-1/3'>
        <h2 className='text-amber-100 bg-text-xl'>Controls</h2>
        <h2 className='text-amber-100 text-2xl font-semibold'>Press F11</h2>
      </div>

      <Image
        alt={song.title}
        src={song.albumImageUrl}
        width={2000}
        height={2000}
        quality={50}
        className={!paused ? "h-screen w-fit rounded-full animate-[spin_30s_linear_infinite]" : "h-screen w-fit rounded-full"}
        blurDataURL={song.albumImageUrl}
      />
    </div>
  );
}

const Player = () => {
  const { data: currentSong } = useSWR("/api/now-playing", fetcher);
  
  return (
    <div className='flex flex-row w-full items-center justify-center'>
      {currentSong?.isPlaying ? (
          <WhenPlaying song={currentSong} />
        ) : (
          <NotPlaying />
        )}
    </div>
  )
}

export default Player