import express from 'express';
import {controller} from '../controllers/controller';

export const Router = express.Router();

Router.post('/',controller.addUser);
Router.get('/:id',controller.findUserById);
Router.put('/:id',controller.updateUser);
Router.delete('/:id',controller.deleteUser);