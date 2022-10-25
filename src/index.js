"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_score, _Marathon_time, _Calvinball_winner, _Calvinball_score;
class Football {
    constructor(winner, score) {
        _Football_score.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_score, score, "f");
    }
    get date() { return this.date; }
    set date(date) { this.date = date; }
    result() { return "Football match: " + __classPrivateFieldGet(this, _Football_score, "f"); }
    kiir() { console.log(this.result()); }
}
_Football_score = new WeakMap();
class Marathon {
    constructor(winner, time) {
        _Marathon_time.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Marathon_time, time, "f");
    }
    get date() { return this.date; }
    set date(date) { this.date = date; }
    result() { return "Marathon: " + __classPrivateFieldGet(this, _Marathon_time, "f") + "secs"; }
    kiir() { console.log(this.result()); }
}
_Marathon_time = new WeakMap();
class Calvinball {
    constructor(winner) {
        _Calvinball_winner.set(this, void 0);
        _Calvinball_score.set(this, void 0);
        __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        __classPrivateFieldSet(this, _Calvinball_score, Math.floor(Math.random() * (100 - 10)) + 10, "f");
    }
    get winner() { return __classPrivateFieldGet(this, _Calvinball_winner, "f"); }
    set winner(winner) {
        if (winner == "Calvin" || winner == "Hobbes") {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
        else {
            console.log("Error");
        }
    }
    get date() { return this.date; }
    set date(date) { this.date = date; }
    result() { return "Calvinball: " + __classPrivateFieldGet(this, _Calvinball_score, "f") + "points"; }
    kiir() { console.log(this.result()); }
}
_Calvinball_winner = new WeakMap(), _Calvinball_score = new WeakMap();
let add = [new Football("Lajos", "3 - 2"), new Football("Kazakh", "1 - 2"),
    new Marathon("Gazsi a vasas", 123), new Marathon("Gazsi a vasas", 113),
    new Calvinball("Calvin"), new Calvinball("Hobbes")];
for (let ad of add) {
    ad.kiir();
}
