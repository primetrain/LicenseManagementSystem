import { Resource } from 'angular4-hal';
import { Module } from './Module';

export class Product extends Resource{
    name: String
    description: String
    id: Number
    modules: Module[]
}