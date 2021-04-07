import UserModel, { IUserModel } from "../models/UserModel";

export interface IAuthenticationService {
    getUser(username: string): IUserModel
    authenticate(username: string, password: string): IUserModel
}
export class AuthenticationService implements IAuthenticationService {
    getUser(username: string): IUserModel {
        return new UserModel("123", "Vince", "Megia", "", "");
    }

    authenticate(username: string): IUserModel {
        return new UserModel("123", "Vince", "Megia", "", "");
    }
}