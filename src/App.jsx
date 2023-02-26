import React, { useState } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import StarsIcon from '@mui/icons-material/Stars';
import ChairIcon from '@mui/icons-material/Chair';

import {
  Box,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  IconButton,
  Button,
  Modal
} from '@mui/material';
import './App.css';

const smiles = [AdbIcon, AndroidIcon, AppleIcon, StarsIcon, ChairIcon];

function getWinnerSmile(count) {
  const max = Math.max(...count);

  return count
    .map((item, index) => {
      if (item === max) {
        return smiles[index];
      }
      return null;
    })
    .filter((winner) => winner);
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

function App() {
  const [clickCount, setClickCount] = useState(
    new Array(smiles.length).fill(0)
  );
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const winnerSmile = getWinnerSmile(clickCount);

  return (
    <Box textAlign={'center'}>
      <Typography padding={1} variant="h5" component="div">
        Smiles counter
      </Typography>

      <List>
        {smiles.map((Smile, index) => (
          <ListItem key={index} sx={{ justifyContent: 'center' }}>
            <ListItemIcon>
              <IconButton
                onClick={() => {
                  setClickCount((prevState) => {
                    const nextState = [...prevState];
                    nextState[index] = prevState[index] + 1;
                    return nextState;
                  });
                }}
              >
                <Smile />
              </IconButton>
            </ListItemIcon>

            <ListItemText
              primary={clickCount[index]}
              sx={{ maxWidth: '50px', textAlign: 'center' }}
            />
          </ListItem>
        ))}
      </List>
      <Button onClick={handleOpen} variant="outlined">
        Show Results
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} textAlign="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Winner smile(s)!
          </Typography>
          {winnerSmile.map((Smile) => (
            <Smile key={crypto.randomUUID()} />
          ))}
        </Box>
      </Modal>
    </Box>
  );
}

export default App;
