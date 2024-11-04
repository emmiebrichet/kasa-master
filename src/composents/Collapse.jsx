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
            <div className="collapse-header">
                <h3>{title}</h3>
                <FontAwesomeIcon
    icon={faChevronDown}
    className={`toggle-icon ${isOpen ? 'open' : ''}`}
    onClick={toggleCollapse}
    style={{ width: '32px', height: '32px' }}
/>

            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default Collapse;
