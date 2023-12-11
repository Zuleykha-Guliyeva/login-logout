import colors from "../../assets/styles/abstracts/color";
import fonts from "../../assets/styles/abstracts/fonts";
import { rem } from "../../assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";
import { breakpoint } from "../../assets/styles/abstracts/mixins";

const styles = {
  page: {
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
    lineHeight: rem(82),
    fontWeight: 500,
    fontFamily: fonts.fontBold,
    marginBottom: rem(36),
    [breakpoint(768)]: { fontSize: rem(40), fontWeight: 500 },
  },
  subtitle: {
    fontFamily: fonts.font,
    fontWeight: 400,
    fontSize: rem(20),
    lineHeight: rem(30),
    margin: "0",
    [breakpoint(768)]: { fontSize: rem(16), fontWeight: 400 },
  },
  subtitleSite: {
    fontFamily: fonts.font,
    fontWeight: 400,
    fontSize: rem(20),
    lineHeight: rem(30),
    margin: "0",
    [breakpoint(768)]: {
      fontSize: rem(16),
      fontWeight: 400,
      color: colors.orangeButtonColor,
    },
  },
  eyeIcon: {
    position: "absolute",
    top: "50%",
    right: rem(62),
    fontSize: rem(22),
    color: colors.orColor,
    [breakpoint(768)]: { display: "none" },
  },
  panel: {
    width: rem(539),
    height: rem(741),
    [breakpoint(768)]: { width: rem(326) },
  },
  panelCard: {
    borderRadius: rem(40),
    width: rem(539),
    height: rem(741),
    paddingLeft: rem(20),
    paddingRight: rem(20),
    paddingTop: rem(26),
    textAlign: "center",
    [breakpoint(768)]: {
      width: rem(326),
      paddingLeft: rem(0),
      paddingRight: rem(0),
    },
  },
  marginNone: {
    marginBottom: 0,
  },
  inputLabel: {
    fontSize: rem(16),
    fontFamily: fonts.font,
    fontWeight: 400,
    linHeight: rem(24),
    [breakpoint(768)]: { fontSize: rem(14), linHeight: rem(21) },
  },
  inputClass: {
    height: rem(55),
    borderRadius: rem(9),
    marginBottom: rem(11),
    transition: "border-color 0.3s ease-in-out",
    "&:focus": {
      border: `1px solid #4285F4`,
      boxShadow: "0px 4px 4px 0px #00000040",
    },
    [breakpoint(768)]: {
      "&:focus": {
        border: `1px solid ${colors.orangeBackground}`,
        boxShadow: "0px 4px 4px 0px #00000040",
      },
      "&:hover": {
        border: `1px solid ${colors.orangeBackground}`,
      },
    },
  },
  inputClass50: {
    height: rem(55),
    borderRadius: rem(9),
    transition: "border-color 0.3s ease-in-out",
    "&:focus": {
      border: `1px solid #4285F4`,
      boxShadow: "0px 4px 4px 0px #00000040",
    },
    [breakpoint(768)]: {
      "&:focus": {
        border: `1px solid ${colors.orangeBackground}`,
        boxShadow: "0px 4px 4px 0px #00000040",
      },
      "&:hover": {
        border: `1px solid ${colors.orangeBackground}`,
      },
    },
  },
  forgotClass: {
    fontSize: rem(13),
    fontFamily: fonts.font,
    fontWeight: 400,
    linHeight: rem(19.5),
    color: colors.forgotColor,
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
  signInButton: {
    [breakpoint(768)]: { display: "none" },
  },
  signInButtonMobile: {
    display: "none",
    [breakpoint(768)]: { display: "block" },
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
    [breakpoint(768)]: { display: "none" },
  },
};

export const useLoginStyles = createUseStyles(styles);
