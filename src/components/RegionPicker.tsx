import React from "react";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import "../App.css";
import AfricaImage from "../assets/Africa_Flag_Map.png";
import AmericaImage from "../assets/Americas.jpg";
import AsiaImage from "../assets/247cadcddb64a5179fd614b4756f1be7.jpg";
import EuropeImage from "../assets/9d4df8c7766380987514b3298bc8fda3.png";

enum Regions {
  AFRICA = "africa",
  AMERICAS = "americas",
  ASIA = "asia",
  EUROPE = "europe",
}

interface RegionPickerProps {
  onRegionPickHandler: (region: Regions) => void;
}

const regions = [
  { image: AfricaImage, title: "Africa" },
  { image: AmericaImage, title: "Americas" },
  { image: AsiaImage, title: "Asia" },
  { image: EuropeImage, title: "Europe" },
];

const RegionPicker: React.FC<RegionPickerProps> = ({ onRegionPickHandler }) => {
  return (
    <CssBaseline>
      <Container>
        <Box
          sx={{
            bgcolor: "#fff",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <Grid container spacing={3}>
            {regions.map((region, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s",
                    width: "30vw",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() =>
                    onRegionPickHandler(
                      Regions[
                        region.title.toUpperCase() as keyof typeof Regions
                      ]
                    )
                  }
                >
                  <img
                    src={region.image}
                    alt={region.title}
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="h6" style={{ marginTop: "12px" }}>
                    {region.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </CssBaseline>
  );
};

export default RegionPicker;
