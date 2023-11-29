import colors from "../../assets/styles/abstracts/color";
import fonts from "../../assets/styles/abstracts/fonts";
import { rem } from "../../assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
  },
  title: {
    fontSize: rem(50),
    fontWeight: "500",
    lineHeight: rem(82.5),
    fontFamily: "Poppins, sans-serif",
    marginBottom: rem(36),
  },
  subtitle: {
    fontFamily: fonts.font,
    fontWeight: 400,
    fontSize: rem(20),
    lineHeight: rem(30),
    margin: "0",
  },
  panel: {
    width: rem(539),
    height: rem(741),
  },
  panelCard: {
    borderRadius: rem(40),
    width: rem(539),
    height: rem(741),
    paddingLeft: rem(20),
    paddingRight: rem(20),
    paddingTop: rem(26),
    textAlign: "center",
  },
  marginNone: {
    marginBottom: 0,
  },
  inputLabel: {
    fontSize: rem(16),
    fontFamily: fonts.font,
    fontWeight: 400,
    linHeight: rem(24),
  },
  inputClass: {
    height: rem(55),
    borderRadius: rem(9),
    marginBottom: rem(11),
  },
  inputClass50: {
    height: rem(55),
    borderRadius: rem(9),
  },
  forgotClass: {
    fontSize: rem(13),
    fontFamily: fonts.font,
    fontWeight: 400,
    linHeight: rem(19.5),
    color: colors.orangeButtonColor,
    display: "inline-block",
    marginBottom: rem(33),
  },
  signButon: {
    height: rem(55),
    borderRadius: rem(9),
    backgroundColor: colors.orangeButtonColor,
    color: colors.light,
    fontSize: rem(16),
    fontFamily: fonts.font,
    fontWeight: 500,
    linHeight: rem(24),
    marginBottom: rem(33),
  },
  signUpButtonColor: {
    backgroundColor: colors.signUpColor,
    color: colors.orangeButtonColor,
  },
  orClass: {
    color: colors.orColor,
    fontSize: rem(16),
    fontFamily: fonts.font,
    fontWeight: 400,
    linHeight: rem(24),
    display: "inline-block",
    marginBottom: rem(33),
  },
};

export const useLoginStyles = createUseStyles(styles);
