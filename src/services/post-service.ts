import { IPost } from './../postpanel/postpanel-types';

export interface IPostService {
    getByUserId(userId: string): IPost[] 
}

export class PostService implements IPostService {
    getByUserId(userId: string): IPost[] {
        console.log('returning id-1');
        return [];
    }
}