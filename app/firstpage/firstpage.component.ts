import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "ui/text-field";
import { setTimeout } from "timer";
import { last } from "@angular/router/src/utils/collection";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "firstpage",
    templateUrl: "firstpage.component.html",
})

export class FirstpageComponent {
    data = {
        firstAmphur: "หนองจอก",
        secondAmphur: "พระนคร"
    };
    constructor(
        // private http: Http,
        private route: ActivatedRoute,
        private router: Router
    ) { }
    firstTfLoaded(args) {
        let firstTextfield = <TextField>args.object;
        setTimeout(() => {
            firstTextfield.focus(); // Shows the soft input method, ususally a soft keyboard.
        }, 100);
    }
    
    onReturnPress(args) {
        // returnPress event will be triggered when user submits a value
        let textField = <TextField>args.object;
    
        // Gets or sets the placeholder text.
        console.log(textField.hint);
        // Gets or sets the input text.
        console.log(textField.text);
        // Gets or sets the secure option (e.g. for passwords).
        console.log(textField.secure);
    
        // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
        console.log(textField.keyboardType);
        // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
        console.log(textField.returnKeyType);
        // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
        console.log(textField.autocapitalizationType);
    
        // Gets or sets a value indicating when the text property will be updated.
        console.log(textField.updateTextTrigger);
        // Gets or sets whether the instance is editable.
        console.log(textField.editable);
        // Enables or disables autocorrection.
        console.log(textField.autocorrect);
        // Limits input to a certain number of characters.
        console.log(textField.maxLength);
    
        setTimeout(() => {
            textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
        }, 100);
    }
    
    onFocus(args) {
        // focus event will be triggered when the users enters the TextField
        let textField = <TextField>args.object;
    }
    
    onBlur(args) {
        // blur event will be triggered when the user leaves the TextField
        let textField = <TextField>args.object;
    }
    sendData () {
        console.log(this.data.firstAmphur);
        console.log(this.data.secondAmphur);
        this.router.navigate(["/distance", JSON.stringify(this.data)]);
    }
}
