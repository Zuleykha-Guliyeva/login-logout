import colors from "../../assets/styles/abstracts/color";
import fonts from "../../assets/styles/abstracts/fonts";
import { rem } from "../../assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles = {
  title: {
    fontSize: rem(55),
    fontWeight: 500,
    lineHeight: rem(82),
    fontFamily: "Poppins,sans-serif",
    textAlign: "left",
    marginBottom: rem(45),
  },

  subtitle: {
    fontFamily: fonts.font,
    fontWeight: 400,
    fontSize: rem(20),
    lineHeight: rem(30),
    margin: "0",
    textAlign: "left",
  },
  sigupMarginTop: {
    marginTop: rem(52)
  },
  accountSpan: {
    display: "block",
    textAling: "left",
    color: colors.accountSpanColor,
    fontFamily: fonts.font,
    fontSize: rem(13),
    fontWeight: 400,
    lineHeight: rem(20)
  },
  accountSign: {
    display: "block",
    textAling: "left",
    color: colors.accountSignColor,
    fontFamily: fonts.font,
    fontSize: rem(13),
    fontWeight: 400,
    lineHeight: rem(20)
  }
};

export const useSignupStyles = createUseStyles(styles);
