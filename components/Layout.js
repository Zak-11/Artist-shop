import React, {useContext} from "react";
import Head from "next/head";
import NextLink from 'next/link'
import {
    AppBar,
    Container,
    CssBaseline,
    ThemeProvider,
    Link,
    Toolbar,
    Typography,
    Switch, Badge, MenuItem, Menu, Button, createTheme,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import {Store} from "../utils/Store";
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';




export default function Layout({title, description, children}) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { darkMode, cart, userInfo } = state;
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#765285',
            },
            secondary: {
                main: '#709FB0',
            },
        },


    })
    const classes = useStyles();
    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
        const newDarkMode = !darkMode;
       Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const loginClickHandler = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const loginMenuCloseHandler = (e, redirect) => {
        setAnchorEl(null);
        if (redirect) {
            router.push(redirect);
        }
    };
    const logoutClickHandler = () => {
        setAnchorEl(null);
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('userInfo');
        Cookies.remove('cartItems');
        router.push('/');
    };
    return (
        <div>
            <Head>
                <title>{title ? `${title} -Christina Turdo
                                    Art Store` : 'Christina Turdo Art Store'}</title>
                {description && <meta name="description" content={description}/>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography className={classes.brand}>
                                    Christina Turdo Art Store
                                </Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}/>
                        <div>
                            <Switch
                                checked={darkMode}
                                onChange={darkModeChangeHandler}
                            />
                            <NextLink href="/cart" passHref>
                                <Link >
                                    {cart.cartItems.length > 0 ? (
                                        <Badge
                                            color="secondary"
                                            badgeContent={cart.cartItems.length}
                                        >
                                            Cart
                                        </Badge>
                                    ) : (
                                        'Cart'
                                    )}
                                </Link>
                            </NextLink>
                            {userInfo ? (
                                <>
                                    <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={loginClickHandler}
                                        className={classes.navbarButton}
                                    >
                                        {userInfo.name}
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={loginMenuCloseHandler}
                                    >
                                        <MenuItem
                                            onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                                        >
                                            Profile
                                        </MenuItem>
                                        <MenuItem
                                            onClick={(e) =>
                                                loginMenuCloseHandler(e, '/order-history')
                                            }
                                        >
                                            Order History
                                        </MenuItem>
                                        {userInfo.isAdmin && (
                                            <MenuItem
                                                onClick={(e) =>
                                                    loginMenuCloseHandler(e, '/admin/dashboard')
                                                }
                                            >
                                                Admin Dashboard
                                            </MenuItem>
                                        )}
                                        <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <NextLink href="/login" passHref>
                                    <Link>Login</Link>
                                </NextLink>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>{children}</Container>
                <footer className={classes.footer}>
                    <Typography><a>All rights reserved. © 2021 Christina Turdo Art Store.</a></Typography>
                </footer>
            </ThemeProvider>
        </div>
    );
}