import React from 'react';

import coverImage from '../../assets/coverphoto.jpg'

function About () {
    return(
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-400">Hi I'm Rejene! <br className="hidden lg:inline-block" />Welcome to my portfolio! </h1>
                <p className="mb-8 leading-relaxed">
                 I am a recent bootcamp graduate from the University of Minnesota. 
                 I have a background in chemistry and I enjoy solving complex puzzles. I fell in love with science as a little girl. 
                 I loved the complexity of knowing how things function and the continuous search for solutions. 
                 I did some research and decided to explore coding. I enjoy the ever changing technologies and the numerous possibilities that come with each language. 
                 Feel free to look around and contact me with any questions.
                    
                </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>  
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={coverImage}
              />
            </div>
          </div>  
        </section>
    );

}

export default About;