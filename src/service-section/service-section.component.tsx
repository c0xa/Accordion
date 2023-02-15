import { memo } from 'react';
import './service-section.scss';
import ServiceCardContainer from './service-card/service-card.container';

const ServiceSection = () => {
    return (
        <section className="service__wrapper">
            <h1 className="service__title">Услуги</h1>
            <div className="service-content">
                <ServiceCardContainer />
            </div>
            <button className="service__button">Все услуги</button>
        </section>
    );
};

export default memo(ServiceSection);
