import React from 'react';
import Icon from './iconList'



const Project0 = () => {
    return (
        <div className='project rCard mFlex'>
            
            <div className='detailContainer'> 
            <img src={process.env.PUBLIC_URL + '/mixellance.png'} className='screenshot'alt='Screen Shot of Mixellance'></img>  
                <div className='cardHeader'>
                    <h4 className='hTitle'>Mixellence</h4>
                    <h5 className='hTittle2'>Supervised Development
                        Technologies Used: Next.js, React, Firebase, Firebase Functions,
                        Firebase Admin, cors, clsx: class module name management,
                        next-connect: middleware, formidable-serverless: form parsing that wont destroy image files,
                        nodemailer: contact form emailing solution, react-scroll: Navigation,
                        react-markdown: formatting customer facing data,
                          framer-motion: animations
                    </h5>
                </div>

                    <p className="ipad-description">
                    Professional website for a Bartending onsite services business. 
                    This business provides processional bartending to a large range of clientele in the Monterey Bay Area.
                    </p>
                    <h6 className='iconL'>
                        <Icon url='https://github.com/SyntheticNerd/mixellence'
                            linkClassName='github'
                            img='/Icons/GitHub_Logo.png'
                            imgClassName='github-icon gicon icons'
                            />
                        <Icon url='https://mixellencemobilebar.com'
                            linkClassName='browser'
                            img='/Icons/open-in-toon.png'
                            imgClassName='browser-icon icons'
                            />
                    </h6>
                </div>
        </div>
    );
}

export default Project0;
