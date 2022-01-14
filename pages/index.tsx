import type { NextPage } from 'next'
import App from 'next/app'
import Image from 'next/image'
import AppSection from '../components/AppSection'

const Home: NextPage = () => {
  return (
    <>
      <div className='h-[90vh] relative bg-white'>
        <header className='flex flex-row h-full w-full md:px-8'>
          <div className='h-full w-full bg-red-400 md:rounded'></div>
          <div className='h-full w-full'></div>
        </header>
        <h1 className='absolute top-1/3 left-1/2 -ml-20 md:-ml-40 text-7xl md:text-9xl font-black'>
          HE
          <br />
          LLO<span className='text-red-400'>.</span>
        </h1>
      </div>

      <AppSection>
        <div className='my-4 rounded bg-gray-300 p-4'>
          👋 Hello, I&apos;m a full-stack App & Web developer based in Denmark!
        </div>

        <div className='flex'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-4xl font-bold'>Nikolaj Jensen</h2>
            <p>Digital Wizard ( Developer / Learner )</p>
          </div>
          <Image
            src='/images/headshot.jpg'
            height={80}
            width={80}
            className='rounded-full border-black border-2'
            alt='Avatar image'
          />
        </div>
      </AppSection>

      <AppSection title='Work'>
        <p>
          I am a full-stack developer working both as a freelancer, and employed
          at Novicell doing frontend work. I have a passion for learning and
          building awesome digital services/stuff that i want. I love launching
          new products, from the planning and designing to solving real-life
          problems with well coded solutions. I have launched several app
          projects to both Google Play and Apple Appstore. When not coding i
          enjoy tasting whisky, going on hikes, and reading sci-fi books.
        </p>
      </AppSection>

      <AppSection title='Bio'>
        <div className='grid grid-cols-[1fr,4fr]'>
          <div>1994</div>
          <div>Born in Denmark.</div>

          <div>2020</div>
          <div>
            Completed the Master&apos;s program in Biology at Aarhus University
          </div>

          <div>2020 - present</div>
          <div>Works as a freelance full-stack developer</div>

          <div>2021 - present</div>
          <div>Working at Novicell</div>
        </div>
      </AppSection>
    </>
  )
}

export default Home
