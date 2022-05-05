import { ButtonClose } from "../ButtonClose";

import bugImageUrl from '../../images/bug.png'
import ideaImageUrl from '../../images/idea.png'
import thoughtUrl from '../../images/thought.png'
import { useState } from "react";
import { FeedbackTypeStep } from "./stepsComponents/FeedbackTypeStep";
import { FeedbackContentStep } from "./stepsComponents/FeedbackContentStep";
import { FeedbackSucessStep } from "./stepsComponents/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto representando um problema'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada acesa'
        }

    },
    OUTRO: {
        title: 'Outro',
        image: {
            source: thoughtUrl,
            alt: 'Imagem de um balão de pensamento'
        }


    }}


    export type FeedbackType = keyof typeof feedbackTypes;

    export function WidgetForm(): JSX.Element {
        const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
        const [feedbackSend, setFeedbackSent]=useState(false)

        function handleRestartFeedback(){
         setFeedbackSent(false)
         setFeedbackType(null)
        }
        return (
            <div className="bg-zinc-900 p-4 relative rounded-t-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            { feedbackSend ? (
                <FeedbackSucessStep  restartFeedback={handleRestartFeedback} />
            ) : (
            <>
                {!feedbackType ? (
                     <FeedbackTypeStep FeedbackTypeChanged={setFeedbackType}/>
                    ): 
                    (
                     <FeedbackContentStep 
                        feedbackType={feedbackType}
                        restartFeedback={handleRestartFeedback}
                        onFeedbackSent={ () => setFeedbackSent(true)}
                    />
                )}
          </>

         )}
            
             <footer className="text-xs text-neutral-400">
                Feito com ♥ pela  <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}