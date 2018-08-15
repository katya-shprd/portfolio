import React from 'react';
import '../App.css';

export const Section = (props) => {
    return (
        <div className="section-container">
            <div className="text-container">
                <h2>{props.title}</h2>
                <p className="label-text">{props.subtitle}</p>
                { props.children }
                <a href={props.link} target="_blank">
                    <button className="btn-active text-white">
                        <span className="active-text">View on Github</span>
                    </button>
                </a>
                { props.secondLink
                    ? <a href={props.secondLink} target="_blank">
                        <button className="btn-active text-white">
                            <span className="active-text">View online</span>
                        </button>
                      </a>
                    : null }
            </div>
            <img src={require('../assets/' + props.imageSource)} alt=""/>
            <div className="text-container">
                <div className="divider"/>                
            </div>          
        </div>
    )
}