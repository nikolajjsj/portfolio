<template>
  <div
    class="flex flex-col justify-center items-center m-auto pb-10 w-4/5 text-center max-w-6xl"
  >
    <section class="relative md:pt-16">
      <div class="w-auto flex flex-col mx-auto px-4 lg:flex-row">
        <div class="w-full text-center lg:text-right lg:w-1/2">
          <h1
            class="text-gray-800 text-4xl font-bold leading-tight tracking-wide md:text-6xl md:pl-20"
          >
            Freelance Developer
          </h1>
          <p class="text-sm md:text-base leading-loose mt-4 mb-6">
            Experienced Developer proficient in Dart, JavaScript, and Python.
            I've mainly worked on frontend development for both web and
            mobile. Mobile development has been with either Flutter or some
            native Android development. Whereas web development have been done
            with Vue and React.
          </p>
          <p class="text-sm md:text-base leading-loose mt-4 mb-6">
            I also have a education as a biologist, where I've worked mainly
            within Zoophysiology. This includes laboratory work with several
            mammals, reptiles, amphibians, and insects. This work has led to a
            published peer-reviewed article, on insect cold physiology.
            Dataanalysis has been performed with the use of Python, MatLab,
            and R.
          </p>
          <a
            href="mailto:nikolajjsj@gmail.com"
            class="px-8 py-3 font-medium tracking-widest bg-transparent border hover:bg-gray-900 border-gray-900 hover:text-white"
          >
            Contact
          </a>
        </div>

        <img
          class="w-full order-first p-4 lg:w-1/2 lg:order-last"
          aria-hidden="true"
          role="presentation"
          src="~/assets/hello.jpg"
        >
      </div>
    </section>
  </div>
</template>
