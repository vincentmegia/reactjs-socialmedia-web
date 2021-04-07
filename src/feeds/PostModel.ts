import { IUserModel } from "../models/UserModel"

export interface IPostModel {
	user: IUserModel,
	content: string,
	title: string
	subtitle: string
	id: string
}

export class PostModel implements IPostModel {
	private _user: IUserModel
	private _content: string
	private _title: string
	private _subtitle: string
	private _id: string

	constructor(user: IUserModel, 
		content: string,
		title: string,
		subtitle: string,
		id: string) {
		this._user = user
		this._content = content
		this._title = title
		this._subtitle = subtitle
		this._id = id
	}

	public get user(): IUserModel { return this._user }
	public get content(): string { return this._content }
	public get title(): string { return this._title }
	public get subtitle(): string { return this._subtitle }
	public get id(): string { return this._id }
}