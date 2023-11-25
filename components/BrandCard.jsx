/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Typography,
  SvgIcon,
} from "@mui/joy";

const BrandCard = ({ brand }) => {
  console.log({ brand });

  return (
    <Card sx={{ maxWidth: 345 }} variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress
          size="lg"
          style={{ fontSize: "8rem" }}
          determinate
          value={100}
        >
          {brand}
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">{brand.name}</Typography>
          <Typography level="h2">$36</Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button variant="soft" size="sm">
          Shop now
        </Button>
        <Button variant="soft" size="sm">
          Add to Wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

export default BrandCard;
