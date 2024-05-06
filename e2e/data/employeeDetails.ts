import { faker } from "@faker-js/faker";
import { employee } from "./dataInterface";

const employeeData: employee = {
  EmployeeId: faker.string.alphanumeric({ length: 8 }),
  FirstName: faker.person.firstName(),
  MiddleName: faker.person.middleName(),
  LastName: faker.person.lastName(),
};
export { employeeData };
