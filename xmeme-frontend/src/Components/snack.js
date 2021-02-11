import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

export function MyApp(message,variant) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    console.log("clicked")
    enqueueSnackbar(message, { variant });
  };

  return (
    <React.Fragment>
      {handleClickVariant(variant)}
    </React.Fragment>
  );
}

export default function IntegrationNotistack(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp message={this.props.message} vari={this.props.vari} />
    </SnackbarProvider>
  );
}
