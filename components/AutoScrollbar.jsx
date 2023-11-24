// eslint-disable-next-line import/no-unresolved
import { v4 as uuidv4 } from "uuid";
import { Box, Typography, IconButton } from "@mui/material";

import bitfins from "../assets/bitfins.png";
import crypto from "../assets/crypto.png";
import fest from "../assets/fest.png";
import hosky from "../assets/hosky.png";
import man from "../assets/man.png";
import pendulum from "../assets/pendulum.png";

const apparel = [
  { logo: hosky, url: "https://bravaland.com/collections/hosky" },
  { logo: bitfins, url: "https://bravaland.com/collections/bitfins" },
  { logo: crypto, url: "https://bravaland.com/collections/cryptoraggies" },
  { logo: fest, url: "https://bravaland.com/collections/future-fest" },
  { logo: man, url: "https://bravaland.com/collections/vudu-brigada" },
  { logo: pendulum, url: "https://bravaland.com/collections/pendulum" },
].map((company) => ({
  id: uuidv4(),
  company,
}));

const AutoScrollbar = () => {
  const speed = 50000;

  return (
    <Box>
      <div className="CompaniesContainer">
        <Typography
          variant="h3"
          align="center"
          mb={15}
          className="CompaniesTexts"
        >
          Companies Served
        </Typography>
        <div className="CompaniesInner">
          <section
            className="CompaniesSection"
            style={{ "--speed": `${speed}ms` }}
          >
            {apparel.map(({ id, company }) => (
              <div className="CompaniesImageBox" key={id}>
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href={company.url}
                  disableRipple
                >
                  <img src={company.logo} alt={id} className="CompaniesImage" />
                </IconButton>
              </div>
            ))}
          </section>
          <section
            className="CompaniesSection"
            style={{ "--speed": `${speed}ms` }}
          >
            {apparel.map(({ id, company }) => (
              <div className="CompaniesImageBox" key={id}>
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href={company.url}
                  disableRipple
                >
                  <img src={company.logo} alt={id} className="CompaniesImage" />
                </IconButton>
              </div>
            ))}
          </section>
          <section
            className="CompaniesSection"
            style={{ "--speed": `${speed}ms` }}
          >
            {apparel.map(({ id, company }) => (
              <div className="CompaniesImageBox" key={id}>
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href={company.url}
                  disableRipple
                >
                  <img src={company.logo} alt={id} className="CompaniesImage" />
                </IconButton>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Box>
  );
};

export default AutoScrollbar;
