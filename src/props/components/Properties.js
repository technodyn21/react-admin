
const loginJS = 'Login.js'
const imported = require.context('../../props', true);
let pages;
try {

    pages = imported('./props.json');
} catch (error) {
    console.error('Parsefehler in props.json. Bitte Datei überprüfen.')
}



const loadNative = (items) => {
    let result, codeContent;
    try {
        codeContent = imported('./native/' + items.file);
        result = codeContent[0][items.json];
    } catch (error) {
        console.error(error);
        return;
    }
    return result
};

const loadExits = (page) => {
    let result = {}
    let tmpRes = {};
    Object.entries(page).map((items) => {
        if (typeof items[1] === "object") {
            tmpRes = loadExits(items[1]);
            result = { ...result, ...tmpRes }
        }
        if (items[0] === "native") {
            tmpRes = loadNative(items[1])
            result = { ...result, ...tmpRes }
        }
        return 0;
    })
    return result;
};

//CONSTANTS
const defaultValues = {
    login: {
        main: {
            "defaultLogoLink": "../images/defLogo.svg",
            "defaultHTMLTitle": "ERP Admin",
            "defaultPageTitle": "ERP Admin",
            "defaultBeforeLogo": "",
            "defaultAfterTitle": "",
            "defaultTabs": "<Tab label=\"Login\" classes={{ root: classes.tab }} /> <Tab label=\"New User\" classes={{ root: classes.tab }} />"
        },
        menu: {
            "tabs": {
                "Login": {},
                "User": {}
            }
        }
    }
}

const getDefaultValues = (source1, source2) => {
    return pages[0].pages[source1].defaultValues[source2] ?
        pages[0].pages[source1].defaultValues[source2] :
        defaultValues[source1][source2]
}

const Properties = (mode) => {


    let result = {};
    switch (mode) {
        case loginJS:
            const {
                defaultHTMLTitle,
                defaultPageTitle,
                defaultBeforeLogo,
                defaultAfterTitle,
            } = getDefaultValues("login", "main");
            const { defaultTabs } = getDefaultValues("login", "menu");

            let main = pages[0].pages.login.main;
            let menu = pages[0].pages.login.menu;
            if (!menu.tabs) menu.tabs = defaultTabs;
            result = {
                main: {
                    HTMLTitle: main.HTMLTitle ? main.HTMLTitle : defaultHTMLTitle,
                    logo: main.logo ? require('../images/' + main.logo).default : require('../images/defLogo.svg').default,
                    pageTitle: main.pageTitle ? main.pageTitle : defaultPageTitle,
                    beforeLogo: main.beforeLogo ? main.beforeLogo : defaultBeforeLogo,
                    afterTitle: main.afterTitle ? main.afterTitle : defaultAfterTitle,
                },
                menu: menu,
                userExits: loadExits(menu)

            };
            break;
        default:
            break;
    }
    return result;
}

export default Properties;