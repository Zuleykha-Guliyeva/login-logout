import { createUseStyles } from "react-jss"
import { rem } from "../../assets/styles/abstracts/functions";
import colors from "../../assets/styles/abstracts/color";
import fonts from "../../assets/styles/abstracts/fonts";
import { breakpoint } from "../../assets/styles/abstracts/mixins";

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
    [breakpoint(768)]: {
      width: rem(326),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  title: {
    fontWeight: 400,
    fontSize: rem(55),
    lineHeight: rem(82),
    fontFamily: fonts.fontBold,
    [breakpoint(768)]: {
      fontSize: rem(40),
      lineHeight: rem(60)
    },
  },
  userTitleColor: {
    color: colors.orangeButtonColor,
  },
  logoutButton: {
    backgroundColor: colors.orangeButtonColor,
    color: colors.light,
    borderRadius: rem(10),
    boxShadow: "0px 4px 19px 0px #7793414D",
    marginTop: rem(85),
    height: rem(54),
    width: rem(451),
    fontSize: rem(16),
    fontWeight: 500,
    fontFamily: fonts.font,
    [breakpoint(768)]: { width: rem(272) },
  },
};

export const useUserdetailStyles = createUseStyles(styles)