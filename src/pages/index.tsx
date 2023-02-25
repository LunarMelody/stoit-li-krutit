import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { QUESTION_NODES, QuestionNode } from '@/utils/questions'
import { Fragment, useState } from 'react'


const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function Home() {
  const [question, setQuestion] = useState<QuestionNode | undefined>(QUESTION_NODES);

  const buttonYes = () => {
    setQuestion(current => current?.nextPositive);
  }

  const buttonNo = () => {
    setQuestion(current => current?.nextNegative);
  }

  return (
    <>
      <Head>
        <title>Стоит ли крутить персонажа?</title>
        <meta name="description" content="Пошаговый гайд на крутилку персонажей в геншине." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main bg-slate-800 text-slate-300 justify-center items-center p-4">
        <div className='flex flex-col bg-slate-700 rounded-md border border-slate-500 p-4 sm:min-w-[400px] w-full max-w-[800px]'>
          <h1 className='text-4xl md:text-6xl font-semibold self-center text-center'>{question?.message}</h1>

          {(question?.finish !== true) && (
            <div className='flex flex-row justify-evenly mt-6'>
              <button className='bg-rose-500/50 text-white rounded-md px-2 py-1 font-semibold sm:text-lg' onClick={buttonNo}>
                Нет
              </button>

              <button className='bg-orange-500/50 text-white rounded-md px-2 py-1 font-semibold sm:text-lg' onClick={buttonNo}>
                Cомневаюсь
              </button>

              <button className='bg-emerald-500/50 text-white rounded-md px-2 py-1 font-semibold sm:text-lg' onClick={buttonYes}>
                Да
              </button>
            </div>
          )}
        </div>
        
        <p className='mt-6 text-sm text-slate-400'>
          Идея для веб-сайта возникла благодаря вопросам в чате на стриме <a className='underline underline-offset-4 text-sky-600 hover:text-sky-400 transition-colors' href='https://www.twitch.tv/nuke73' rel="noreferrer" target="_blank">@Nuke73</a> и невероятно простой <a className='underline underline-offset-4 text-sky-600 hover:text-sky-400 transition-colors' href='/scheme-cut.jpg' rel="noreferrer" target="_blank">схеме</a>.
        </p>
      </main>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}