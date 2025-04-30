import FeatureItem from "./FeatureItem";


// Features Section Component
export const FeaturesSection = () => {
    const features = [
        { title: 'Control Your Diabetes', image: 'placeholder-feature1.jpg' },
        { title: 'Strong, Thick & Shiny Hair', hasDiscount: true, image: 'placeholder-feature2.jpg' },
        { title: 'VegeTab+ Pocket Pack', image: 'placeholder-feature3.jpg' },
        { title: 'VapoRub', subtitle: 'Cough Relief Sale 25% off', image: 'placeholder-feature4.jpg' }
    ];

    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            title={feature.title}
                            hasDiscount={feature.hasDiscount}
                            subtitle={feature.subtitle}
                            image={feature.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};