import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="text-center z-10 px-4 flex flex-col items-center max-w-2xl">
        <Avatar
          alt="Alexander Thomas Sayson"
          src="/images/alexander.jpg"
          sx={{ width: 160, height: 160, mb: 4 }}
        />

        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: "linear-gradient(to right, #ffffff, #cccccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          I'm Alexander.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            background: "linear-gradient(to right, #ffffff, #cccccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Software Development Engineer.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#ddd",
            maxWidth: "600px",
            mt: 1.5,
          }}
        >
          This portfolio showcases my full-stack expertise in building scalable
          backends and responsive front-end interfaces.
        </Typography>
        <a href="#about" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{
              mt: 2.5,
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                borderColor: "#ccc",
                color: "#ccc",
              },
            }}
          >
            Show Portfolio
          </Button>
        </a>
      </div>
    </section>
  );
};
