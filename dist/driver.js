#!/usr/bin/env node
'use strict';

var prompts = require('prompts');
var chalk = require('chalk');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class PluginDriver {
    constructor(options) {
        this.options = {};
        if (!options) {
            console.log(chalk.red("please input options"));
            return;
        }
        this.options = options;
        this.inputCommand(this.options.prompts);
    }
    inputCommand(inputPrompts) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield prompts(inputPrompts);
            console.log(res);
            // this.options = {};
        });
    }
    parseCommand(command) { }
    excutedCommand() { }
    read() { }
    write() { }
    render() { }
    watch() { }
    lifeCycle() { }
}

function pluginA() {
    return {
        name: "",
        key: "",
        before: () => { },
        enter: () => { },
        exit: () => { },
    };
}
const options = {
    prompts: {
        type: "number",
        name: "value",
        message: "How old are you?",
        validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
    },
    plugins: [pluginA()],
};
const pluginDriver = new PluginDriver(options);
// pluginDriver.parseCommand("");
pluginDriver.parseCommand("");
