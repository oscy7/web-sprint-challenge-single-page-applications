import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be 2 charaters long')
        .min(2, 'name must be 2 charaters long'),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    onion: yup.boolean(),
    peppers:yup.boolean(),
    special: yup.string(),
    size: yup.string()
    
})

export default formSchema;