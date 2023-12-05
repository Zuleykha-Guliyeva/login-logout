import { createUseStyles } from "react-jss";
import { rem } from "../../assets/styles/abstracts/functions";
import colors from "../../assets/styles/abstracts/color";
import { breakpoint } from "../../assets/styles/abstracts/mixins";

const styles = {
  publicClasses: {
    width: rem(1400),
    height: "100vh",
    margin: "0 auto",
    backgroundColor: colors.layoutBackground,
    position: "relative",
    [breakpoint(768)]: {
      width: "100%"
    },
  },
  orangePanel: {
    backgroundColor: colors.orangeBackground,
    width: rem(731),
    height: "100vh",
    [breakpoint(768)]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
};

export const usePublicLayoutStyles = createUseStyles(styles);
