import React, { Component } from 'react';
import { Section } from './Section';

export const HomePage = () => {
    return (
        <div>
            <nav className="nav-menu">
                <a href="https://github.com/katya-shprd" target="_blank" className="link text-white">
                    <img
                        className="icon"
                        src={require('../assets/github-logo.svg')}/>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/ekaterina-povarenko/" target="_blank" className="link text-white">
                    <img
                        className="icon"
                        src={require('../assets/linkedin-logo.svg')}/>
                    LinkedIn</a>                
            </nav>
            <div className="hero-section">
                <h1 className="text-white">
                    Hi, my name is Ekaterina Povarenko. I am a student and a web developer living in Helsinki. In my work I combine React with Firebase to develop insightful prototypes in short terms. Here you will find three my favorite projects and get familiar with my works.
                </h1>
            </div>
            <Section
                imageSource="screen-nlp.png"
                link="https://github.com/katya-shprd/bit16"
                secondLink="https://tietojenkasittely.lapinamk.fi/bit16/teamone/"
                title="Northern Lights Route"
                subtitle="Tools: HTML/CSS, JS, PHP, MySQL, git, sketch">
                <p>
                    The project was provided by my university. The task was to create a web application where people visiting the Northern Lights Route can find information about companies offering activities, interesting things to do, places to visit and share their stories in the area.
                </p>
                <p>
                    Technical implementation was expected to include a way of interaction with media, sharing geolocation and viewing most popular places across the route. I was responsible for front-end part and I have created all the design of the web application and have build all the pages.
                </p>
                <p>
                    As a result of my work, the service was developed using vanilla PHP and HTML/CSS for the front-end.
                </p>
            </Section>
            <Section
                imageSource="screen-todo.png"
                link="https://github.com/katya-shprd/to-do"
                title="React Todo App"
                subtitle="Tools: React JS, Firebase, git, sketch">
                <p>
                    This was my personal project, which I decided to do in my free time since todo apps are considered to be a standard project for getting to know the technology. In my case I was willing to dive into the world of component-based framework React JS, which is extremely popular today.
                </p>
                <p>
                    This Todo list allows to add a task, choose a date by using a calendar picker from React and choose an importance level of the task. Additionally, it is possible to edit the task anytime by changing  the importance level and mark it as finished.
                </p>
                <p>
                    As a result, I have learnt about state management, component inheritance, ES6 syntax and Firebase Realtime Database.
                </p>
            </Section>
            <Section
                imageSource="screen-chipi.png"
                link="https://github.com/katya-shprd/chipik-webpage"
                title="My Dog's Webpage"
                subtitle="Tools: HTML/CSS, JS, sketch">
                <p>
                    This was my second personal project. Every dog deserves a webpage, so I have created one for my dog. And it's lovely, just like Chipik (that's his name).
                </p>
                <p>
                    The webpage contains some funny information about my dog, photo gallery and contact form if anyone would like to contact Chip and tell him how pretty he is.
                </p>
                <p>
                    From the technical perspective I was willing to get up-to-date with CSS styling techniques, such as Flexbox, Grid and working with webfonts.
                </p>
            </Section>
        </div>
    )
}