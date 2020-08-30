/// <reference types="node" />
declare let i: number;
declare const id: NodeJS.Timeout;
interface IUser {
    readonly id: number;
    readonly name: string;
    readonly age?: number;
}
declare function builderUser(userId: number, userName: string): IUser;
declare let newUser: IUser;
