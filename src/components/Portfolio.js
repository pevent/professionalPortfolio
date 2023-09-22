import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const portfolioItems = [
        { id: 1, title: "TMTool", languages: "Python", tech:"Python, Numpy, Scikit-learn, Pandas, SpaCy, Github and Trello", details: "Text mining tool as the final project for my bachelor's degree. This tool utilizes NLP techniques to analyze inserted text, summarize it, analyze emotions, verify grammar and spelling errors, and automatically generate topics from it." },
        { id: 2, title: "Steam Playtest Search", languages: "Python", tech:"Python, BeautifulSoup, Concurrent, Pandas and Github", details: "In my free time, I started a web scraping script in Python that checks the pages of every game on Steam. If a game has playtesting access, it stores the game's name in a CSV file. This script can access multiple pages at once." },
        { id: 3, title: "Retail Chain ETL Process", languages: "SQL", tech:"SQL with Oracle SQL Developer", details: "An ETL Process of a retail chain, which was developed in academic context and consisted of extracting data from external tables and Web, transform the data through the use of screens and load the dimension tables and the table of facts with the line of sales." },
        { id: 4, title: "Clinics Manager", languages: "JavaEE and Vue.js", tech:"JavaEE, Nodejs, Docker, Github and Vue.js", details: "In this clinics manager, patients can schedule sessions and see their prescriptions, professionals manage patients and administrators handle users. This projects was developed using JavaEE for backend, Vue.js for frontend, Docker as a container for the backend and Git to manage versions" },
        { id: 5, title: "Steam Playtest Search", languages: "Description 5", tech:"", details: "Detailed information about project 5" },
        { id: 6, title: "Steam Playtest Search", languages: "Description 6", tech:"", details: "Detailed information about project 6" },
    ];

    const handleCardClick = (index) => {
        setSelectedCard(portfolioItems[index]);
    };

    const handleCloseDetail = () => {
        setSelectedCard(null);
    };

    return (
        <div className='portfolio'>
            <div className='portfolio-item'>
                <h1>Projects</h1>
                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <div className="portfolio-card" key={index} onClick={() => handleCardClick(index)}>
                            <h2>{item.title}</h2>
                            <p><b>Languages used: </b>{item.languages}</p>
                        </div>
                    ))}
                </div>
            </div>
            {selectedCard && (
                <>
                    <div className="background-overlay" onClick={handleCloseDetail}></div>
                    <div className={`portfolio-detail ${selectedCard ? 'active' : ''}`}>
                        <div className="portfolio-detail-content">
                            <h2>{selectedCard.title}</h2>
                            <p>{selectedCard.details}</p>
                            <p><b>Skills used: </b>{selectedCard.tech}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Portfolio;