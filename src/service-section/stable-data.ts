export type ServiceCardType = {
    id: number;
    title: string;
    image: string;
    description: string;
}

export type ServiceCardsType = ServiceCardType[];

export const SERVICE_DATA: ServiceCardsType = [
    {
        id: 0,
        title: "Первая секция",
        image: "https://picsum.photos/870/560/?random=1",
        description: "Ее сиянье факелы затмило. Она, подобно яркому бериллу В ушах арапки, чересчур светла Для мира безобразия и зла."
    },
    {
        id: 1,
        title: "Вторая секция",
        image: "https://picsum.photos/870/561/?random=1",
        description: "Как голубя среди вороньей стаи, Ее вполне я сразу отличаю. Я к ней пробьюсь и посмотрю в упор. Любил ли я хоть раз до этих пор?"
    },
    {
        id: 2,
        title: "Третья секция",
        image: "https://picsum.photos/870/562/?random=1",
        description: "О нет, то были ложные богини. Я истинной красы не знал доныне."
    },
]