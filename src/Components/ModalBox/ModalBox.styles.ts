import { makeStyles, createStyles, Theme } from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            "& *": {
                direction: theme.direction,
            }
        },
        paper: {
            width: '30rem',
            height: 'auto',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '10px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            outline: 'none',
            textAlign: 'center',
            "& #outlined-basic": {
                textAlign: 'rtl',
            },
            "& #headerTypography": {
                margin: '1rem 0'
            }
        },
        gridContainer: {
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '70%',
            margin: 'auto'
        }
        , datePicker: {
            borderRadius: '8px',
            padding: '1rem',
            color: '#000100'
        }
    }),
);
export default useStyles