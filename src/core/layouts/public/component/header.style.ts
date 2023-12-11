import { rem } from "../../../../assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const style = {
    headerLogo: {
        with : rem(100),
        heigth:rem(30)
    }
};
export const useHeaderStyles = createUseStyles(style);