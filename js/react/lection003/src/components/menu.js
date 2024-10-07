import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Nav() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>Main</Button>
      <Button>Catalogue</Button>
      <Button>Contacts</Button>
    </ButtonGroup>
  );
}