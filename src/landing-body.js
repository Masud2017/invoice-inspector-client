import React from 'react';
import PackagePlan from './packagePlan';
import './landing-body.css';

class LandingBody extends React.Component {
    render () {
        return (
            <div className = "mt-sm-4">
                <div className = "row mb-sm-4">
                    <div className = "col-lg-5 text-center">
                        <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F3c%2F3c1995135c26419e6b937f9f0aaf65c3.png&f=1&nofb=1" width = "250px" alt = "nothing to show"></img>
                        <h4 className = "text-secondary mt-sm-4">Invoice-inspector</h4>
                        <p className =  "text-secondary">Create invoice faster than you think. Boostup your business speed in client handling and give them best experience you can.</p>
                        <button type = "button" className  = "btn btn-danger">Get started</button>
                    </div>
                    <div className = "col-sm-7 text-center">
                    <img height = "350px" src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdigitalsynopsis.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fcreative-invoice-bill-design-impress-clients-30.jpg&f=1&nofb=1" alt = "nothing can't be shown" className = "boxShadow-static rounded-circle d-block mx-auto"></img>
                    </div>
                </div>
                <div className = "text-center mt-sm-4">
                    <h4 className = "text-secondary mb-sm-4">Watch this video for learn more!!</h4>
                    <iframe className = "boxShadow-static border-rounded" title = "youtube ad" width="560" height="315" src="https://www.youtube.com/embed/ELx-lN4J6uU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                 <PackagePlan/> 

                <div className = "text-center mt-sm-4">
                    <h3>Information</h3>
                    <p className = "text-secondary">This application is for professional client handaling. Invoice-inspector can be your biggest frined if you need any kind of help as an example like you have to generate an invoice and then you have to send that invoice to your client. But you don't have enough time. Then invoice-inspector can help you in this regard. </p>
                    </div>
            </div>
        );
    }
}
export default LandingBody;