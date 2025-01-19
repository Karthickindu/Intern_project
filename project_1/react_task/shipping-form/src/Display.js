

import React from "react";
import { Box, Text, Grid, GridItem, Stack } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Display = () => {
  const storedData = localStorage.getItem("shipping");
  console.log(storedData);
  const formData = storedData ? JSON.parse(storedData) : null;
  console.log(formData);
  
  const {
    company,
    name,
    email,
    phone,
    add1,
    add2,
    city,
    state,
    zip,
    country,
    company_r,
    name_r,
    email_r,
    phone_r,
    add1_r,
    add2_r,
    city_r,
    state_r,
    zip_r,
    country_r,
    weight,
    dimension,
  } = formData;


  return (

    <div>
    <div className="container mx-auto p-4 shadow-md pt-10 pl-10 pr-10 pb-10 w-11/12">
      <Box p={6} bg="rgba(19, 19, 36, 0.726)" color="white" minH="100vh">
        <Text fontSize="2xl" fontWeight="bold" mb={8} textAlign="center">
          Parcel Details
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {/* Sender Details */}
          <GridItem>
            <Box border="1px solid" borderColor="grey" borderRadius="md" p={6}>
              <Text fontWeight="bold" fontSize="xl" mb={4}>
                Sender
              </Text>
              <hr className="mt-2 mb-4" />
              <Stack spacing={3} fontSize={20}>
                <Text
                  className="mb-2 text-sm"
                  display="flex"
                  justifyContent="space-"
                >
                  <strong>Company:</strong> {company || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Name:</strong> {name || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Email:</strong> {email || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Phone:</strong> {phone || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Address:</strong> {add1 || "N/A"} {add2}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>City:</strong> {city || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>State:</strong> {state || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Country:</strong> {country || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Zip:</strong> {zip || "N/A"}
                </Text>
              </Stack>
            </Box>
          </GridItem>

          {/* Recipient Details */}
          <GridItem>
            <Box border="1px solid" borderColor="grey" borderRadius="md" p={6}>
              <Text fontWeight="bold" fontSize="xl" mb={4}>
                Recipient
              </Text>
              <hr className="mt-2 mb-4" />
              <Stack spacing={3} fontSize={20}>
                <Text className="mb-2 text-sm">
                  <strong>Company:</strong> {company_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Name:</strong> {name_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Email:</strong> {email_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Phone:</strong> {phone_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Address:</strong> {add1_r || "N/A"} {add2_r}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>City:</strong> {city_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>State:</strong> {state_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Country:</strong> {country_r || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Zip:</strong> {zip_r || "N/A"}
                </Text>
              </Stack>
            </Box>
          </GridItem>

          {/* Parcel Characteristics */}
          <GridItem>
            <Box border="1px solid" borderColor="grey" borderRadius="md" p={6}>
              <Text fontWeight="bold" fontSize="xl" mb={4}>
                Parcel Characteristics
              </Text>
              <hr className="mt-2 mb-4" />
              <Stack spacing={3} fontSize={20}>
                <Text className="mb-2 text-sm">
                  <strong>Weight:</strong> {weight || "N/A"}
                </Text>
                <Text className="mb-2 text-sm">
                  <strong>Dimensions:</strong> {dimension || "N/A"}
                </Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
    </div>
  );
};

export default Display;
