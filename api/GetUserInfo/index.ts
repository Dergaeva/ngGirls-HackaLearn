import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import {CosmosClient} from "@azure/cosmos";

interface IUser {
  userName: string,
  id: string,
  groupId: string,
  numberOfPets: number
}

const endpoint = 'https://ng-girls-learn-db.documents.azure.com:443/';
const key = process.env.DB_KEY
const databaseName = 'ng-girls-learn-db';
const collection = 'coupons-app';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const client = new CosmosClient({endpoint, key});

    const database = client.database(databaseName);

    const container = database.container(collection);

    const query = `SELECT * FROM c WHERE c.groupID = "223432"`;
    const groupRes = await container.items.query(query).fetchAll();

  const itemRes = await container.item('55555', '223432').read<IUser>();

  context.log('User', itemRes);

    if(groupRes.resources.length === 0) {
      context.res = {
        status: 404,
        body: {
          code: 404,
          message: 'no items found !'
        }

      }
      context.done();
      return;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {

          items: groupRes.resources,
          item: itemRes.resource
        }
    };

};

export default httpTrigger;
