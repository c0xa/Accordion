import { memo, useCallback, useMemo, useState } from 'react';
import { DEFAULT_IMAGE, SERVICE_DATA } from '../stable-data';
import ServiceCard from './service-card.component';
import './service-card.scss';

const ServiceCardContainer = () => {
    const [activeCard, setActiveCard] = useState<{
        ID: number | undefined;
    }>({
        ID: undefined
    });

    const [imagePath, setImagePath] = useState(DEFAULT_IMAGE);

    const editActiveCard = useCallback(
        (cardID: number | undefined, imagePathCard: string) => {
            setActiveCard({ ID: cardID });
            setImagePath(imagePathCard);
        },
        [setActiveCard]
    );

    const cardsContent = useMemo(() => {
        return (
            <>
                {SERVICE_DATA &&
                    SERVICE_DATA.map((card, index) => (
                        <ServiceCard
                            key={card.title + index}
                            onCardClick={editActiveCard}
                            active={activeCard.ID === card.id}
                            {...card}
                        />
                    ))}
            </>
        );
    }, [activeCard, editActiveCard]);

    return (
        <>
            <picture className="service-content__picture-wrapper">
                <img
                    className="service-content__image"
                    alt=""
                    src={imagePath}
                />
            </picture>
            <div className="service-content__accordion">{cardsContent}</div>
        </>
    );
};

export default memo(ServiceCardContainer);
