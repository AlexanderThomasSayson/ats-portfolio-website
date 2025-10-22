import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export const Cards = ({ image, alt, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#080808",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#1D1D1F",
          boxShadow: "0 0 1px 1px rgba(255, 255, 255, 0.3)",
          cursor: "pointer",
        },
      }}
    >
      <CardActionArea>
        <CardContent>
          {/* Logo Image (centered) */}
          <Box sx={{ display: "flex", justifyContent: "left", mb: 1 }}>
            <img
              src={image}
              alt={alt}
              style={{ height: 40, objectFit: "contain" }}
            />
          </Box>

          {/* Title below logo */}
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ color: "gray", fontWeight: "bold", mb: 1 }}
          >
            {title}
          </Typography>

          {/* Description below title */}
          <Typography variant="body2" sx={{ color: "gray", textAlign: "left" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
