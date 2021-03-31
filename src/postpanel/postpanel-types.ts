import { IUser } from './../models/user';
import { IServiceContext } from '../services/service-context';

export interface IPost {
    title: string;
    description: string;
}

export interface IPostPanelProps {
    controlid: number;
    user: IUser;
}