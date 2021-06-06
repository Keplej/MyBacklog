import { Button, CardMedia, FormControl, Grid, InputLabel, Link, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ParticleBackground from '../ParticlesConfig/ParticleBackground';


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    cardMedia: {
        paddingTop: '75%', 
    },    
    buttonEdit: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
        color: '#fff',
        backgroundColor: '#9cb2f0',
        '&:hover': {
            background: "#6581ce",
         },
      },
  }));
function CompletedDetail() {

    const list = useSelector(store => store.completedDetailReducer);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image_url, setImage_Url] = useState('');
    const [status, setStatus] = useState(0);
    const history = useHistory();
    const [open, setOpen] = React.useState(false);



    const getStatus = useSelector((store) => store.statuslistReducer);

    const classes = useStyles();
    

    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
        setImage_Url(list.image_url);
        setName(list.name);
        setDescription(list.description);
        setStatus(list.status);
    }

    const saveEdit = () => {
        const updatedCompleted = {
            id: list.id,
            name: name,
            image_url: image_url,
            description: description,
            status: status,
        }
        console.log('updated backlog detail:', updatedCompleted);
        dispatch({type: 'UPDATE_COMPLETED', payload: updatedCompleted});
 

        setEditMode(false)
        history.push('/completed');
    }

    const {id} = useParams(); 
    

    useEffect(() => {
        console.log('In ueseEffect param:', id);
        dispatch({type: 'FETCH_COMPLETED_DETAIL', payload: id})
        dispatch({type: 'FETCH_STATUS', payload: id})
    }, [])

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };


    return (
      <div>
        <ParticleBackground />
        <main className={classes.layout} >
        <Paper className={classes.paper}>
        <CardMedia  image={list.image_url} className={classes.cardMedia} />
            <br />
            <Typography component="h1" variant="h4" align="center">
            {list.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
            {/* Edit {list.name} */}
            </Typography>
            <Grid container spacing={3}>
            {list && list.name && editMode ?
                <Grid item xs={12}>
                <TextField
                    label="Game Name"
                    value={name}
                    type="text"
                    fullWidth
                    onChange={(event) => setName(event.target.value)}
                />
                </Grid>
                :
                <Grid item xs={12}>
                {/* <Typography variant="h5" gutterBottom>Game: {list.name}</Typography> */}
                </Grid>
                }
                {list && list.image_url && editMode ?
                <Grid item xs={12}>
                <TextField
                    label="Game Name"
                    value={image_url}
                    type="text"
                    fullWidth
                    onChange={(event) => setImage_Url(event.target.value)}
                />
                </Grid>
                :
                <Grid item xs={12}>
                {/* <Typography variant="h5" gutterBottom>Game: {list.name}</Typography> */}
                </Grid>
                }
                {list && list.description && editMode ?
                <Grid item xs={12}>
                <TextField
                    multiline={true}
                    rows={17}
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    label="Game Description"
                    fullWidth
                    autoComplete="shipping address-line2"
                />
                </Grid>
                :
                <Grid item xs={12}>
                    <Typography>{list.description}</Typography>
            </Grid>
            }
            {list && list.status && editMode ?
                <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                    <InputLabel>Status</InputLabel>
                        <Select
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={status.id}
                        name='status'
                        onChange={(event) => setStatus(event.target.value)}
                        >
                        {getStatus.map((game) => {
                        return (
                            <MenuItem key={game.id} value={game.id}>
                            {game.name}
                            </MenuItem>
                        )
                        })}
                        </Select>
                    </FormControl>
                </Grid>
                :
                <div>
                    {/* <span>{list.status}</span> */}
                </div>
                }
                {editMode === false &&
                <Button variant="contained" fullWidth className={classes.buttonEdit} onClick={handleEdit}>Edit</Button>
                }
                {editMode &&
                <Button variant="contained" color="primary" fullWidth fullWidth className={classes.buttonEdit} onClick={saveEdit}>Save</Button>
                }
            </Grid>
            <Button variant="contained" color="secondary" fullWidth className={classes.button} onClick={() => {history.push('/current')}}>Back</Button>
        </Paper>
        </main>
      </div>
    )
}

export default CompletedDetail;
