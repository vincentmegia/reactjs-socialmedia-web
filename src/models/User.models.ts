export interface IUser {
	id: number
	lastname: string
	firstname: string
	username?: string
	password?: string
}

export class User implements IUser {
	private _id: number
	private _firstname: string
	private _lastname: string
	private _username: string
	private _password: string

	constructor(id: number,
		firstname: string,
		lastname: string,
		username: string,
		password: string) {
		this._id = id
		this._username = username
		this._password = password
		this._firstname = firstname
		this._lastname = lastname
	}

	public get username() { return this._username }
	public get password() { return this._password }
	public get id() { return this._id }
	public get lastname() { return this._lastname }
	public get firstname() { return this._firstname }
}

export default User;