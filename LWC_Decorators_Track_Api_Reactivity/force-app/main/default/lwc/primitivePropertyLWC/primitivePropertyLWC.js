import { LightningElement, track } from 'lwc';

export default class PrimitivePropertyLWC extends LightningElement {
    //for primitive property it doesn't matter whether you put track or not
    greeting = "Welcome"; //Primitive Property greeting
    @track welcome = "Welcome to the LWC"; //Primitive Property welcome

    handleClick(event){
        this.greeting = "Good Bye";
        this.welcome = "Good Bye to the LWC Learning";
    }
}