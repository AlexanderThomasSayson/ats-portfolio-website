import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

export const Resume = () => {
  return (
    <section id="resume" className="bg-black flex justify-center py-10 px-4">
      <div className="flex flex-col w-full max-w-6xl">
        <Box
          component="section"
          sx={{
            p: 4,
            borderRadius: "10px",
            backgroundColor: "#161617",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
            Resume
          </Typography>
          <Typography sx={{ mt: 1, color: "#ccc" }}>
            Take a closer look at my professional experiences.
          </Typography>

          <a
            href="/SAYSON_ALEXANDER_THOMAS-RESUME.pdf" // Ensure this file exists in your public folder
            download
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                backgroundColor: "white",
                color: "black",
                borderRadius: "200px",
                height: "65px",
              }}
            >
              View Resume
            </Button>
          </a>
        </Box>
      </div>
    </section>
  );
};
