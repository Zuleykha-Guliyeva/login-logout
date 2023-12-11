import { createUseStyles } from "react-jss";
import colors from "../../../assets/styles/abstracts/color";
import { breakpoint } from "../../../assets/styles/abstracts/mixins";

const styles = {
  publicClasses: {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
    backgroundColor: colors.layoutBackground,
    position: "relative",
  },
  orangePanel: {
    backgroundColor: colors.orangeBackground,
    width: "50%",
    height: "100vh",
    [breakpoint(768)]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
};

export const usePublicLayoutStyles = createUseStyles(styles);
