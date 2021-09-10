import * as yup from 'yup';

export const clientSchema = yup.object().shape({
    id: yup.number().notRequired(),
    name: yup.string().required().max(100),
    lastname: yup.string().required().max(100),
    dateBirthday: yup.date().required(),
});

