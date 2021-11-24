import React from "react";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import IconWithText from "components/common/IconWithText";

interface CreateCardButtonProps {
  onClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #E8E8E8",
    borderRadius: 12,
    width: "100%",
    padding: theme.spacing(3, 0),
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: "#556370",
    textTransform: "none",
  },
}));

const CreateRegistryCardButton: React.FC<CreateCardButtonProps> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <ButtonBase onClick={onClick} className={classes.root}>
      <IconWithText
        icon={<AddBoxOutlinedIcon className={classes.buttonText} />}
        text="Створити нову чернетку"
        variant="subtitle2"
        className={classes.buttonText}
      />
    </ButtonBase>
  );
};

export default CreateRegistryCardButton;
