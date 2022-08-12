import React from 'react';

import coverImage from '../../assets/coverphoto.jpg'

function About () {
    return(
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"></div>
              <h1>Hi I'm Rejene!</h1>
                <p>
                 Welcome to my portfolio! My name is Rejene and I am a recent bootcamp graduate from the University of Minnesota. 
                 I have a background in chemistry and I enjoy solving complex puzzles. 
                 Feel free to look around and Contact me with any questions.
                    
                </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
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
        </section>
    );

}

export default About;