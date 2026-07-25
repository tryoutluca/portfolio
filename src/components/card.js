import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    borderRadius: 5,
    boxShadow: 500,
    p: 4,
    color: 'var(--text)',
  };

export default function ImgMediaCard({ image, title, description, Popuptitle ,Popuptext}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 

  return (
      <Card sx={{ maxWidth: 345, marginY: 3, background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'none' }}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          sx={{height: 180}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', textAlign: 'left' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' size="small" hover className='ButtonCard' sx={{borderColor: '#604d0d', color: 'white'}} onClick={handleOpen}>
              Erfahre mehr
          </Button>
        </CardActions>
        <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
                  <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'var(--text)' }}>
                      {Popuptitle}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2, whiteSpace: 'pre-line', color: 'var(--text-muted)' }}>
                      {Popuptext}
                  </Typography>
                  </Box>
              </Modal>
      </Card>
  );
}