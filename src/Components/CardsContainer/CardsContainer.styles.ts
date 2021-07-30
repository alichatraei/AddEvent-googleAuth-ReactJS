import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            // fontFamily: theme.typography.fontFamily
        },
        container: {
            marginTop: '3rem',
            // direction: theme.direction
        }
    }),
);
export default useStyles;