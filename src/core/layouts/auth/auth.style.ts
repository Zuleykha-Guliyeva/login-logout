import {createUseStyles} from 'react-jss';
import { rem } from '../../../assets/styles/abstracts/functions';
import colors from '../../../assets/styles/abstracts/color';
import fonts from '../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../assets/styles/abstracts/mixins';

const styles = {
  auth: {
    width: "100%",
    display: "flex",
    position: "relative",
    backgroundColor: colors.layoutBackground,
  },
  orangePanel: {
    position: "relative",
    backgroundColor: colors.orangeBackground,
    width: "50%",
    height: "100vh",
    [breakpoint(768)]: { width: "100%" },
  },
  orangeImgPanel: {
    position: "absolute",
    left: "25%",
    top: "25%",
    [breakpoint(768)]: { display: "none" },
  },
  lightImgPanel: {
    position: "absolute",
    top: rem(225),
    right: '7%',
    [breakpoint(768)]: { display: "none" },
  },
  orangeLogo: {
    color: colors.orangeColor,
    fontSize: rem(20),
    fontWeight: "600",
    lineHeight: rem(30),
    fontFamily: fonts.font,
    textDecoration: "none",
    display: "inline-block",
    width: rem(100),
    height: rem(30),
    marginTop: rem(31),
    marginLeft: rem(42),
    [breakpoint(768)]: {
      fontSize: rem(18),
      marginTop: rem(18),
      paddingBottom: rem(33)
    },
  },
};


export const useAuthStyles = createUseStyles(styles);
