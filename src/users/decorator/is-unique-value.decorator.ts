import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import { getRepository } from 'typeorm';

export function IsUniqueValue(entity:any,columnName: string, validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUniqueValue',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: `${columnName} already exists`,
      },
      async validator(value: any, args: ValidationArguments) {
        const repository = getRepository(entity);
        const item = await repository.findOne({ where: { [columnName]: value } });
        if (item) {
          return false;
        }
        return true;
      },
      constraints: [],
    });
  };
}
