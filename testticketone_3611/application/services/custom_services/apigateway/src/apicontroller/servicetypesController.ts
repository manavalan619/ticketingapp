import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class servicetypesController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/servicetypes/get/search', this.GpSearch);
this.router.delete('/servicetypes/:id', this.GpDelete);
this.router.get('/servicetypes', this.GpGetAllValues);
this.router.get('/servicetypes/:id', this.GpGetNounById);
this.router.post('/servicetypes', this.GpCreate);
this.router.put('/servicetypes/get/update', this.GpSearchForUpdate);
this.router.put('/servicetypes', this.GpUpdate);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpSearch');
        new ApiAdaptar().get(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpGetNounById');
        new ApiAdaptar().get(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpSearchForUpdate');
        new ApiAdaptar().put(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into servicetypesController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.SERVICETYPEMAINTENANCEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from servicetypesController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }




}
