import React from 'react'

export default function HomePage(props) {
    const { setAudioStream, setFile } = props

    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20'>
            <h1 className='text-blue-400 bold font-semibold text-5xl sm: text-6xl md:text-7xl'>Echo</h1>
            <h3 className='font-medium md:text-lg'>
                Record <span 
                className='text-blue-400'>&rarr;</span> Transcribe <span 
                className='text-blue-400'>&rarr;</span> Translate 
            </h3>
            <button className='flex items-center text-base justify-between gap-4 mx-auto w-80 max-w-full my-full px-4 py-2 rounded-xl specialBtn'>
                <p className='text-blue-400'>Record</p>
                <i className="fa-solid fa-microphone"></i>
            </button>
            <p>
                Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'> upload <input onChange={(e) => {
                    const tempFile = e.target.files[0]
                    setFile(tempFile)
                }} className='hidden' type='file' accept='.mp3,.wave' /> a mp3 file</label>
            </p>
            <p className='italic text-slate-500'>100% free and open source</p>
        </main>
    )
}
