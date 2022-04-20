import React, { Fragment, useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Tabs,
  Tab,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo
import google from "../../props/images/google.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

//Properties
import Properties from "../../props/components/Properties.js";

//Utils
import PageTextField from "../../props/utils/UI/PageTextField.js"
import PageButton from "../../props/utils/UI/PageButton.js"

//User-Exits
let userExits = {
  exit2020: {}
}



function Login(props) {
  const classes = useStyles();
  // global
  const userDispatch = useUserDispatch();

  // local
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("admin@flatlogic.com");
  const [passwordValue, setPasswordValue] = useState("password");


  //___start_______________________PROPERTIES______________________________
  const defaultTabs = [<Tab label="Login" classes={{ root: classes.tab }} />,
  <Tab label="New User" classes={{ root: classes.tab }} />
  ]


  let {
    HTMLTitle: pTitle,
    logo: pLogo,
    pageTitle,
    tabs,
    userExits: tempUserExits
  } = Properties('Login.js');
  userExits = { ...userExits, ...tempUserExits };

  if (!tabs) {
    tabs = defaultTabs;
  }
  let footerFullText, footerLink, footerText1, footerText2, footerLinktext;



  let lWing = [<img key="pLogo" src={pLogo} alt="logo" className={classes.logotypeImage} />,
  <Typography key="pTitle" className={classes.logotypeText}>{pageTitle}</Typography>]

  let rWingTabsDefinition = [
    <Tab key="loginTab" label="Login" classes={{ root: classes.tab }} />,
    <Tab key="newUserTab" label="New User" classes={{ root: classes.tab }} />
  ]

  let rWingNewUserInputFields = [
    new PageTextField({
      inputProps: {
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        }
      },
      id: "name",
      value: nameValue,
      onChange: e => setNameValue(e.target.value),
      placeholder: "Full Name",
      type: "text",
      fullWidth: true
    }).show(),
    new PageTextField({
      inputProps: {
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        }
      },
      id: "email",
      value: loginValue,
      onChange: e => setLoginValue(e.target.value),
      placeholder: "Email Adress",
      type: "email",
      fullWidth: true
    }).show(),
    new PageTextField({
      inputProps: {
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        }
      },
      id: "password",
      value: passwordValue,
      onChange: e => setPasswordValue(e.target.value),
      placeholder: "Password",
      type: "password",
      fullWidth: true
    }).show()
  ]

  let rWingTabsNewUserCreateButton = new PageButton(
    {
      id: "createAcc",
      classes: classes,
      size: "large",
      className: classes.createAccountButton,
      imgText: "Create your account",
      onClick: () => loginUser(userDispatch, loginValue,
        passwordValue, props.history, setIsLoading, setError),
      disabled: loginValue.length === 0 ||
        passwordValue.length === 0 || nameValue.length === 0,
      variant: "contained",
      color: "primary",
      fullWidth: true
    }).show();


  let rWingTabsNewUserButtons = [
    new PageButton(
      {
        id: "googleSignIn2",
        classes: classes,
        size: "large",
        className: `${classes.googleButton}, ${classes.googleButtonCreating}`,
        imgSource: google,
        imgText: "Sign in with Google",
        imgClassName: classes.googleIcon
      }).show()
  ]
  let rWingNewUserGreeting = "Welcome!"
  let rWingNewUsersubGreeting = "Create your account"
  let rWingNewUserErrorMessage = "Something is wrong with your login or password :("

  let rWingLoginBottomButtonsLogin =
    new PageButton({
      id: "login",
      disabled: loginValue.length === 0 || passwordValue.length === 0,
      onClick: () => loginUser(
        userDispatch, loginValue, passwordValue,
        props.history, setIsLoading, setError
      ),
      variant: "contained",
      color: "primary",
      size: "large",
      imgText: "Login"
    }).show()


  let rWingLoginBottomButtonsFPassword =
    new PageButton({
      id: "fPassword",
      color: "primary",
      size: "large",
      className: classes.forgetButton,
      imgText: "Forgot Password"
    }).show()


  let rWingLoginBottomButtons = [
    <Fragment key="loginBottomButtons">
      {isLoading ? (
        <CircularProgress size={26} className={classes.loginLoader} />
      ) : (
        rWingLoginBottomButtonsLogin
      )} </Fragment>,
    rWingLoginBottomButtonsFPassword
  ]
  let rWingLoginTabTopButtons = [
    new PageButton({
      id: "googleSignIn",
      size: "large",
      className: classes.googleButton,
      imgSource: google,
      imgAlt: "Google",
      imgClassName: classes.googleIcon,
      imgText: "Sign in with Google"
    }).show()
  ]

  let rWingLoginInputFields = [
    new PageTextField({
      id: "email",
      InputProps: {
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        }
      },
      value: loginValue,
      onChange: e => setLoginValue(e.target.value),
      margin: "normal",
      placeholder: "Email Adress",
      type: "email",
      fullWidth: true
    }).show(),
    new PageTextField({
      id: "password",
      InputProps: {
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        }
      },
      value: passwordValue,
      onChange: e => setPasswordValue(e.target.value),
      margin: "normal",
      placeholder: "Password",
      type: "password",
      fullWidth: true
    }).show()
  ]

  let rWingLoginTab = <Fragment key="dsdas">
    <Typography variant="h1" className={classes.greeting}>
      "Good Morning, User (C)"
    </Typography>
    {rWingLoginTabTopButtons}
    <div className={classes.formDividerContainer}>
      <div className={classes.formDivider} />
      <Typography className={classes.formDividerWord}>or</Typography>
      <div className={classes.formDivider} />
    </div>
    <Fade in={error}>
      <Typography color="secondary" className={classes.errorMessage}>
        Something is wrong with your login or password :(
      </Typography>
    </Fade>
    {rWingLoginInputFields}
    <div className={classes.formButtons}>
      {rWingLoginBottomButtons}
    </div>
  </Fragment>

  let rWingNewUserTab = <Fragment key="dsad">
    <Typography key="as" variant="h1" className={classes.greeting}>
      {rWingNewUserGreeting}
    </Typography>
    <Typography key="aw" variant="h2" className={classes.subGreeting}>
      {rWingNewUsersubGreeting}
    </Typography>
    <Fade in={error}>
      <Typography color="secondary" className={classes.errorMessage}>
        {rWingNewUserErrorMessage}
      </Typography>
    </Fade>
    {rWingNewUserInputFields}
    <div className={classes.creatingButtonContainer}>
      {isLoading ? <CircularProgress size={26} /> : rWingTabsNewUserCreateButton}
    </div>
    <div className={classes.formDividerContainer}>
      <div className={classes.formDivider} />
      <Typography className={classes.formDividerWord}>or</Typography>
      <div className={classes.formDivider} />
    </div>
    {rWingTabsNewUserButtons}
  </Fragment>

  let rWingTabsContent = [
    rWingLoginTab,
    rWingNewUserTab]

  const footer = [
    <Typography key="footer" color="primary" className={classes.copyright}>
      {footerFullText || <>
        © {new Date().getFullYear()} {footerText1}
        <a style={{ textDecoration: 'none', color: 'inherit' }}
          href={footerLink} rel="noopener noreferrer" target="_blank">{footerLinktext}</a>
        {footerText2 || <>, LLC. All rights reserved. </>}</>}
    </Typography>
  ]

  let rWing = [
    <div className={classes.form} key="tabs">
      <Tabs
        value={activeTabId}
        onChange={(e, id) => setActiveTabId(id)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {rWingTabsDefinition}
      </Tabs>
      {activeTabId === 0 && rWingTabsContent[0]}
      {activeTabId === 1 && rWingTabsContent[1]}
      {activeTabId === 2 && rWingTabsContent[2]}
      {activeTabId === 3 && rWingTabsContent[3]}
      {activeTabId === 4 && rWingTabsContent[4]}
    </div>,
    footer
  ]

  const completePage = [

    <div key="lWing" className={classes.logotypeContainer}>
      {lWing}
    </div>,
    <div key="rWing" className={classes.formContainer}>
      {rWing}
    </div>
  ]
  //___end_________________________PROPERTIES______________________________

  return (
    <>
      <Grid container className={classes.container} >
        {completePage}
      </Grid>
      <title>{pTitle}</title>
    </>
  );
}

export default withRouter(Login);
