import * as yup from "yup";

export const registerSchema = yup.object({
    fullName: yup
    .string()
    .required()
    .min(3, "Full name has to be at least 3 characters"),

    email: yup
    .string()
    .required()
    .email(),

    password: yup
    .string()
    .required()
    .min(8, "Password has to be at least 8 characters")
    .matches(/\d/, "Password must contain at least one number"), // /\d means digit

    confirmPass: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "passwords have to be the same"),

    terms: yup
    .boolean()
    .oneOf([true], "You must accept terms and conditions!")
})