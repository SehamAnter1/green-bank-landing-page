import React, { useState } from 'react'
import { minus_icon, plus_icon } from '../../assets/Icons';

export default function FAQ_Item({ question, answer, isOpen, toggleIndex, index }) {
    return (
        <div className="flex justify-between items-start border-b border-muted-foreground pb-4">
            <div className="grid  gap-4">
                <h2 className='font-medium text_24'>{question}</h2>
                <p className={`text-muted-foreground transition-all duration-300 ${isOpen ? "" : "max-h-0 overflow-hidden"}`}>{answer}</p>
            </div>
            <span className=" cursor-pointer"
                role='button'
                onClick={() => toggleIndex(index)}
            >
                {isOpen ?
                    minus_icon() :
                    plus_icon()}
            </span>
        </div>

    )
}
