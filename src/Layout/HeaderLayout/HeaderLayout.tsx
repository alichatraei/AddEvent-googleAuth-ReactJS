import React from 'react'
import {
    AppBar,
    Toolbar, IconButton, Typography,
} from '@material-ui/core';
import { PersonOutlineOutlined } from '@material-ui/icons'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            direction: theme.direction,
            backgroundColor: "#ffffff",
            flexGrow: 1,
            color: '#000000',
            fontFamily: theme.typography.fontFamily
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);
const HeaderLayout = () => {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        فرانش
                    </Typography>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <PersonOutlineOutlined />
                        </IconButton>

                    </div>

                </Toolbar>
            </AppBar>
        </header>
    )
}

export default HeaderLayout
