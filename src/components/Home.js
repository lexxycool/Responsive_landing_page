import React from 'react';
import './Home.css';
import Media from './Media';

function Home() {
    return (
        <div className='home' id='home'>
            
            <div id='mission' className='home__container'>

                <div className='content'>
                  
                   <h2>Our Mission</h2>
                   <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
                    
                </div>

            </div>

            <div className = 'featured__Tea' id='menu'>
                <span>
                    <h2>Featured Tea</h2>
                    <h4>What's Steeping at LexxyCool Tea Stop</h4>
                </span>
                <div className='Tea__container'>
                    <div className='item'>
                        <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/img-berryblitz.jpg" alt='berry_blitz' />
                        <span class='Tea__name'>Fall Berry Blitz Tea</span>
                    </div>

                    <div class="item">
                        <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/img-spiced-rum.jpg" alt='spiced_rum' />
                        <span class='Tea__name'>Spiced Rum Tea</span>
                    </div>

                    <div class="item">
                        <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/img-donut.jpg" alt='donut'/>
                        <span class='Tea__name'>Seasonal Donuts</span>
                    </div>

                    <div class="item">
                        <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/img-myrtle-ave.jpg" alt='myrtle_ave' />
                        <span class='Tea__name'>Myrtle Ave Tea</span>
                    </div>
                    
                    <div class="item">
                        <img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/img-bedford-bizarre.jpg" alt='bedford_bizarre' />
                        <span class='Tea__name'>Bedford Bizzare Tea</span>
                    </div>
                </div>

            </div>

            <div>
                <Media />
            </div>

            <h3 className='Tea__tip'>...there's always a good time for some Tea</h3>

        </div>
    )
}

export default Home
