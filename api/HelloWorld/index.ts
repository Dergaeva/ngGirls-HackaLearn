import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

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

};

export default httpTrigger;
