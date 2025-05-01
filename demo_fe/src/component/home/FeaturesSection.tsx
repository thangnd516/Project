import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./index.scss";

export const FeaturesSection = () => {
    return (
        <>
            <div className="feature-section-wrap">
                <div className="feature-section-container-one">
                    <img
                        src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/CMS-banner-01.jpg"
                        alt="Control Your Diabetes"
                        className=" feature-section-container-image1 w-full h-48 object-cover"
                    />
                    <div className="feature-section-title-one">
                        <p className="text-sm mb-1">Up to 25% OFF</p>
                        <h3 className="text-lg font-bold leading-tight">Control Your Diabetes</h3>
                    </div>
                    <div className="feature-section-view-one">
                        <a href="#" className="bg-[#33a58e] text-white px-4 py-2 text-sm hover:bg-[#2b57a2] rounded-2xl mb-2">
                            Buy now &gt;
                        </a>
                    </div>
                </div>


                <div className="feature-section-container-two">
                    <img
                        src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/CMS-banner-02.jpg"
                        alt="Strong, Thick & Shiny Hair"
                        className="w-full h-48 object-cover"
                    />
                    <div className="feature-section-title-two">
                        <span>FLAT 20% OFF</span>
                    </div>
                    <div className="feature-section-subtitle-two">
                        <h3 className="text-lg font-bold leading-tight">Strong, Thick & Shiny Hair</h3>
                    </div>
                
                </div>



                <div className="feature-section-container-three">
                    <img
                        src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/CMS-banner-03.jpg"
                        alt="VapoRub Pocket Pack"
                        className="w-full h-48 object-cover"
                    />
                    <div className="feature-section-title-three">
                        <p className="text-sm mb-1">Only this week</p>
                        <h3 className="text-lg font-bold leading-tight">VapoRub Pocket Pack</h3>
                    </div>
                    <div className="feature-section-view-three">
                        <a href="#" className="bg-[#33a58e] text-white px-4 py-2 text-sm hover:bg-[#2b57a2] rounded-2xl mb-2">
                            View More &gt;
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
};
