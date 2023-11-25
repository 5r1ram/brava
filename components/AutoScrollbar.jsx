// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { BrandCard } from ".";

import bitfins from "../assets/bitfins.png";
import crypto from "../assets/crypto.png";
import fest from "../assets/fest.png";
import hosky from "../assets/hosky.png";
import man from "../assets/man.png";
import pendulum from "../assets/pendulum.png";

const brands = [
  {
    name: "$ hosky",
    logo: hosky,
    url: "https://bravaland.com/collections/hosky",
  },
  {
    name: "bitfins",
    logo: bitfins,
    url: "https://bravaland.com/collections/bitfins",
  },
  {
    name: "cryptoraggies",
    logo: crypto,
    url: "https://bravaland.com/collections/cryptoraggies",
  },
  {
    name: "future-fest",
    logo: fest,
    url: "https://bravaland.com/collections/future-fest",
  },
  {
    name: "vudu-brigada",
    logo: man,
    url: "https://bravaland.com/collections/vudu-brigada",
  },
  {
    name: "pendulum",
    logo: pendulum,
    url: "https://bravaland.com/collections/pendulum",
  },
].map((brand) => ({
  id: uuidv4(),
  brand,
}));

const AutoScrollbar = () => {
  const speed = 15000;

  return (
    <Box>
      <div className="CompaniesContainer">
        <div className="CompaniesInner">
          <section
            className="CompaniesSection"
            style={{ "--speed": `${speed}ms` }}
          >
            {brands.map(({ id, brand }) => (
              <div className="CompaniesImageBox" key={id}>
                <IconButton href={brand.url} disableRipple>
                  <BrandCard
                    brand={
                      brand && (
                        <Image
                          src={brand.logo}
                          alt={id}
                          className="CompaniesImage"
                        />
                      )
                    }
                  />
                </IconButton>
              </div>
            ))}
          </section>
          <section
            className="CompaniesSection"
            style={{ "--speed": `${speed}ms` }}
          >
            {brands.map(({ id, brand }) => (
              <div className="CompaniesImageBox" key={id}>
                <IconButton href={brand.url} disableRipple>
                  <BrandCard
                    brand={
                      brand && (
                        <Image
                          src={brand.logo}
                          alt={id}
                          className="CompaniesImage"
                        />
                      )
                    }
                  />
                </IconButton>
              </div>
            ))}
          </section>
          <section
            className="CompaniesSection"
            style={{ "--speed": `${speed}ms` }}
          >
            {brands.map(({ id, brand }) => (
              <div className="CompaniesImageBox" key={id}>
                <IconButton href={brand.url} disableRipple>
                  <BrandCard
                    brand={
                      brand && (
                        <Image
                          src={brand.logo}
                          alt={id}
                          className="CompaniesImage"
                        />
                      )
                    }
                  />
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
