// deno-lint-ignore-file no-explicit-any
import { aureDB, StatusCodes } from  "../../../dep/deps.ts";
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import { TC_BizumEstado } from "../../enums.ts";

const get= async (ctx: any) => {
 

  const UserXBizum = new aureDB(client, entities, 'UserXBizum');

  const totalBizumConfirmados = parseFloat(await UserXBizum.aggregate({ _sum: 'importe', where: {estadoid: TC_BizumEstado.confirmado } }));  


  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data:{ totalBizumConfirmados}
        },
   };

 
};


export default { 
    get,
};
