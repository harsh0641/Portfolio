import React from 'react';
import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="Pattern" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div className="mywork-item" key={index}>
                        {/* Make the whole item clickable */}
                        <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-link">
                            <div className="mywork-img-wrapper">
                                {/* Wrap the image in a link */}
                                <img src={work.w_img} alt={`Work ${index + 1}`} className="mywork-img" />
                                <div className="mywork-overlay">
                                    <p className="mywork-title-text">{work.w_name}</p>
                                    <p className="mywork-description-text">{work.w_para}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="mywork_showmore">
                <a
                    href="https://github.com/harsh0641?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mywork-showmore-link"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}
                >
                    <p>Show more</p>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </a>
            </div>

        </div>
    );
};

export default Mywork;
