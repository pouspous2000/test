import { body } from 'express-validator'
import i18next from '../../../i18n'

export class StableValidator {
	static update() {
		return [
			body('name').exists().withMessage(i18next.t('stable_request_validation_name_exists')),
			body('name').isLength({ max: 255 }).withMessage(i18next.t('stable_request_validation_name_length')),
			body('vat').exists().withMessage(i18next.t('stable_request_validation_vat_exists')),
			body('vat').isVAT('BE').withMessage(i18next.t('stable_request_validation_vat_vat')),
			body('phone').exists().withMessage(i18next.t('stable_request_validation_phone_exists')),
			body('phone').isLength({ max: 255 }).withMessage(i18next.t('stable_request_validation_phone_length')),
			body('email').exists().withMessage(i18next.t('stable_request_validation_email_exists')),
			body('email').isEmail().withMessage(i18next.t('stable_request_validation_email_email')),
			body('invoiceNb').isInt({ min: 1 }).withMessage(i18next.t('stable_request_validation_invoiceNb_int')),
			body('invoicePrefix')
				.isLength({ max: 255 })
				.withMessage(i18next.t('stable_request_validation_invoicePrefix_length')),
		]
	}
}
