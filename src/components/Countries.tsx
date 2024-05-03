import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

interface Language {
  [key: string]: string;
}

interface Country {
  name: {
    common: string;
  };
  capital: string;
  population: number;
  languages: Language;
  region: string;
  flags: {
    png: string;
  };
}

interface CountriesProps {
  clearSelectedRegion: () => void;
  selectedRegion: string | null;
}

const Countries: React.FC<CountriesProps> = ({
  clearSelectedRegion,
  selectedRegion,
}) => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [selectedRegion]);

  return (
    <Container fixed>
      {loading ? (
        <div>
          <LinearProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={3} columns={12} sx={{ margin: "20px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              color="primary"
              variant="contained"
              onClick={clearSelectedRegion}
            >
              Pick another region
            </Button>
          </Grid>
          {data.map((country: Country) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={country.name.common}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia component="img" image={country.flags.png} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Capital: ${country.capital}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Population: ${country.population}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Languages: ${Object.values(country.languages).join(
                      ", "
                    )}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Region: ${country.region}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
