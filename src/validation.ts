import * as Yup from 'yup';

export const listingFormValidation = Yup.object({
  name: Yup.string()
    .required('Please enter listing name')
    .min(3, 'Not shorter then 3 symbols')
    .max(30, 'Not shorter then 30 symbols'),
  price: Yup.number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .required('Please enter listing price')
    .min(0, 'Minimum 0'),
  description: Yup.string()
    .required('Please enter listing description')
    .min(3, 'Not shorter then 3 symbols')
    .max(300, 'Not shorter then 300 symbols'),
  image: Yup.mixed()
    .test('required', 'Image is required', (value: any) => !!value[0])
    .test(
      'format',
      'Image has to be in jpeg or png format',
      (value: any) => value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png',
    ),
});
