import { Button } from "@material-ui/core";

function PageButton(config) {
  this.show = () =>
    <Button
      key={config.id}
      size={config.size}
      className={config.className ? config.className : ""}
      disabled={config.disabled}
      onClick={config.onClick}
      variant={config.variant}
      color={config.color}
      fullWidth={config.fullWidth}
    >
      {config.imgSource && <img src={config.imgSource} alt={config.imgAlt} className={config.imgClassName} />}
      &nbsp;{config.imgText}&nbsp;
    </Button>
}

export default PageButton;