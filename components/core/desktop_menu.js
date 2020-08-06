import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { signout } from '../../actions/auth';
import Router, { useRouter } from 'next/router';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handle_sign_out = () => {
     signout(() => {
       Router.push('/');
       return handleClose()
     })
  }

  return (
    <div>
      <Button className="dk-header-menu-btn-inner" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handle_sign_out}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
