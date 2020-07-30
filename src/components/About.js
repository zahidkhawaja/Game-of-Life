import React from "react"

const About = () => {
    return (
        <div className = "aboutcontainer">
            <div className = "aboutgame">
            <h2>About Conway's Game of Life</h2>
            <p>The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.</p>
            </div>
            <div className = "rules">
            <h2>Game Rules</h2>
            <ol>
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            </ol>
            <p>These rules, which compare the behavior of the automaton to real life, can be condensed into the following: </p>
            <ol>
                <li>Any live cell with two or three live neighbours survives.</li>
                <li>Any dead cell with three live neighbours becomes a live cell.</li>
                <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
            </ol>
            </div>
        </div>
    )
}

export default About;