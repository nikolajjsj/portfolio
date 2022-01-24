import Image from 'next/image'
import AppSection from '../components/AppSection'
import { BsLinkedin } from 'react-icons/bs'
import {
  IoLogoTwitter,
  IoLogoGithub,
} from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const Home = () => {
  return (
    <>
      <AppSection>
        <div className='flex justify-center my-4 rounded bg-gray-300 p-4'>
          👋 Hello, I&apos;m a full-stack App & Web developer based in Denmark!
        </div>

        <div className='flex justify-between'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-4xl font-bold'>Nikolaj Jensen</h2>
            <p>Digital Wizard ( Developer / Learner )</p>
          </div>
          <Image
            src='/images/headshot.jpg'
            height={80}
            width={80}
            className='rounded-full border-black border-2 shadow'
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
          <div className="font-bold">1994</div>
          <div>Born in Denmark.</div>

          <div className="font-bold">2020</div>
          <div>
            Completed the Master&apos;s in Biology at Aarhus University
          </div>

          <div className="font-bold">2020 - now</div>
          <div>Freelance full-stack developer</div>

          <div className="font-bold">2021 - now</div>
          <div>Frontend developer at Novicell</div>
        </div>
      </AppSection>

      <AppSection title='Socials'>
        <p className="flex items-center mr-2 font-semibold mb-2">
          <SiGmail size={22} color="#BB001B" />nikolajjsj@gmail.com
        </p>

        <div className="flex">
          <a
            href="https://www.linkedin.com/in/nikolaj-johannes-skole-jensen-73810b137/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={32} color="#007db1" className="mr-2" />
          </a>

          <a
            href="https://github.com/nikolajjsj"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={32} color="black" className="mr-2" />
          </a>

          <a
            href="https://twitter.com/nikolajjsj"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoTwitter size={32} color="#1DA1F2" />
          </a>
        </div>
      </AppSection>
    </>
  )
}

export default Home
