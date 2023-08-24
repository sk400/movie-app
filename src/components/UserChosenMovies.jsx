import React from "react";

import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import FavoriteMovies from "./FavoriteMovies";
import Loader from "./Loader";

const UserChosenMovies = ({ favoriteMovies, watchlist }) => {
  return (
    <Box
      sx={{
        mt: 20,
        p: { base: 2, sm: 5, md: 10, lg: 10 },
      }}
    >
      <Tabs variant="soft-rounded" colorScheme="cyan">
        <TabList>
          <Tab>
            <Text>Favorites</Text>
          </Tab>
          <Tab>
            <Text>Watchlist</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {favoriteMovies?.length > 0 ? (
              <FavoriteMovies movies={favoriteMovies} />
            ) : (
              <>
                <Text>
                  You have not any favorite news yet. You can add in home page.{" "}
                </Text>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {watchlist?.length > 0 ? (
              <FavoriteMovies movies={watchlist} />
            ) : (
              <>
                <Text>
                  You have not any favorite news yet. You can add in home page.{" "}
                </Text>
              </>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UserChosenMovies;
