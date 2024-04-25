import {UserInterface} from "../../types/user.interface";

export interface UserContextInterface {
    // adresse mail de l'utilisateur courant
    currentUser?:;
    defineCurrentUser: (user: UserInterface) => void;
}