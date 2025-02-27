import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate, Joi } from 'celebrate';
import { Logger } from 'winston';
import middlewares from '../middlewares';
import UserService from '../../services/user';

const route = Router();

export default (app: Router) => {
  app.use('/user', route);

  route.get(
    '/get',    
    middlewares.isAuth,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger:Logger = Container.get('logger');
      logger.debug('Calling Sign-Up endpoint with body: %o', req.body );
      try {
        const authServiceInstance = Container.get(UserService);
        const result = await authServiceInstance.getAllUsers();
        return res.status(200).json(result);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  // route.post(
  //   '/delete',
  //   celebrate({
  //     body: Joi.object({
  //       id: Joi.string().required()
  //     }),
  //   }),
  //   middlewares.isAuth,
  //   async (req: Request, res: Response, next: NextFunction) => {
  //     const logger:Logger = Container.get('logger');
  //     logger.debug('Calling Sign-Up endpoint with body: %o', req.body );
  //     try {
  //       const authServiceInstance = Container.get(UserService);
  //       const result = await authServiceInstance.deleteUser(req.body.id);
  //       return res.status(201).json(result);
  //     } catch (e) {
  //       logger.error('🔥 error: %o', e);
  //       return next(e);
  //     }
  //   },
  // );

  
};