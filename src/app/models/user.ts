import { Note } from './note';
import { Contact } from './contact';

export class User {
    _id: number;
    email: string;
    name: string;
    password: string;
    birthDate: Date;
    avatar: string;
    bio: string;
    contacts: Contact[];
    notes: Note[];

    constructor() {
        this.notes = [];
        this.contacts = [];
        this.notes = [];
    }
}
