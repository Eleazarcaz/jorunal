import { Google } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#DBDFFD',
        padding: 4,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          color="primary"
          variant="h5"
          fontWeight={600}
          fontSize={24}
          textAlign="center"
          sx={{
            mb: 2,
          }}
        >
          ¡Bienvenido de Vuelta!
        </Typography>
        <Typography
          color="primary"
          variant="h6"
          fontWeight={400}
          lineHeight={1.3}
          textAlign="center"
          sx={{
            mb: 1,
          }}
        >
          Bienvenido de vuelta, ingresa tus datos
        </Typography>

        <form>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
          sx={{
            mb: 2,
          }}
        >
          <Typography
            textTransform="capitalize"
            fontWeight={500}
            letterSpacing={1}
          >
            ingresa
          </Typography>
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          startIcon={<Google />}
          disableElevation
        >
          <Typography
            textTransform="capitalize"
            fontWeight={500}
            letterSpacing={1}
            color="text"
          >
            ingresa con google
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
