"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validators = void 0;
class Validators {
    static get phone() { return /^(\+57)?[0-9]{10}$/; }
    static get firstNameAndLastnamePattern() { return /^([a-zA-Z]+) ([a-zA-Z]+)/; }
    static get emailPattern() { return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; }
    static get tenCharactersPattern() { return /^.{10}$/; }
    static get onlyNumbersPattern() { return /^[0-9]*$/; }
    static get onlyLettersPattern() { return /^[a-zA-ZÀ-ÿ\s\.\,]+$/; }
    static get martialStatusPattern() { return /^[a-zA-ZÀ-ÿ\s\()\/]+$/; }
    static get addressPattern() { return /^[a-zA-Z0-9À-ÿ\s\,\.\-\#]+$/; }
    static get placeOfBirthPattern() { return /^[a-zA-ZÀ-ÿ]+([ ]{1}[a-zA-ZÀ-ÿ]+)*[,][ ]{1}[a-zA-ZÀ-ÿ\s]+$/; }
    // pattern fecha: yyyy-mm-dd
    static get datePattern() { return /^\d{4}-\d{1,2}-\d{1,2}$/; }
}
exports.Validators = Validators;
