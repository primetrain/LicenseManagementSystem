import { Resource } from 'angular4-hal';
import { Language } from '../_services/Language';

export class Module extends Resource{
    module: String
    id: Number
    languages: Language[]
}