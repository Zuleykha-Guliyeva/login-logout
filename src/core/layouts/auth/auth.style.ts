import {createUseStyles} from 'react-jss';
import { rem } from '../../../assets/styles/abstracts/functions';
import colors from '../../../assets/styles/abstracts/color';
import fonts from '../../../assets/styles/abstracts/fonts';

const styles = {
  auth: {
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
  orangeImg: {
    position: "absolute",
    left: rem(181),
    top: rem(220),
  },
  lightPanel: {
    padding: 0,
  },
  lightImg: {
    position: "absolute",
    top: rem(164),
    right: rem(61),
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
  },
};


export const useAuthStyles = createUseStyles(styles);
