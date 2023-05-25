import { Box, Typography, IconButton, InputAdornment } from "@mui/material";
import * as React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type LoginFormProps = {
  onSubmit: (user: string, password: string) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(user, password);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'black',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="User"
          label="User"
          type="User"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          sx={{ width: '100%', mt: 4 }}
        />
        <TextField
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ width: '100%', mt: 4 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 4, borderRadius: "30px", width: "50%", left: "70px" }}>
          <Typography sx={{ color: 'black' }}>Login</Typography>
        </Button>
      </form>
      <img
        src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/34758/image/Cannabis%20Logo%20Generator%20copy.jpg"
        alt="Imagen"
        style={{
          width: '100%',
          maxWidth: '150px',
          height: 'auto',
        }}
      />
    </Box>
  );
};

type User = {
  user: string;
  password: string;
};

const users: User[] = [
  {
    user: 'user123',
    password: 'password1',
  },
  {
    user: 'user321',
    password: 'password2',
  },
];

const Login = () => {
  const handleLogin = (user: string, password: string) => {
    const foundUser = users.find((u) => u.user === user && u.password === password);
    if (foundUser) {
      // Do something on successful login
      console.log('Successful login');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85%',
      }}
    >
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};

export default Login;