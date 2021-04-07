import { IUser } from "../models/User.models"

export interface IPost {
	user: IUser,
	content: string,
	title: string
	subtitle: string
}

export class Post implements IPost {
	private _user: IUser
	private _content: string
	private _title: string
	private _subtitle: string

	constructor(user: IUser, 
		content: string,
		title: string,
		subtitle: string) {
		this._user = user
		this._content = content
		this._title = title
		this._subtitle = subtitle
	}

	public get user(): IUser { return this._user }
	public get content(): string { return this._content }
	public get title(): string { return this._title }
	public get subtitle(): string { return this._subtitle }
}