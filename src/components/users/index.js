import db from '../../db_models';
import utils from '../../utils/utils';
import UsersController from './users_controller';
import UsersService from './users_service';

export const usersService = new UsersService({ model: db.User, utils });
export const usersController = new UsersController({ model: db.User, utils, usersService });