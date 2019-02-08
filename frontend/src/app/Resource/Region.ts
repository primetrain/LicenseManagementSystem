import { Resource } from 'angular4-hal';
import { Subscription } from './Subscription';

export class Region extends Resource{
    id: Number
    country: String
    subscriptions: Subscription[]
}