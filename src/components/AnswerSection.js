
import React from "react";

export default function AnswerSection({arr}) {
    console.log(arr)
    
    return(
        <section className="answer-section">
            { arr.length > 0 &&
                arr.map( (item, index)=> { 
                    const options = [...item.incorrectAnswers, item.correctAnswer]
                    function shuffle(array) {
                        array.sort(() => Math.random() - 0.5);
                    }
                    shuffle(options)

                    const optionsList = options.map( (option, index) => {
                        return (
                            <button key={index}>{option}</button>
                        )
                    })

                    return (
                       
                        <section className="questions-container" key={item.id}>
                        <h2> {item.question} </h2>
                        <div className="options">{optionsList}</div>
                        </section>
                    )
                })
            }
            <button className="check-button" >Check answers</button>
        </section>
    )
} 




