import { Router } from 'express'
import isAuthenticated from '@/middlewares/is-authenticated'
import hasRoleCategory from '@/middlewares/has-role-category'
import validate from '@/middlewares/validate'
import { ContactValidator } from '@/modules/contact/validation'
import { ContactController } from '@/modules/contact/controller'

const contactRouter = Router()
const controller = new ContactController()

const prefix = 'contacts'
contactRouter.get(`/${prefix}`, isAuthenticated, hasRoleCategory(['ADMIN', 'EMPLOYEE', 'CLIENT']), controller.index)
contactRouter.get(`/${prefix}/:id`, isAuthenticated, hasRoleCategory(['ADMIN', 'EMPLOYEE', 'CLIENT']), controller.show)
contactRouter.delete(
	`/${prefix}/:id`,
	isAuthenticated,
	hasRoleCategory(['ADMIN', 'EMPLOYEE', 'CLIENT']),
	controller.delete
)
contactRouter.post(
	`/${prefix}`,
	isAuthenticated,
	hasRoleCategory(['ADMIN', 'EMPLOYEE', 'CLIENT']),
	validate(ContactValidator.create()),
	controller.create
)
contactRouter.put(
	`/${prefix}/:id`,
	isAuthenticated,
	hasRoleCategory(['ADMIN', 'EMPLOYEE', 'CLIENT']),
	validate(ContactValidator.update()),
	controller.update
)
export default contactRouter
