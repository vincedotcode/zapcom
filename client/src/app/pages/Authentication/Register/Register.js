import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Div from "@jumbo/shared/Div";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/appHelpers";
import { ASSET_IMAGES } from "../../../utils/constants/paths";
import Logo from "app/shared/Logo/Logo";
const Register = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Card sx={{ display: "flex", mb: 0, borderRadius: 0, height: "100%" }}>
        <CardMedia
          component="img"
          sx={{
            flexShrink: 0,
            flexBasis: "50%",
            display: { xs: "none", md: "block" },
          }}
          image={getAssetPath(`${ASSET_IMAGES}/apps/login-img.jpg`, "640x920")}
          alt="Contact Us"
        />
        <Div
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            justifyContent: "center",
          }}
        >
          <CardContent sx={{ p: "60px" }}>
            <Div sx={{display:'flex',justifyContent:'center'}}>
            <Logo/>
            </Div>
            
            <Typography
              sx={{ textAlign: "center" }}
              component={"h2"}
              variant="h1"
              mb={3}
            >
              Hello! Welcome Back.
            </Typography>
            <Box
              component="form"
              sx={{
                mx: -1,

                "& .MuiFormControl-root:not(.MuiTextField-root)": {
                  p: 1,
                  mb: 2,
                  width: { xs: "100%", sm: "50%" },
                },

                "& .MuiFormControl-root.MuiFormControl-fluid": {
                  width: "100%",
                },
              }}
              autoComplete="off"
            >
              <Div sx={{ mb: 3, mt: 1 }}>
                <TextField fullWidth id="firstname" label="Username" />
              </Div>
              <Div sx={{ mb: 3, mt: 1 }}>
                <TextField fullWidth name="email" label="Email" />
              </Div>
              <Div sx={{ mb: 2, mt: 1 }}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                />
              </Div>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Div sx={{ mb: 1 }}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                    />
                  </Div>
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign={"right"} variant={"body1"}>
                    <Link underline="none" href="#">
                      Forgot your password?
                    </Link>
                  </Typography>
                </Grid>
              </Grid>

              <Div sx={{ mx: 1, textAlign: "center" }}>
                <Button variant={"contained"} sx={{ width: "100%" }}>
                  Submit
                </Button>
              </Div>
              <Typography textAlign={"center"} variant={"body1"} my={2}>
                Already have an account?
                <Link underline="none" href="/login">
                  Login
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Div>
      </Card>
    </React.Fragment>
  );
};

export default Register;
