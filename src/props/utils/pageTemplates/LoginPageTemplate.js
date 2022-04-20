// import useStyles from "../../../pages/login/styles";
// import PageButton from "../UI/PageButton";
// import google from "../../images/google.svg"
// import { useState } from "react";
// import PageTextField from "../UI/PageTextField";
// import { Fragment } from "react";

// import {
//     Typography,
// } from "@material-ui/core";

// const LoginPageTemplate = () => {
//     const classes = useStyles();
//     const [loginValue, setLoginValue] = useState("admin@tatar-it.com");
//     const [passwordValue, setPasswordValue] = useState("password");


//     const greeting = input =>
//         <Typography variant="h1" className={classes.greeting}>
//             {input}
//         </Typography>

//     const googleButton = config =>
//         new PageButton({
//             size: config.size ? config.size : "large",
//             className: config.className ? classes[config.className] : classes.googleButton,
//             imgSource: config.imgSource ? require('../../images/' + config.ImgSource).default : google,
//             imgAlt: config.imgAlt ? config.ImgAlt : "Google",
//             imgClassName: config.imgClassName ? classes[config.imgClassName] : classes.googleIcon,
//             imgText: "Sign in with Google"
//         }).show()

//     const divideContainer = input =>
//         <div className={classes.formDividerContainer}>
//             <div className={classes.formDivider} />
//             <Typography className={classes.formDividerWord}>{input}</Typography>
//             <div className={classes.formDivider} />
//         </div>

//     const inputField = config =>
//         new PageTextField({
//             id: config.id,
//             InputProps: config.inputProbs ? config.inputProbs : {
//                 classes: {
//                     underline: classes.textFieldUnderline,
//                     input: classes.textField,
//                 }
//             },
//             value: config.value === "user" ? loginValue : passwordValue,
//             onChange: config.type === "user" ? (e) => setLoginValue(e.target.value) : (e) => setPasswordValue(e.target.value),
//             margin: config.margin ? config.margin : "normal",
//             placeholder: config.placeholder,
//             type: config.type,
//             fullWidth: config.fullWidth
//         }).show()

        
//         const buttonLoader = config =>
//         <Fragment key={config.id}>
//             {isLoading ? (
//                 <CircularProgress size={26} className={classes.loginLoader} />
//                 ) : (
//                     new PageButton({
//                         id: config.id,
//                         disabled: loginValue.length === 0 || passwordValue.length === 0,
//                         onClick: () => loginUser(
//                             userDispatch, loginValue, passwordValue,
//                             props.history, setIsLoading, setError
//                             ),
//                             variant: config.variant,
//                             color: config.color ? config.color : "primary",
//                             size: config.size ? config.size : "large",
//                             imgText: loginValue.imgText
//                         }).show()
//                         )} </Fragment>
                        
                        
//                         const submitButton = config =>
//                             config.loginLoader ? buttonLoader(config) : button(config);
//     return { greeting, googleButton, divideContainer, inputField }
// }

// export default LoginPageTemplate;


// let pMenuLoginBottomButtonsLogin =
// new PageButton({
//   id: "login",
//   disabled: loginValue.length === 0 || passwordValue.length === 0,
//   onClick: () => loginUser(
//     userDispatch, loginValue, passwordValue,
//     props.history, setIsLoading, setError
//   ),
//   variant: "contained",
//   color: "primary",
//   size: "large",
//   imgText: "Login"
// }).show()


// let pMenuLoginBottomButtonsFPassword =
// new PageButton({
//   id: "fPassword",
//   color: "primary",
//   size: "large",
//   className: classes.forgetButton,
//   imgText: "Forgot Password"
// }).show()


// let pMenuLoginBottomButtons = [
// <Fragment key="loginBottomButtons">
//   {isLoading ? (
//     <CircularProgress size={26} className={classes.loginLoader} />
//   ) : (
//     pMenuLoginBottomButtonsLogin
//   )} </Fragment>,
// pMenuLoginBottomButtonsFPassword
// ]
// let pMenuLoginTabTopButtons = [
// new PageButton({
//   id: "googleSignIn",
//   size: "large",
//   className: classes.googleButton,
//   imgSource: google,
//   imgAlt: "Google",
//   imgClassName: classes.googleIcon,
//   imgText: "Sign in with Google"
// }).show()
// ]

// let pMenuLoginInputFields = [
// new PageTextField({
//   id: "email",
//   InputProps: {
//     classes: {
//       underline: classes.textFieldUnderline,
//       input: classes.textField,
//     }
//   },
//   value: loginValue,
//   onChange: e => setLoginValue(e.target.value),
//   margin: "normal",
//   placeholder: "Email Adress",
//   type: "email",
//   fullWidth: true
// }).show(),
// new PageTextField({
//   id: "password",
//   InputProps: {
//     classes: {
//       underline: classes.textFieldUnderline,
//       input: classes.textField,
//     }
//   },
//   value: passwordValue,
//   onChange: e => setPasswordValue(e.target.value),
//   margin: "normal",
//   placeholder: "Password",
//   type: "password",
//   fullWidth: true
// }).show()
// ]

// let pMenuLoginTab = <Fragment key="dsdas">
// <Typography variant="h1" className={classes.greeting}>
//   "Good Morning, User (C)"
// </Typography>
// {pMenuLoginTabTopButtons}
// <div className={classes.formDividerContainer}>
//   <div className={classes.formDivider} />
//   <Typography className={classes.formDividerWord}>or</Typography>
//   <div className={classes.formDivider} />
// </div>
// <Fade in={error}>
//   <Typography color="secondary" className={classes.errorMessage}>
//     Something is wrong with your login or password :(
//   </Typography>
// </Fade>
// {pMenuLoginInputFields}
// <div className={classes.formButtons}>
//   {pMenuLoginBottomButtons}
// </div>
// </Fragment>

//native template
// "native": {
//     "file": "LoginPage.json",
//     "json": "loginTab"
// }