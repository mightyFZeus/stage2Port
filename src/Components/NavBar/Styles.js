import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appbar:{
   
   backgroundColor:'#ffffff'
  },
  menu:{
    marginLeft: "auto",
    
  },
  linkColor:{
    color:'black',
    textDecoration:"none"
  }
  
}));