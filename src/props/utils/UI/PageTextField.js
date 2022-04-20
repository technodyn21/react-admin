import { TextField } from "@material-ui/core";

function PageTextField(config) {
  this.show = () =>
    <TextField
      id={config.id}
      key={config.id}
      InputProps={config.inputProps }
      value={config.value}
      onChange={config.onChange}
      margin={config.margin ? config.margin : "normal"}
      placeholder={config.placeholder}
      type={config.type}
      fullWidth={config.fullWidth}
    />
}

export default PageTextField;