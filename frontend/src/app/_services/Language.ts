import { Resource } from 'angular4-hal';
import { Module } from '../Resource/Module';

export class Language extends Resource {
    id: Number
    language: String
    modules: Module[]
}