import { IUser, User } from "./../models/user";

export interface IAuthenticationService {
    getUser(username: string): IUser
    authenticate(username: string, password: string): IUser
}
export class AuthenticationService implements IAuthenticationService {
    getUser(username: string): IUser {
        return new User(123, "Vince", "Megia", "", "");
    }

    authenticate(username: string): IUser {
        return new User(123, "Vince", "Megia", "", "");
    }
}