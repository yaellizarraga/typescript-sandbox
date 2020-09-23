"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacci = (n) => {
    let a = 0;
    let b = 1;
    for (let x = 0; x < n; x++) {
        let tmp = a;
        a = b;
        b = tmp + b;
        console.log(a);
    }
};
const main = (config) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(config);
    fibonacci(10);
});
const config = {
    color: 'GREEN',
    user: 'yaellizarraga'
};
main(config);
//# sourceMappingURL=index.js.map