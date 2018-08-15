import React, { Component } from 'react';
import '../App.css';

export const StyleGuide = () => {
    return (
        <div>
            <h1>Hi, my name is Ekaterina Povarenko. I am a student and a web developer living in Helsinki. In my work I combine React with Firebase to develop insightful prototypes in short terms. Here you will find three my favorite projects and get familiar with my works.</h1>

            <h2>React Todo App</h2>

            <p className="label-text">Tools: React JS, Firebase, git, sketch</p>

            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

            <button className="btn-active text-white"><span className="active-text">View on Github</span></button>
        </div>
    )
}