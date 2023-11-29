import { createUseStyles } from "react-jss";
import { rem } from "../../assets/styles/abstracts/functions";
import colors from "../../assets/styles/abstracts/color";

const styles = {
  publicClasses: {
    width: rem(1400),
    height: "100vh",
    margin: "0 auto",
    backgroundColor: colors.layoutBackground,
    position: "relative",
  },
  orangePanel: {
    backgroundColor: colors.orangeBackground,
    width: rem(731),
    height: "100vh",
  },
};

export const usePublicLayoutStyles = createUseStyles(styles);
