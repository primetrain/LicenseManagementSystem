import { Resource } from 'angular4-hal';
import { Subscription } from 'rxjs';

export class User extends Resource{
    id: Number
    name: String
    username: String
    password: String
    created_by: User
    subscriptions: Subscription[]
}