import React, { Fragment, useEffect, useState } from "react";
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

  let inputValueRefs = [] // max 5 refs
  let [value, func] = useState("");
  inputValueRefs.push({ ref: "", value: value, setValue: func });
  [value, func] = useState("");
  inputValueRefs.push({ ref: "", value: value, setValue: func });
  [value, func] = useState("");
  inputValueRefs.push({ ref: "", value: value, setValue: func });
  [value, func] = useState("");
  inputValueRefs.push({ ref: "", value: value, setValue: func });
  [value, func] = useState("");
  inputValueRefs.push({ ref: "", value: value, setValue: func });


  let main, menu, userExits, pTitle, pLogo, pageTitle, properties;

  useEffect(() => {

  }, []);


  const load = config => {
    properties = Properties('Login.js');
    main = properties.main;
    menu = properties.menu;
    userExits = properties.userExits;

    pTitle = main.HTMLTitle;
    pLogo = main.logo;
    pageTitle = main.pageTitle;
    //______________________ main _______________________________________________________________
    let pMain = [<img key="pLogo" src={pLogo} alt="logo" className={classes.logotypeImage} />,
    <Typography key="pTitle" className={classes.logotypeText}>{pageTitle}</Typography>]


    //______________________ menu _______________________________________________________________
    let pMenuTabsDefinition;
    pMenuTabsDefinition = Object.entries(menu.tabs).map((tab) =>
      <Tab key={tab[0]} label={tab[0]} classes={{ root: classes.tab }} />)

    //______________________________________________________________________________________
    let resultHtml = []
    let template;
    let tmpTab;
    for (let tabKey of Object.keys(menu.tabs)) {
      tmpTab = [];
      resultHtml.push(tmpTab);
      template = menu.tabs[tabKey]["LoginPageTemplate"]; // ist Template vorhanden?
      if (template) {
        tmpTab.push(loginTemplate(template));
      }
    }
    console.log('blub');
    //_____________________________________LOGIN __________________________________________________________

    let pMenuLoginTab;

    pMenuLoginTab = resultHtml[0];
    // //____________________________________NEW USER _______________________________________________________
    let pMenuNewUserInputFields = [
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

    let pMenuTabsNewUserCreateButton = new PageButton(
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


    let pMenuTabsNewUserButtons = [
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

    let pMenuNewUserGreeting = "Welcome!"
    let pMenuNewUsersubGreeting = "Create your account"
    let pMenuNewUserErrorMessage = "Something is wrong with your login or password :("

    let pMenuNewUserTab = <Fragment key="dsad">
      <Typography key="as" variant="h1" className={classes.greeting}>
        {pMenuNewUserGreeting}
      </Typography>
      <Typography key="aw" variant="h2" className={classes.subGreeting}>
        {pMenuNewUsersubGreeting}
      </Typography>
      <Fade in={error}>
        <Typography color="secondary" className={classes.errorMessage}>
          {pMenuNewUserErrorMessage}
        </Typography>
      </Fade>
      {pMenuNewUserInputFields}
      <div className={classes.creatingButtonContainer}>
        {isLoading ? <CircularProgress size={26} /> : pMenuTabsNewUserCreateButton}
      </div>
      <div className={classes.formDividerContainer}>
        <div className={classes.formDivider} />
        <Typography className={classes.formDividerWord}>or</Typography>
        <div className={classes.formDivider} />
      </div>
      {pMenuTabsNewUserButtons}
    </Fragment>



    let pMenuTabsContent = [
      pMenuLoginTab,
      pMenuNewUserTab
    ]
    pMenuTabsContent = resultHtml;

    let footerFullText, footerLink, footerText1, footerText2, footerLinktext;

    const pMenuFooter = [
      <Typography key="footer" color="primary" className={classes.copyright}>
        {footerFullText || <>
          © {new Date().getFullYear()} {footerText1}
          <a style={{ textDecoration: 'none', color: 'inherit' }}
            href={footerLink} rel="noopener noreferrer" target="_blank">{footerLinktext}</a>
          {footerText2 || <>, LLC. All rights reserved. </>}</>}
      </Typography>
    ]

    let pMenu = [
      <div className={classes.form} key="tabs">
        <Tabs
          value={activeTabId}
          onChange={(e, id) => setActiveTabId(id)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {pMenuTabsDefinition}
        </Tabs>
        {activeTabId === 0 && pMenuTabsContent[0]}
        {activeTabId === 1 && pMenuTabsContent[1]}
        {activeTabId === 2 && pMenuTabsContent[2]}
        {activeTabId === 3 && pMenuTabsContent[3]}
        {activeTabId === 4 && pMenuTabsContent[4]}
      </div>,
      pMenuFooter
    ]


    const completePage = [

      <div key="lWing" className={classes.logotypeContainer}>
        {pMain}
      </div>,
      <div key="rWing" className={classes.formContainer}>
        {pMenu}
      </div>
    ]

    return completePage;
  }

  //________________________________________end LOAD ___________________________________




  //___start_______________________PROPERTIES______________________________


  // let { main, menu, userExits } = Properties('Login.js');
  // // console.log('main ', main);
  // let { HTMLTitle: pTitle,
  //   logo: pLogo,
  //   pageTitle } = main

  //___end_________________________PROPERTIES______________________________

  const greeting = input =>
    textField(input, "h1", classes.greeting);

  const subGreeting = input =>
    textField(input, "h2", classes.subGreeting);

  const textField = (input, variant, classes) =>
    <Fragment key={input}>
      {
        < Typography variant={variant} className={classes} >
          {input}
        </Typography >
      }
    </Fragment>

  const googleButton = config =>
    <Fragment key={config.id}>
      {
        new PageButton({
          size: config.size ? config.size : "large",
          className: config.className ? classes[config.className] : classes.googleButton,
          imgSource: config.imgSource ? require('../../props/images/' + config.imgSource).default : google,
          imgAlt: config.imgAlt ? config.ImgAlt : "Google",
          imgClassName: config.imgClassName ? classes[config.imgClassName] : classes.googleIcon,
          imgText: "Sign in with Google"
        }).show()
      }</Fragment>

  const dividerContainer = input =>
    <Fragment key={input}>
      {
        <div className={classes.formDividerContainer}>
          <div className={classes.formDivider} />
          <Typography className={classes.formDividerWord}>{input}</Typography>
          <div className={classes.formDivider} />
        </div>
      }
    </Fragment>


  const inputField = config => {
    let tmpRefObj = inputValueRefs.filter(({ ref, value }) => ref === config.ref || value === config.placeholder)
    if (!tmpRefObj.length) {
      tmpRefObj = inputValueRefs.find(({ ref }) => ref === ""); //first free
      if (!tmpRefObj) return <div>Keine freie Referenz für Inputfeld</div>
      tmpRefObj.ref = config.ref;
      // tmpRefObj.setValue(config.placeholder); //set value
    } else {
      tmpRefObj = tmpRefObj[0] // Objekt aus Array holen
    }
    const result =
      <Fragment key={config.id}>
        {new PageTextField({
          id: config.id,
          InputProps: config.inputProbs ? config.inputProbs : {
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            }
          },
          value: tmpRefObj.value,
          // value: config.value === "user" ? loginValue : passwordValue,
          onChange: (e) => tmpRefObj.setValue(e.target.value),
          // onChange: config.type === "user" ? (e) => setLoginValue(e.target.value) : (e) => setPasswordValue(e.target.value),
          margin: config.margin ? config.margin : "normal",
          placeholder: config.placeholder,
          type: config.type,
          fullWidth: config.fullWidth
        }).show()}
      </Fragment>

    return result;
  }


  const buttonLoader = config =>
    <Fragment key={config.id}>
      {isLoading ? (
        <CircularProgress size={26} className={classes.loginLoader} />
      ) : (
        new PageButton({
          id: config.id,
          disabled: loginValue.length === 0 || passwordValue.length === 0,
          onClick: () => loginUser(
            userDispatch, loginValue, passwordValue,
            props.history, setIsLoading, setError
          ),
          variant: config.variant,
          color: config.color ? config.color : "primary",
          size: config.size ? config.size : "large",
          imgText: config.imgText
        }).show()
      )} </Fragment>


  const button = config => {
    let classesObj = classes[config.className]
    console.log('button', classesObj)
    return <Fragment key={config.id}>
      {new PageButton({
        id: config.id,
        color: config.color ? config.color : "primary",
        size: config.size ? config.size : "large",
        className: classesObj,
        imgText: config.imgText,
      }).show()}
    </Fragment>
  }

  const submitButton = config =>
    config.loginLoader ? buttonLoader(config) : button(config);

  const formButtons = buttons => {
    return <div className={classes.formButtons}> {buttons.map(
      button =>
        Object.entries(button).map(
          (buttonUI) => eval(buttonUI[0])(buttonUI[1])
        )
    )} </div>
  }

  function loginTemplate(config) {
    return config.map(item =>
      Object.entries(item).map(
        (itemUI) => eval(itemUI[0])(itemUI[1])
      )
    )
  }

  const content = load(Properties('Login.js'));
  return (
    <>
      <Grid container className={classes.container} >
        {/* {completePage} */}
        {content}
      </Grid>
      <title>{pTitle}</title>
    </>
  );
}

export default withRouter(Login);


