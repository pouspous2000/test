import { BaseFactory } from '@/core/BaseFactory'
import { faker } from '@faker-js/faker'

export class HorseFactory extends BaseFactory {
	static create(ownerId, pensionId = undefined, rideId = undefined) {
		const data = {
			ownerId: ownerId,
			pensionId: pensionId ? pensionId : null,
			rideId: rideId ? rideId : null,
			name: faker.animal.horse(),
			comment: faker.lorem.sentences(Math.random() * 10),
			...this._create(),
		}
		if (pensionId) {
			data.pensionId = pensionId
		}
		return data
	}
}
