import * as Yup from 'yup';

export const todoSchema = Yup.object().shape({
    text: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});
