import  * as Yup from "yup";

export const signUpSchema = Yup.object({
name:Yup.string().min(2).max(15).required("Please enter your name"),
lastname:Yup.string().min(0).max(15),
email:Yup.string().email().required("please enter your email"),
password:Yup.string().min(6).required("please enter password"),
});