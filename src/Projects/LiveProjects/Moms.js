import React from 'react';
import Icon from './iconList'


const Huddle = () => {
    return (
        <div className='project mFlex'>
         
            <div className='detailContainer '>
            <img src={process.env.PUBLIC_URL + '/moms-site.png'} className='screenshot ' 
                alt='Screen Shot of my moms craft site'></img>
                <div className='cardHeader '>
                    <h4 className='hTitle'>Gaby's Crafty Things</h4>
                    <h5 className="hTittle2 ">Built with React. This site was built for a client and has live traffic </h5>
                </div>
            

                <p className="ipad-description" id='mSummery'> 
                    Gaby sells her Christmas decorations every year to help pay for that year's presents.
                    Covid has put a stop to the arts and crafts fair but not Gaby. She wanted a simple site 
                    that would act as a catalog and provide a direct means of communication. Using flexbox 
                    and a few media queries, I made it is fully responsive for mobile and a section that allows 
                    customers to send an email directly to gaby without leaving the home screen.
                </p>
                <h6 className='iconL'>

                    <Icon url='https://github.com/Shandem/Moms-static-site'
                        linkClassName='github'
                        img='/Icons/GitHub_Logo.png'
                        imgClassName='github-icon gicon icons'
                    
                    />
                    <Icon url='http://gabyscraftythings.org'
                        linkClassName='browser'
                        img='/Icons/open-in-toon.png'
                        imgClassName='browser-icon icons'
                    
                    />    
                </h6>

            </div>
        </div>
    );
}

export default Huddle;
