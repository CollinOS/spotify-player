import React from 'react'
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

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
  return (
    <Image
      alt={song.title}
      src={song.albumImageUrl}
      width={2000}
      height={2000}
      quality={50}
      className="h-screen w-fit rounded-full animate-[spin_30s_linear_infinite]"
      blurDataURL={song.albumImageUrl}
    />
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