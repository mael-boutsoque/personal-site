"use client"

import React from "react"
import styled from "styled-components"

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="comic-card" role="article" aria-labelledby="card-username">
          <div className="card-header">
            <div className="card-avatar">
              <img src="/photo/1787237224844.png" alt="Maël Boutsoque" />
            </div>
            <div className="card-user-info">
              <p className="card-username" id="card-username">Maël Boutsoque</p>
              <p className="card-handle">@ENSEM Nancy</p>
            </div>
          </div>
          <div className="card-content">
            <div className="card-image-container">
              <img src="/photo/sc_homepage.png" alt="Project screenshot" />
            </div>
            <p className="card-caption">
              Embedded systems engineering student, currently interning at Quandela
            </p>
          </div>
          <div className="card-actions">
            <a href="https://boutsoque.vercel.app" className="action-button link-button" target="_blank" rel="noopener" aria-label="Visit Portfolio">
              <svg className="action-button-icon" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="button-text">Visit Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }


  .comic-card {
    --paper-white: #fefae8;
    --primary-yellow: #ffd900;
    --accent-red: #d92b2b;
    --accent-blue: #2b80d9;
    --ink-black: #212121;
    --border-stroke: 0.15em;
    --dot-color: rgba(0, 0, 0, 0.2);


    position: relative;
    display: flex;
    flex-direction: column;
    width: 18em;
    max-width: 333px;
    max-height: 444px;
    background-color: var(--paper-white);
    border: var(--border-stroke) solid var(--ink-black);
    border-radius: 0.5em;
    padding: 1em;
    box-shadow: 0.5em 0.5em 0 var(--ink-black);
    transition:
      transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.2s ease;
    transform-origin: bottom left;
  }


  .comic-card:hover {
    transform: translateY(-0.6em) rotate(-2deg);
    box-shadow: 0.8em 0.8em 0 0.1em var(--accent-red);
  }


  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.8em;
  }


  .card-avatar {
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    border: var(--border-stroke) solid var(--ink-black);
    flex-shrink: 0;
    transition: transform 0.3s ease;
    overflow: hidden;
    background: var(--accent-blue);
  }


  .comic-card:hover .card-avatar {
    transform: scale(1.1);
  }


  .card-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }


  .card-user-info {
    margin-left: 0.8em;
    text-transform: uppercase;
  }


  .card-username {
    margin: 0;
    font-size: 1.2em;
    font-weight: 300;
    color: var(--ink-black);
    background-color: var(--primary-yellow);
    padding: 0.1em 0.5em;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
    letter-spacing: 1px;
  }


  .card-handle {
    margin: 0.2em 0 0 0;
    font-size: 0.8em;
    color: var(--ink-black);
    font-weight: 100;
    letter-spacing: 2px;
  }


  .card-content {
    flex-grow: 1;
  }


  .card-image-container {
    width: 100%;
    height: 9em;
    border-radius: 0.2em;
    border: var(--border-stroke) solid var(--ink-black);
    overflow: hidden;
    background-color: var(--accent-blue);
    transition: transform 0.3s ease;
  }


  .comic-card:hover .card-image-container {
    transform: skewX(-3deg) scale(1.02);
  }


  .card-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }


  .card-caption {
    position: relative;
    margin: 0.8em 0;
    padding: 0.6em 0.8em;
    background-color: var(--paper-white);
    border: var(--border-stroke) solid var(--ink-black);
    border-radius: 0.5em;
    font-size: 0.9em;
    line-height: 1.3;
    color: var(--ink-black);
  }


  .card-caption::after {
    content: "";
    position: absolute;
    bottom: -0.6em;
    left: 1.5em;
    width: 0;
    height: 0;
    border: 0.5em solid var(--ink-black);
    border-color: var(--ink-black) transparent transparent transparent;
  }


  .card-caption::before {
    content: "";
    position: absolute;
    bottom: -0.4em;
    left: 1.6em;
    width: 0;
    height: 0;
    border: 0.4em solid var(--paper-white);
    border-color: var(--paper-white) transparent transparent transparent;
  }


  .card-actions {
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top: 0.5em;
  }


  .action-button {
    background-color: var(--primary-yellow);
    border: var(--border-stroke) solid var(--ink-black);
    padding: 0.5em 1.5em;
    cursor: pointer;
    border-radius: 0.5em;
    box-shadow: 0.2em 0.2em 0 var(--ink-black);
    transition:
      transform 0.1s ease,
      box-shadow 0.1s ease,
      background-color 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    min-width: 14em;
    justify-content: center;
  }


  .action-button:hover {
    background-color: var(--accent-red);
  }


  .action-button:active {
    transform: translate(0.2em, 0.2em);
    box-shadow: none;
  }


  .action-button-icon {
    width: 1.3em;
    height: 1.3em;
    stroke-width: 3;
    stroke: var(--ink-black);
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    display: block;
    flex-shrink: 0;
  }


  .action-button:hover .action-button-icon {
    stroke: var(--paper-white);
  }


  .like-button:hover .action-button-icon {
    fill: var(--paper-white);
  }


  .button-text {
    font-size: 0.85em;
    font-weight: 700;
    color: var(--ink-black);
    text-transform: uppercase;
    letter-spacing: 1px;
  }


  .action-button:hover .button-text {
    color: var(--paper-white);
  }`

export default function CreativeCardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <Card />
    </div>
  )
}