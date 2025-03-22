import React from 'react'
import { LANGUAGES } from '../utils/presets'

export default function Translation(props) {
    const { textElement, translation, setTranslation, toLanguage, setToLanguage, translating, setTranslating } = props

    return (
        <div className='flex flex-col gap-2 max-w-[400px] w-full mx-auto'>
            <div className='flex items-stretch gap-2'>
                <select className='flex-1 outline-none bg-white focus:outline-none border border-transparent p-2 rounded-[10px] hover:border-blue-300 duration-200' value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}>
                    <option value={'Select language'}>Select language</option>
                    {Object.entries(LANGUAGES).map(([key, value]) => {
                        return (
                            <option key={key} value={value}>{key}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
