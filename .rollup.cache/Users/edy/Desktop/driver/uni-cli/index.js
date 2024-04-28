import { __awaiter } from "tslib";
import prompts from "prompts";
import PluginDriver from "./src/pluginDriver";
const pluginDriver = new PluginDriver();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prompts({
        type: "number",
        name: "value",
        message: "How old are you?",
        validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
    });
    console.log(response); // => { value: 24 }
}))();
pluginDriver.parseCommand("");
//# sourceMappingURL=index.js.map