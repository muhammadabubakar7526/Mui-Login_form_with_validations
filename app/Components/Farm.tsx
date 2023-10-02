'use client'

import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function Farm() {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit,formState , reset} = form;
  const {errors} =  formState

  const onSubmit = (data: FormValues) => {
    // Display the data in an alert
    alert(`Your Form Submit:\n${JSON.stringify(data, null, 2)}`);
  
    // Log the data to the console
    console.log(data);
  
    // Reset the form
    reset();
  };
  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          background: "white",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        py={20}
        px={2}
      >
        <h1 style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
          Login Page
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width={400}
            gap={2}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"

              fullWidth
            //   {...register("email",{ required:"Email is required"})}
            {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Regular expression for email validation
                  message: "Invalid email address",
                },
              })}
              error= {!!errors.email}
              helperText={errors.email?.message}
            />
            
            <TextField
              id="outlined-basic"
              label="Password"
              type="Password"
              variant="outlined"
              fullWidth
            //   {...register("password", {
            //     required: "Password is required",
            //     minLength: {
            //       value: 8,
            //       message: "Password must be at least 8 characters long",
            //     },
            //   })}
            {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[!@#$%^&*])/, // Requires at least one special character
                  message: "Password must contain at least one special character",
                },
              })}
              error= {!!errors.password}
              helperText={errors.password?.message}

            />
          </Box>
          {/* <Button variant="contained" color="success">
          <Typography color="black">Primary</Typography>
        </Button> */}
          <button
            type="submit"
            style={{
              border: "1px solid ",
              padding: "5px 30px",
              borderRadius: "8px",
              background: "black",
              width: "100%",
            }}
          >
            <Typography variant="h5" color="white">
              Submit
            </Typography>
          </button>
        </form>
      </Box>
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </>
  );
}
