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
        },
        container: {
            marginTop: '3rem',
        }
    }),
);
export default useStyles;