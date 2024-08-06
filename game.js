#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fueldecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelincrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fueldecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    return Opponent;
}());
var player = await inquirer_1.default.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name: "
    }
]);
var opponent = await inquirer_1.default.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent: ",
        choices: ["Alien", "Zombie", "Skeleton"]
    }
]);
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.select);
do {
    //Sekeleton
    if (opponent.select == "Sekeleton") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
            }
            if (p1.fuel <= 0) {
                console.log("You died!!! Better luck next time...");
                process.exit();
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
            }
            if (o1.fuel <= 0) {
                console.log("Congragulations!! You Won!!!...");
                process.exit();
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelincrease();
            console.log("Your health is now ".concat(p1.fuel));
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose! Better luck next time...");
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
            }
            if (p1.fuel <= 0) {
                console.log("You died!!! Better luck next time...");
                process.exit();
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
            }
            if (o1.fuel <= 0) {
                console.log("Congragulations!! You Won!!!...");
                process.exit();
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelincrease();
            console.log("Your health is now ".concat(p1.fuel));
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose! Better luck next time...");
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do? ",
                choices: ["Attack", "Drink Portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
            }
            if (p1.fuel <= 0) {
                console.log("You died!!! Better luck next time...");
                process.exit();
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
            }
            if (o1.fuel <= 0) {
                console.log("Congragulations!! You Won!!!...");
                process.exit();
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelincrease();
            console.log("Your health is now ".concat(p1.fuel));
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose! Better luck next time...");
            process.exit();
        }
    }
} while (true);
