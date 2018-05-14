import db from '../db_models'
import faker from 'faker'

export default () => {
  return new Promise(async (resolve, reject) => {
    try {
      for (let i = 0; i < 200; i++) {
        db.CompanyAddress.create({
          address_line_1: faker.address.streetAddress(),
          address_line_2: faker.company.bsAdjective(),
          address_line_3: faker.company.bsAdjective(),
          address_line_4: faker.company.bsAdjective(),
          town: faker.address.city(),
          county: faker.address.county(),
          country: faker.address.country(),
          post_code: faker.address.zipCode(),
          type_code: Math.floor(Math.random() * 3) + 1,
          company_id: Math.floor(Math.random() * 50) + 1,
        })
      }

      console.log('Demo items inserted into CompanyAddress table.')
      resolve()
    } catch (err) {
      console.log('Unable to perform action ', err)
      reject(err)
    }
  })
}
