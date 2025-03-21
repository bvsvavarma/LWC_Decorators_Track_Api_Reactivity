import { LightningElement, track } from 'lwc';

export default class PrivateNestedObjectProperty extends LightningElement {
    @track myDetails = {
        firstName: "Satya",
        lastName : "Buddharaju"
    }

    @track myTask = ["Office", "Meeting", "BootCamp"];

    mySonDetails = {
        firstName: "Akshith",
        lastName : "Buddharaju"
    }
    clickHandler(event){
        //Object Nested Property are not re-active by nature, so you need to use track decorator to see the changes
        this.myDetails.firstName = "Varma"; 
    }

    addTaskHandler(event){
        this.myTask.push( "Self Study");
    }

    refreshHandler(event){
        this.mySonDetails = {firstName: "Akki",
                            lastName : "Buddharaju"};
    }
}