import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src="/images.jpg" alt="hero" style={{ height: '150px', width: '250px' }} />
                <b><h2>Dr. Qadir Khan - Boss of Atomic</h2></b>
                <p style={{ height: '150px', width: '250px' }}>
                    AQ Khan was a Pakistani nuclear physicist and metallurgical engineer, 
                    colloquially known as the father of Pakistan's atomic weapons program.
                    <br />
                    <b><button>Read more</button></b> 
                </p>
            </nav>

            <nav>
                <img src="/atomic.try.jpg" alt="hero" style={{ height: '150px', width: '250px' }} />
                <b><h2>Underground Nuclear Testing</h2></b>
                <p style={{ height: '100px', width: '250px' }}>
                    Underground nuclear testing is the test detonation of nuclear weapons that is performed underground.
                    <br />
                    <b><button>Read more</button></b>
                </p>
            </nav>

            <nav>
                <img src="/atomic2.jpg" alt="hero" style={{ height: '150px', width: '250px' }} />
                <b><h2>Further Testing</h2></b>
                <p style={{ height: '200px', width: '250px' }}>
                    Additional details on the testing and impact studies.
                    <br />
                    <b><button>Read more</button></b>
                </p>
            </nav>
        </div>
    );
};

export default Navbar;
