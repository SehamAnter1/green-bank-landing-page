import React, { useState } from 'react'
import FAQ_Item from '../components/FAQ_Item'

export default function FAQs() {
    const data = [
        {
            question: 'What credit score do I need to apply for a credit card?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
        {
            question: 'How can I apply for a credit card online?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
        {
            question: 'Are there any annual fees associated with the credit card?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
        {
            question: 'How long does it take to receive the credit card once approved?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
        {
            question: ' How can I check my credit card balance and transactions?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
        {
            question: ' What should I do if my credit card is lost or stolen?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
        {
            question: 'Is my credit card information secure?',
            answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        },
    ]
    const [isOpenIndex, setIsOpenIndex] = useState(false);
    const toggleIndex = (index) => {
        setIsOpenIndex(isOpenIndex === index ? null : index)
    }
    return (
        <section className='container'>
            <div className="grid gap_50 max-w-[1020px] mx-auto">
                <h2 className="font-bold title_40 text-center">FAQs</h2>
                <div className="grid gap-6">

                    {data?.map((item, index) => (
                        <FAQ_Item
                            key={index}
                            index={index}
                            question={item?.question}
                            answer={item?.answer}
                            isOpen={isOpenIndex === index}
                            toggleIndex={toggleIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
