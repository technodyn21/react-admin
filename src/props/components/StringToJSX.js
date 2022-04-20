import React from "react";
import {
    Grid,
    CircularProgress,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Fade,
} from "@material-ui/core"

const getNodes = str =>
    new DOMParser().parseFromString(str, "text/html").body.childNodes;

const checkJSX = (element) => {
    switch (element) {
        case "grid":
            return Grid;
        case "circularprogress":
            return CircularProgress;
        case "typography":
            return Typography;
        case "button":
            return Button;
        case "tabs":
            return Tabs;
        case "tab":
            return Tab;
        case "textField":
            return TextField;
        case "fade":
            return Fade;
        default:
            return element;
    }
}
const createJSX = nodeArray => {
    // const className = nodeArray[0].className;
    return nodeArray.map(node => {
        let attributeObj = {};
        const {
            attributes,
            localName,
            childNodes,
            nodeValue
        } = node;
        if (attributes) {
            Array.from(attributes).forEach(attribute => {
                switch (attribute.name) {
                    case "style":
                        let styleAttributes = attribute.nodeValue.split(";");
                        let styleObj = {};
                        styleAttributes.forEach(attribute => {
                            let [key, value] = attribute.split(":");
                            styleObj[key] = value;
                        });
                        attributeObj[attribute.name] = styleObj;
                        break;
                    case "classname":
                        attributeObj["className"] = attribute.nodeValue;
                        break;
                    default:
                        attributeObj[attribute.name] = attribute.nodeValue;
                        break;
                }
            });
        }
        return localName ?
            React.createElement(
                checkJSX(localName),
                attributeObj,
                childNodes && Array.isArray(Array.from(childNodes)) ?
                    createJSX(Array.from(childNodes)) :
                    []
            ) :
            nodeValue;
    });
};

export const StringToJSX = props => {
    if(props.domString){
    return createJSX(Array.from(getNodes(props.domString)));}
};