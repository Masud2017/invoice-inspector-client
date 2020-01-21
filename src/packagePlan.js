import React from 'react';

const PackagePlan = () => {
    return (
        <div>
               <h2 className = "dotted-border mt-4 mb-md-4">Choose one of the packages</h2>
                <div className = "card-deck mt-sm-4">
                    <div className = "card text-center boxShadow">
                        <div className = "card-header text-center"><h3 className = "nav-title text-center">Student</h3></div>
                        <div className = "card-body">
                            <p className =  "card-title">4 free invoice</p>
                            <p className =  "card-title">3 free invoice template</p>
                            <p className =  "card-title">free email (10 times per day)</p>
                            <p className =  "card-title">$0 free</p>
                        </div>
                        <div className = "card-footer">
                        <button type = "button" className = "btn btn-danger">Purchase</button>
                        </div>
                    </div>

                    <div className = "card text-center boxShadow">
                        <div className = "card-header text-center"><h3 className = "nav-title text-center">Startup</h3></div>
                        <div className = "card-body">
                            <p className =  "card-title">7 free invoice</p>
                            <p className =  "card-title">15 free invoice template</p>
                            <p className =  "card-title">free email (1500 times per day)</p>
                            <p className =  "card-title">$10</p>
                        </div>
                        <div className = "card-footer">
                        <button type = "button" className = "btn btn-danger">Purchase</button>
                        </div>
                    </div>

                    <div className = "card text-center boxShadow">
                        <div className = "card-header text-center"><h3 className = "nav-title text-center">Enterprize</h3></div>
                        <div className = "card-body">
                            <p className =  "card-title">12 free invoice</p>
                            <p className =  "card-title">20 free invoice template</p>
                            <p className =  "card-title">free email (unlimited)</p>
                            <p className =  "card-title">$25 free</p>
                        </div>
                        <div className = "card-footer">
                            <button type = "button" onClick = "#" className = "btn btn-danger">Purchase</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default PackagePlan;