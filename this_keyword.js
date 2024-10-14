var abcd = /** @class */ (function () {
    function abcd() {
        this.name = "ali";
        this.age = 23;
    }
    abcd.prototype.getDetails = function () {
        this.name = "ahmed";
        console.log(this.name);
        // is we want to access the name of the class we use this keyword anywhere in abcd class 
    };
    return abcd;
}());
