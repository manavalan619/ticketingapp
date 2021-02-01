import { Request, Response, NextFunction } from "express";
import { servicetypesController } from '../controller/servicetypesController';


export class Routes {
    private servicetypes: servicetypesController = new servicetypesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/servicetypes/get/search').get(this.servicetypes.GpSearch);
app.route('/servicetypes/:id').delete(this.servicetypes.GpDelete);
app.route('/servicetypes').get(this.servicetypes.GpGetAllValues);
app.route('/servicetypes/:id').get(this.servicetypes.GpGetNounById);
app.route('/servicetypes').post(this.servicetypes.GpCreate);
app.route('/servicetypes/get/update').put(this.servicetypes.GpSearchForUpdate);
app.route('/servicetypes').put(this.servicetypes.GpUpdate);
     }

}