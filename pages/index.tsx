import AppSection from '../components/AppSection'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import SkillPill from '../components/SkillPill'

const Home = () => {
  return (
    <>
      <AppSection>
        <div className='flex justify-center my-4 rounded bg-gray-300 p-4 dark:bg-gray-900 dark:text-white'>
          👋 Hello, I&apos;m a full-stack App & Web developer based in Denmark!
        </div>

        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-4xl font-bold'>Nikolaj Jensen</h2>
            <p>Digital Wizard ( Developer / Learner )</p>
          </div>
          <img
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

      <AppSection title='Skills'>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mt-4">Proficient with</h3>
          <div className="flex flex-wrap justify-center">
            <SkillPill title="Flutter" icon="https://cdn.svgporn.com/logos/flutter.svg?response-content-disposition=attachment%3Bfilename%3Dflutter.svg" />
            <SkillPill title="React" icon="https://cdn.svgporn.com/logos/react.svg?response-content-disposition=attachment%3Bfilename%3Dreact.svg" />
            <SkillPill title="Vue" icon="https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg" />
            <SkillPill title="Angular" icon="https://cdn.svgporn.com/logos/angular-icon.svg?response-content-disposition=attachment%3Bfilename%3Dangular-icon.svg" />
            <SkillPill title="Node" icon="https://cdn.svgporn.com/logos/nodejs-icon.svg?response-content-disposition=attachment%3Bfilename%3Dnodejs-icon.svg" />
            <SkillPill title="Express" icon="https://cdn.svgporn.com/logos/express.svg?response-content-disposition=attachment%3Bfilename%3Dexpress.svg" />
            <SkillPill title="JavaScript" icon="https://cdn.svgporn.com/logos/javascript.svg?response-content-disposition=attachment%3Bfilename%3Djavascript.svg" />
            <SkillPill title="TypeScript" icon="https://cdn.svgporn.com/logos/typescript-icon.svg?response-content-disposition=attachment%3Bfilename%3Dtypescript-icon.svg" />
            <SkillPill title="Sass" icon="https://cdn.svgporn.com/logos/sass.svg?response-content-disposition=attachment%3Bfilename%3Dsass.svg" />
            <SkillPill title="Tailwind CSS" icon="https://cdn.svgporn.com/logos/tailwindcss-icon.svg?response-content-disposition=attachment%3Bfilename%3Dtailwindcss-icon.svg" />
            <SkillPill title="Less" icon="https://cdn.svgporn.com/logos/less.svg?response-content-disposition=attachment%3Bfilename%3Dless.svg" />
            <SkillPill title="Jest" icon="https://cdn.svgporn.com/logos/jest.svg?response-content-disposition=attachment%3Bfilename%3Djest.svg" />
            <SkillPill title="Python" icon="https://cdn.svgporn.com/logos/python.svg?response-content-disposition=attachment%3Bfilename%3Dpython.svg" />
            <SkillPill title="R" icon="https://cdn.svgporn.com/logos/r-lang.svg?response-content-disposition=attachment%3Bfilename%3Dr-lang.svg" />
            <SkillPill title="Git" icon="https://cdn.svgporn.com/logos/git-icon.svg?response-content-disposition=attachment%3Bfilename%3Dgit-icon.svg" />
            <SkillPill title="jQuery" icon="https://cdn.svgporn.com/logos/jquery.svg?response-content-disposition=attachment%3Bfilename%3Djquery.svg" />
          </div>
          <h3 className="text-lg font-bold mt-4">Played with</h3>
          <div className="flex flex-wrap justify-center">
            <SkillPill title="Rust" icon="https://cdn.svgporn.com/logos/rust.svg?response-content-disposition=attachment%3Bfilename%3Drust.svg" />
            <SkillPill title="Go" icon="https://cdn.svgporn.com/logos/gopher.svg?response-content-disposition=attachment%3Bfilename%3Dgopher.svg" />
            <SkillPill title="Elm" icon="https://cdn.svgporn.com/logos/elm.svg?response-content-disposition=attachment%3Bfilename%3Delm.svg" />
            <SkillPill title="C" icon="https://cdn.svgporn.com/logos/c.svg?response-content-disposition=attachment%3Bfilename%3Dc.svg" />
            <SkillPill title="Lua" icon="https://cdn.svgporn.com/logos/lua.svg?response-content-disposition=attachment%3Bfilename%3Dlua.svg" />
            <SkillPill title="Contentful" icon="https://cdn.svgporn.com/logos/contentful.svg?response-content-disposition=attachment%3Bfilename%3Dcontentful.svg" />
            <SkillPill title="Webassembly" icon="https://cdn.svgporn.com/logos/webassembly.svg?response-content-disposition=attachment%3Bfilename%3Dwebassembly.svg" />
            <SkillPill title="GraphQL" icon="https://cdn.svgporn.com/logos/graphql.svg?response-content-disposition=attachment%3Bfilename%3Dgraphql.svg" />
            <SkillPill title="PostgreSQL" icon="https://cdn.svgporn.com/logos/postgresql.svg?response-content-disposition=attachment%3Bfilename%3Dpostgresql.svg" />
            <SkillPill title="MongoDB" icon="https://cdn.svgporn.com/logos/mongodb.svg?response-content-disposition=attachment%3Bfilename%3Dmongodb.svg" />
            <SkillPill title="Firebase" icon="https://cdn.svgporn.com/logos/firebase.svg?response-content-disposition=attachment%3Bfilename%3Dfirebase.svg" />
          </div>
        </div>
      </AppSection>

      <AppSection title='Bio'>
        <div className='grid grid-cols-[1fr,4fr]'>
          <div className="font-bold">1994</div>
          <div>Born in Denmark.</div>

          <div className="font-bold">2020</div>
          <div>
            Completed the Master&apos;s in Biology at Aarhus University
          </div>

          <div className="font-bold">2021 - 2022</div>
          <div>Frontend developer @ Novicell</div>

          <div className="font-bold">2020 - now</div>
          <div>Freelance full-stack developer</div>

          <div className="font-bold">2022 - now</div>
          <div>Fullstack developer @ Friggtech</div>
        </div>
      </AppSection>

      <AppSection title='Socials'>
        <p className="flex items-center font-semibold mb-2">
          <SiGmail size={22} color="#BB001B" className="mr-2" />nikolajjsj@gmail.com
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
