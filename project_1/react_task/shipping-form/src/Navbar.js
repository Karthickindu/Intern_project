import { Box, Stack, Link } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <div className="flex">
      <Box className="w-40 bg-gray-900 text-white fixed left-0 h-full transition-all duration-300 ease-in-out">
        <Box className="mt-16 hidden lg:block">
          <Stack spacing={4} px={4}>
            <Link
              href="/"
              fontSize="lg"
              _hover={{ textDecoration: 'none', background: '#1E3A8A' }}
            >
              Shipping Info
            </Link>
            <Link
              href="/display"
              fontSize="lg"
              _hover={{ textDecoration: 'none', background: '#1E3A8A' }}
            >
              Data
            </Link>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
