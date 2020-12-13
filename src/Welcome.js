import React from 'react';

function Welcome() {
    return (
        <div style={{ width: '100vw', height: '90vh' }}>
            <h1 className={'text-center pt-2'}>Welcome</h1>
            <h6 className={'p-3'}>
                As you know, our consumption behaviour and way of production has a destructive impact on our planet.
                Your and future lives are depending on finding new creative ways to survive with the natural, limited
                resources we are given on planet earth. My topic “Reduce, Reuse, Recycle” deals with the following
                questions: How much waste is generated worldwide? How much trash is recycled worldwide? Is there a
                correlation between a country’s income/population and waste generation/recycling rate? Humankind will
                only survive if we all consume in a sustainable way. You can click your way through the different
                visualisations by using the arrow buttons on the edges of your screen.
            </h6>
            <h6 className={'text-center pt-2'}>Thank you and enjoy!</h6>
        </div>
    );
}

export default Welcome;
