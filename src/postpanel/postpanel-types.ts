import { IUser } from '../user/user';
import { IServiceContext } from '../services/service-context';

export interface IPost {
    title: string
    description: string
}

export interface IPostPanelProps {
    user: IUser
    serviceContext: IServiceContext
}