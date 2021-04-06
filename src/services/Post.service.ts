import { IPost } from "../postpanel/postpanel-types"

export interface IPostService {
	getByUserId(userId: string): IPost[] 
}

export class PostService implements IPostService {
	private _timestamp: string

	constructor() {
		this._timestamp = new Date().getMilliseconds().toString()
	}

	getByUserId(userId: string): IPost[] {
		console.log("returning id-1")
		return []
	}

	toString() {
		return this._timestamp
	}
}