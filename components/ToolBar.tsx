import React from 'react';

interface Props {}

const options = [
    {
        name: 'Carter'
    }
];

const ToolBar: React.FC<Props> = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            height: '100vh',
            background: '#333',
            flexWrap: 'wrap',
            padding: '1em'
        }}>
            {options.map(({ name }, index) => (
                <button key={index}>
                    {name}
                </button>
            ))}
        </div>
    );
};

export default React.memo(ToolBar);