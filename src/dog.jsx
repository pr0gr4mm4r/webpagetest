import React, { useState, useEffect } from 'react';

function Dog() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const urls = [];
                for (let i = 0; i < 6; i++) {
                    const response = await fetch('https://dog.ceo/api/breeds/image/random');
                    const data = await response.json();
                    const apiMessage = data.message;
                    const correctedUrl = apiMessage.replace(/\\/g, '/');
                    urls.push(correctedUrl);
                }
                setImageUrls(urls);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Dog Images</h2>
            <div style={styles.grid}>
                {imageUrls.length > 0 ? (
                    imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Random Dog ${index + 1}`} style={styles.image} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '60%',
        height: 'auto',
        flex: '1 1 calc(33.333% - 16px)',
        boxSizing: 'border-box',
    },
};

export default Dog;

