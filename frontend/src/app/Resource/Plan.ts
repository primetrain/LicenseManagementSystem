import { Resource } from 'angular4-hal';
import { Product } from './Product';
import { Subscription } from './Subscription';

export class Plan extends Resource{
    id: Number
    description: String
    products: Product[]
    subscriptions: Subscription[]
}