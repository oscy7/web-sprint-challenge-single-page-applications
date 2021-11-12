import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    onion: yup.boolean(),
    peppers:yup.boolean(),
    special: yup.string(),
    size: yup.string()

})

export default formSchema;