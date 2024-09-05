import React from 'react';
import { Button, CheckboxIcon, VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react'

const VisibilityHidden = () => {
  return (
    <>
      <Example/>
    </>
  );
}

export default VisibilityHidden;

function Example() {
    return (
      <Button>
        <VisuallyHidden defaultChecked>Checkmark</VisuallyHidden>
        <CheckboxIcon />
      </Button>
    )
  }
