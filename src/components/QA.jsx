import { useState } from 'react';
import { qaData } from '../data/qa';

const QA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="qa" className="qa-section section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">常見問題 QA</h2>
                    <p className="section-subtitle">這裡解答您關於 Git Worktree 的所有疑問</p>
                </div>
                <div className="qa-list">
                    {qaData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`qa-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="qa-question"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <h3>{item.question}</h3>
                                <span className="qa-icon"></span>
                            </button>
                            <div
                                className="qa-answer-container"
                                style={{
                                    maxHeight: activeIndex === index ? '1000px' : '0'
                                }}
                            >
                                <div className="qa-answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QA;
