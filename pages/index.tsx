import AppSection from "../components/AppSection";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import SkillPill from "../components/SkillPill";

const Home = () => {
  return (
    <>
      <AppSection>
        <h2 className="text-center font-bold my-8">
          👋 Hello, I&apos;m Nikolaj, a fullstack developer based in Denmark
        </h2>

        <img
          src="/images/headshot.jpg"
          height={120}
          width={120}
          className="mx-auto rounded-full  shadow"
          alt="Avatar image"
        />
      </AppSection>

      <AppSection title="Work">
        <p className="mx-auto max-w-prose text-justify">
          I am a full-stack developer working both as a freelancer, and employed
          at Novicell doing frontend work. I have a passion for learning and
          building awesome digital services/stuff that i want. I love launching
          new products, from the planning and designing to solving real-life
          problems with well coded solutions. I have launched several app
          projects to both Google Play and Apple Appstore. When not coding i
          enjoy tasting whisky, going on hikes, and reading sci-fi books.
        </p>
      </AppSection>

      <AppSection title="Skills">
        <div className="flex flex-col items-center mx-auto max-w-prose">
          <h3 className="text-md font-bold mt-4">Proficient with</h3>
          <div className="flex flex-wrap justify-center">
            <SkillPill
              title="Flutter"
              icon="https://cdn.svgporn.com/logos/flutter.svg?response-content-disposition=attachment%3Bfilename%3Dflutter.svg"
            />
            <SkillPill
              title="React"
              icon="https://cdn.svgporn.com/logos/react.svg?response-content-disposition=attachment%3Bfilename%3Dreact.svg"
            />
            <SkillPill
              title="Vue"
              icon="https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg"
            />
            <SkillPill
              title="Angular"
              icon="https://cdn.svgporn.com/logos/angular-icon.svg?response-content-disposition=attachment%3Bfilename%3Dangular-icon.svg"
            />
            <SkillPill
              title="Node"
              icon="https://cdn.svgporn.com/logos/nodejs-icon.svg?response-content-disposition=attachment%3Bfilename%3Dnodejs-icon.svg"
            />
            <SkillPill
              title="Express"
              icon="https://cdn.svgporn.com/logos/express.svg?response-content-disposition=attachment%3Bfilename%3Dexpress.svg"
            />
            <SkillPill
              title="JavaScript"
              icon="https://cdn.svgporn.com/logos/javascript.svg?response-content-disposition=attachment%3Bfilename%3Djavascript.svg"
            />
            <SkillPill
              title="TypeScript"
              icon="https://cdn.svgporn.com/logos/typescript-icon.svg?response-content-disposition=attachment%3Bfilename%3Dtypescript-icon.svg"
            />
            <SkillPill
              title="Sass"
              icon="https://cdn.svgporn.com/logos/sass.svg?response-content-disposition=attachment%3Bfilename%3Dsass.svg"
            />
            <SkillPill
              title="Tailwind CSS"
              icon="https://cdn.svgporn.com/logos/tailwindcss-icon.svg?response-content-disposition=attachment%3Bfilename%3Dtailwindcss-icon.svg"
            />
            <SkillPill
              title="Python"
              icon="https://cdn.svgporn.com/logos/python.svg?response-content-disposition=attachment%3Bfilename%3Dpython.svg"
            />
            <SkillPill
              title="Git"
              icon="https://cdn.svgporn.com/logos/git-icon.svg?response-content-disposition=attachment%3Bfilename%3Dgit-icon.svg"
            />
            <SkillPill
              title="GraphQL"
              icon="https://cdn.svgporn.com/logos/graphql.svg?response-content-disposition=attachment%3Bfilename%3Dgraphql.svg"
            />
            <SkillPill
              title="PostgreSQL"
              icon="https://cdn.svgporn.com/logos/postgresql.svg?response-content-disposition=attachment%3Bfilename%3Dpostgresql.svg"
            />
          </div>
          <h3 className="text-md font-bold mt-4">Played with</h3>
          <div className="flex flex-wrap justify-center">
            <SkillPill
              title="Rust"
              icon="https://cdn.svgporn.com/logos/rust.svg?response-content-disposition=attachment%3Bfilename%3Drust.svg"
            />
            <SkillPill
              title="Go"
              icon="https://cdn.svgporn.com/logos/gopher.svg?response-content-disposition=attachment%3Bfilename%3Dgopher.svg"
            />
            <SkillPill
              title="C"
              icon="https://cdn.svgporn.com/logos/c.svg?response-content-disposition=attachment%3Bfilename%3Dc.svg"
            />
            <SkillPill
              title="Webassembly"
              icon="https://cdn.svgporn.com/logos/webassembly.svg?response-content-disposition=attachment%3Bfilename%3Dwebassembly.svg"
            />
            <SkillPill
              title="MongoDB"
              icon="https://cdn.svgporn.com/logos/mongodb.svg?response-content-disposition=attachment%3Bfilename%3Dmongodb.svg"
            />
            <SkillPill
              title="Firebase"
              icon="https://cdn.svgporn.com/logos/firebase.svg?response-content-disposition=attachment%3Bfilename%3Dfirebase.svg"
            />
            <SkillPill
              title="R"
              icon="https://cdn.svgporn.com/logos/r-lang.svg?response-content-disposition=attachment%3Bfilename%3Dr-lang.svg"
            />
          </div>
        </div>
      </AppSection>

      <AppSection title="Bio">
        <div className="flex flex-col mx-auto justify-center items-center">
          <div>
            <span>
              <b>1994 </b>
            </span>
            - Born in Denmark.
          </div>
          <div>
            <span>
              <b>2020 </b>
            </span>
            Completed the Master&apos;s in Biology at Aarhus University
          </div>
          <div>
            <span>
              <b>2021 - 2022 </b>
            </span>
            Frontend developer @ Novicell
          </div>
          <div>
            <span>
              <b>2020 - now </b>
            </span>
            Freelance full-stack developer
          </div>
          <div>
            <span>
              <b>2022 - now </b>
            </span>
            Fullstack developer @ Friggtech
          </div>
        </div>
      </AppSection>

      <AppSection title="Socials">
        <p className="flex items-center justify-center font-semibold mb-2">
          <SiGmail size={22} color="#BB001B" className="mr-2" />
          nikolajjsj@gmail.com
        </p>

        <div className="flex justify-center">
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
  );
};

export default Home;
