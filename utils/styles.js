import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#351F39',

        '& a': {
            color: '#ffff',
            marginLeft: 10,

        },
    },
    brand: {
        fontWeight: 'bold'  ,
        fontSize: '1.5rem',

    },
    grow: {
       flexGrow: 1,
    },
    main: {
        minHeight:'80vh'

    },
    footer: {
        backgroundColor:'#351F39',
        height: 80,
        color: '#ffff',
         textAlign: 'center',
        marginTop: 80,

  },
    section: {
      margin: 20,

    },
    form: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
    },
    navbarButton: {
        color: '#ffffff',
        textTransform: 'initial',
    },
    transparentBackground: {
        backgroundColor: 'transparent',
    },
    error: {
        color: '#f04040',
    },
    fullWidth: {
        width: '100%',
    },

});

export default useStyles