import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const DescriptionBox = ({ description }) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "#f9f9f9",
        fontSize: "0.95rem",
        color: "#333",
        height: "100%",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};
