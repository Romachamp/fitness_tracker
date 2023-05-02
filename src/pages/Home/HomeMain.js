import React from 'react';

function HomeMain(props) {
    const object = JSON.parse(localStorage.getItem('sportUserData'));

    const content = [
        {
            data: object.weight,
            description: 'Weight',
            id: 0
        },
        {
            data: object.age,
            description: 'Age',
            id: 1
        },
        {
            data: object.sport,
            description: 'Sport',
            id: 2
        },
    ]

    return (
        <div className="home-content">
            {content.map(item =>
                <div className="home-content_item" key={item.id}>
                    <h1 className="home-content_data">{item.data}</h1>
                    <h3 className="home-content_description">{item.description}</h3>
                </div>
            )}
        </div>
    );
}

export default HomeMain;