import { IDate } from './common';

export interface ITag extends IDate {
    id: number;
    name: string;
}

export interface ITagRq {
    name: string;
}