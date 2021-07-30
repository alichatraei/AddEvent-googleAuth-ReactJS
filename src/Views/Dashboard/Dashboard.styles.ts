import { makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative'
        },
        container: {
            marginTop: "2rem",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
        },
        grid: {
            padding: '1rem',
            width: "100%",
            height: 'auto'
        },
        paper: {
            width: "100%",
            height: "100%",
            padding: '3rem'
        },
        fab: {
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            zIndex: 12
        }
    }))
export default useStyles