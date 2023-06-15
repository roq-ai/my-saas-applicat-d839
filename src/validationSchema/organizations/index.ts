import * as yup from 'yup';
import { organizationUserValidationSchema } from 'validationSchema/organization-users';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_user: yup.array().of(organizationUserValidationSchema),
});
