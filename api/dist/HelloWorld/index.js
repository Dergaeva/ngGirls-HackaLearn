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
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('HTTP trigger function processed a request.');
        const header = req.headers['x-ms-client-principal'];
        let clientPrincipal = null;
        if (header) {
            const encoded = Buffer.from(header, 'base64');
            const decoded = encoded.toString('ascii');
            clientPrincipal = JSON.parse(decoded);
        }
        const secretName = process.env.SECRET_NAME;
        const name = (req.query.name || (req.body && req.body.name) || secretName);
        const responseMessage = name
            ? "Hello, " + name + ". This HTTP triggered function executed successfully."
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: { responseMessage, clientPrincipal }
        };
    });
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map