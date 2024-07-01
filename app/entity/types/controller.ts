import { aureDB , statusOK} from  "../../../dep/deps.ts";

import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";

// deno-lint-ignore no-explicit-any
const get = async (ctx: any) => {

  const cual = ctx?.params?.cual;
  const entity =new aureDB(client,entities,cual);
  const result =await entity.findMany();
  const data = { data: result, count: result.length };
  statusOK(ctx,data);   

};

export default {
  get,

};
