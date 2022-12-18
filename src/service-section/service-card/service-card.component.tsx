import {memo, useCallback, useMemo} from "react";
import {ServiceCardType} from "../stable-data";
import "./service-card.scss"

export type ServiceCardProps = ServiceCardType & {
    active: boolean,
    onCardClick: (cardID: number | undefined, imagePath: string) => void,
}

const ServiceCard = ({id, image, title, description, active, onCardClick}: ServiceCardProps) => {

    const expandContent = useCallback(() => {
        if (active) {
            onCardClick(undefined, "/images/default-image.jpg");
        } else {
            onCardClick(id, image);
        }
    }, [onCardClick, active, id, image]);

    const classNameWrapper = useMemo(() => {
        return active ? "card-wrapper _active" : "card-wrapper";
    }, [active])

    return (
        <div className={classNameWrapper}>
            <div className="card-header" onClick={expandContent}>
                <h1 className="card-header__title">{title}</h1>
                <svg className="card-header__icon" width="40" height="40" viewBox="0 0 40 40" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 13.8737L8 25.8737L8.12632 26C8.12632 26 14.7263 19.4316 20 19.4316C25.2737 19.4316 31.8737 26 31.8737 26L32 25.8737L20 13.8737Z"
                        fill="black"/>
                </svg>
            </div>
            <div className="card-content">
                <div className="card-content__image" style={{backgroundImage: `url(${image})`}}/>
                <span className="card-content__description">{description}</span>
                <button className="card-content__button">
                    <span>Подробнее</span>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M26.8358 13.7898H-7V14.2098H26.8358V13.7898Z" fill="#1F1F1F"/>
                            <path
                                d="M28.0187 13.9995L19.6187 5.59949L19.5303 5.68791C19.5303 5.68791 24.1282 10.3079 24.1282 13.9995C24.1282 17.6911 19.5303 22.3111 19.5303 22.3111L19.6187 22.3995L28.0187 13.9995Z"
                                fill="#1F1F1F"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_60_2032">
                                <rect width="28" height="28" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default memo(ServiceCard);
