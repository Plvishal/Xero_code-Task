// components/SignupForm.js
'use client';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {
  Google as GoogleIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-white p-5">
      <div className="bg-white p-8 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-md w-[96%] md:w-[70%] flex gap-8">
        <div className="w-full md:w-[48%] ">
          <h1 className="text-2xl font-bold mb-6 text-center">Hello!</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Email-id"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mb-4"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <p className="text-center mb-2">OR</p>
          <div className="flex items-center justify-between gap-2 mb-4">
            <Button
              variant="outlined"
              endIcon={<GoogleIcon />}
              fullWidth
              className="text-sm"
            >
              Sign Up With Google
            </Button>
            <Button
              variant="outlined"
              endIcon={<GitHubIcon />}
              fullWidth
              className="text-sm"
            >
              Sign Up With Github
            </Button>
          </div>
          <p className="text-center">
            Already have an account?
            <a href="#" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
        <hr className="w-[1px] min-h-[570px]  border bg-black hidden md:block"></hr>
        <div className="hidden md:block"></div>
      </div>
      <hr />
    </div>
  );
}
