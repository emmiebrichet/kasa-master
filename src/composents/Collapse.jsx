import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`toggle-icon ${isOpen ? 'open' : ''}`}
                />
            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default Collapse;
