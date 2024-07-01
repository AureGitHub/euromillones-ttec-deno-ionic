// deno-lint-ignore-file no-explicit-any
import { aureDB , statusOK, StatusCodes,setStatus, statusError} from  "../../../dep/deps.ts"

import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";


const entity = new aureDB(client, entities, 'Documentos');



const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  let data = await entity.findFirst({ where: { id } });


  const blob = new Blob([data.content], { type: data.contenttype });  


  let myData = data.content.toString("base64");


  data['myData'] =  myData;
  statusOK(ctx, data  );

};


const add = async (ctx: any) => {
  try {
    const newItem = await ctx.request.body().value;
    const data = await entity.create({ data: newItem });   
      
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};




export default {
  getById,
  add,
};
