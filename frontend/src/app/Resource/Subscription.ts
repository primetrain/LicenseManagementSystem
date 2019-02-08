import { Resource } from 'angular4-hal';
import { Plan } from './Plan';
import { User } from './User';
import { Region } from './Region';

export class Subscription extends Resource{
    start: Date
    end: Date
    id: Number
    user: User
    plan: Plan
    region: Region
}