import { IUser } from '../models/User.models';

export interface IPost {
    title: string;
    description: string;
}

export interface IPostPanelProps {
    controlid: number;
    user: IUser;
}