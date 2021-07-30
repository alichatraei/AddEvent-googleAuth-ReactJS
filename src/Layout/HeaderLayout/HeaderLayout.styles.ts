import { makeStyles, createStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            direction: theme.direction,
            backgroundColor: "#ffffff",
            flexGrow: 1,
            color: '#000000',
            fontFamily: theme.typography.fontFamily,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);
export default useStyles;