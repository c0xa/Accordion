import {memo, useCallback, useMemo, useState} from "react";
import {SERVICE_DATA} from "./stable-data";
import ServiceCard from "./service-card/service-card.component";
import "./service-section.scss"

const ServiceSection = () => {
    const [activeCard, setActiveCard] = useState<{ ID: number | undefined }>({ID: undefined});

    const [imagePath, setImagePath] = useState("/images/default-image.jpg");

    const editActiveCard = useCallback((cardID: number | undefined, imagePathCard: string) => {
        setActiveCard({ID: cardID});
        setImagePath(imagePathCard);
    }, [setActiveCard]);

    const cardsContent = useMemo(() => {
        return (
            <>
                {SERVICE_DATA &&
                    SERVICE_DATA.map((card, index) => (
                        <ServiceCard key={card.title + index} onCardClick={editActiveCard}
                                     active={activeCard.ID === card.id} {...card} />
                    ))}
            </>
        )
    }, [activeCard, editActiveCard])

    return (
        <section className="service-section__wrapper">
            <h1 className="service-section__title">Услуги</h1>
            <div className="service-content">
                <div className="service-content__image-wrapper" style={{backgroundImage: `url(${imagePath})`}}></div>
                <div className="service-content__accordion">{cardsContent}
                </div>
            </div>
            <button className="service-section__button">Все услуги</button>
        </section>
    )
};

export default memo(ServiceSection);