export interface Products {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface Caja extends Products {
    modelo: string;
    image: string;
}
