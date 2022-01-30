import { useState } from 'react';
import { makeStyles, Fab, Tooltip, Modal, Container, TextField } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
}));

function Add() {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip 
        title="Add" 
        aria-label="add" 
        onClick={() => setOpen(true)}>
          <Fab color="secondary" className={classes.fab}>
              <AddIcon />
          </Fab>
      </Tooltip>
      <Modal open={open}>
          <Container className={classes.container}>
              <form className={classes.form} autoComplete="off">
                 <div className={classes.item}>
                     <TextField id="standard-basic" label="Title" size="small" />
                 </div>
              </form>
          </Container>
      </Modal>
    </>
  );
}

export default Add;