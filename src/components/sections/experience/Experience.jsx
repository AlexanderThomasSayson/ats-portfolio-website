import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Experience = () => {
  const cards = [
    {
      description: (
        <>
          <span className="text-black-100">Payment Gateway</span> for a
          Microservices-Based Rewards Point System.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="flex justify-center py-10 px-4 bg-white">
      <div className="flex flex-col w-full max-w-6xl">
        {/* Header and Description */}
        <div className="flex flex-col items-center text-left mb-12">
          <h2 className="text-4xl font-semibold dark:text-gray-500 text-black mb-4">
            I've worked across diverse
            <span className="text-black"> projects and domains</span>, solving
            real-world problems and driving impact.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            <Typography variant="body2" color="text.secondary" fontSize="20px">
              <Box component="span" sx={{ color: "black" }}>
                Payment Gateway
              </Box>{" "}
              for a Microservices-Based{" "}
              <Box component="span" sx={{ color: "black" }}>
                Rewards Point System
              </Box>
              .
            </Typography>
          </Box>

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
            <Typography variant="body2" color="text.secondary" fontSize="20px">
              Contributed in a{" "}
              <Box component="span" sx={{ color: "black" }}>
                Ticketing System
              </Box>{" "}
              for a Dealer Network Development.
            </Typography>
          </Box>

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
            <Typography variant="body2" color="text.secondary" fontSize="20px">
              <Box component="span" sx={{ color: "black" }}>
                Voucher Redemption Module
              </Box>{" "}
              for a Microservices-Based{" "}
              <Box component="span" sx={{ color: "black" }}>
                Rewards Point System
              </Box>
              .
            </Typography>
          </Box>

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
            <Typography variant="body2" color="text.secondary" fontSize="20px">
              <Box component="span" sx={{ color: "black" }}>
                Automated log retrieval
              </Box>{" "}
              and{" "}
              <Box component="span" sx={{ color: "black" }}>
                data analysis system
              </Box>{" "}
              for reward disbursement tracking.
            </Typography>
          </Box>

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
            <Typography variant="body2" color="text.secondary" fontSize="20px">
              Implements{" "}
              <Box component="span" sx={{ color: "black" }}>
                automated document processing
              </Box>{" "}
              and{" "}
              <Box component="span" sx={{ color: "black" }}>
                data extraction
              </Box>{" "}
              from unstructured content.
            </Typography>
          </Box>

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
            <Typography variant="body2" color="text.secondary" fontSize="20px">
              <Box component="span" sx={{ color: "black" }}>
                Event creation system
              </Box>{" "}
              and rendering{" "}
              <Box component="span" sx={{ color: "black" }}>
                {" "}
                for US based clients.
              </Box>{" "}
            </Typography>
          </Box>
        </div>
      </div>
    </section>
  );
};
