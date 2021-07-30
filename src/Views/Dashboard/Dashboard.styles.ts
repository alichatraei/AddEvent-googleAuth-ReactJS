import { makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
    createStyles({
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
        }
    }))
export default useStyles