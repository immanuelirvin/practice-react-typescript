export interface ICardState {

}

export interface ICardProps {
    name: string;
    count: number;
    addCount: (index: number) => void;
    reduceCount: (index: number) => void;
    index : number
}