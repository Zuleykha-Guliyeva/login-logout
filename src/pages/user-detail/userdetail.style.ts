import { createUseStyles } from "react-jss"
import { rem } from "../../assets/styles/abstracts/functions";
import colors from "../../assets/styles/abstracts/color";

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: colors.white,
    height: rem(741),
    width: rem(1224),
    borderRadius: rem(40),
    position: "absolute",
    top: rem(90),
    left: rem(113),
    zIndex: "1",
    boxShadow: "0px 4px 35px 0px #00000014",

  },
  logoutButton: {
    backgroundColor: colors.orangeButtonColor,
    color: colors.light
  }
};

export const useUserdetailStyles = createUseStyles(styles)