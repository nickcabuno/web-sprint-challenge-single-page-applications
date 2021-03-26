import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .required('Email is required').min(2, 'Must be 2 characters'),
    size: yup.string()
    .oneOf(['12', '14', '16', '18'], 'Role is required'),
    sauce: yup.string()
        .oneOf(['red', 'garlicranch', 'pesto', 'buffalo', 'nosauce'], 'Pizza sauce selection is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    greenpeppers: yup.boolean(),
    chicken: yup.boolean(),
    bananapeppers: yup.boolean(),

    instructions: yup.string(),
})

export default formSchema