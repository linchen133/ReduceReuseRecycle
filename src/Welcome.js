import React from 'react';

function Welcome() {
    return (
        // <div style={{ width: '100vw', height: '90vh' }}>
        //     <h1 className={'text-center pt-2'}>Welcome</h1>
        //     <h6 className={'p-3'}>
        //         As you know, our consumption behaviour and way of production has a destructive impact on our planet.
        //         Your and future lives are depending on finding new creative ways to survive with the natural, limited
        //         resources we are given on planet earth. My topic “Reduce, Reuse, Recycle” deals with the following
        //         questions: How much waste is generated worldwide? How much trash is recycled worldwide? Is there a
        //         correlation between a country’s income/population and waste generation/recycling rate? Humankind will
        //         only survive if we all consume in a sustainable way. You can click your way through the different
        //         visualisations by using the arrow buttons on the edges of your screen.
        //     </h6>
        //     <h6 className={'text-center pt-2'}>Thank you and enjoy!</h6>
        // </div>
        <div className="d-flex" style={{ minHeight: '100vh' }}>
            <div className="jumbotron my-auto pl-5 pr-5" style={{ backgroundColor: 'transparent' }}>
                <h1 className="display-4">Welcome!</h1>
                <div className="mt-5" />
                <p className="lead">
                    As you know, our consumption behaviour and way of production has a destructive impact on our planet.
                    Your and future lives are depending on finding new creative ways to survive with the natural,
                    limited resources we are given on planet earth. My topic <strong>“Reduce, Reuse, Recycle”</strong>{' '}
                    deals with the following questions: How much waste is generated worldwide? How much trash is
                    recycled worldwide? Is there a correlation between a country’s income/population and waste
                    generation/recycling rate? Humankind will only survive if we all consume in a sustainable way.
                </p>
                <hr className="my-4" />
                <p className="lead">
                    You can click your way through the different visualisations by using the arrow buttons on the edges
                    of your screen.
                </p>
                <div className="mt-5" />
                <h1 className="display-8 text-right">Thank you and enjoy!</h1>
            </div>
        </div>
    );
}

export default Welcome;
