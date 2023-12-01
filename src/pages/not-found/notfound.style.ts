import { createUseStyles } from "react-jss";
import colors from "../../assets/styles/abstracts/color";
import { rem } from "../../assets/styles/abstracts/functions";
import { breakpoint } from "../../assets/styles/abstracts/mixins";

const styles = {
  page: {
    height: rem(450),
    width: rem(900),
    display: "flex",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    borderRadius: rem(20),
    fontSize: rem(50),
    [breakpoint(768)]: { width: rem(326) },
  },
};

export const useNotfoundStyles = createUseStyles(styles);
