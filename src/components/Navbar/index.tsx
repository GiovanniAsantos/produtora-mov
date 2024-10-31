import newLogoSimbolo from "../../assets/img/newLogoSimbolo.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { navLinks } from "../../routes/navLinks";
import "./style.css";

const NavLink = ({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    px={8}
    py={1}
    color={"gray.50"}
    textDecoration={"none"}
    rounded={"full"}
    fontWeight={600}
    fontSize={"md"}
    letterSpacing={1}
    _hover={{
      bgColor: "rgba(144, 144, 144, 0.117)",
      backdropFilter: "blur(100px)",
    }}
    href={href}
  >
    {children}
  </Link>
);

interface NavbarProps {
  hiddenLogo?: boolean;
  bgColor?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  hiddenLogo = false,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      className="navbar-container"
      bg={"black"}
      px={4}
      overflow="hidden"
      {...props}
    >
      <Flex
        className="navbar-flex"
        paddingY={4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* Logo alinhada à esquerda */}
        <Box
          display="flex"
          alignItems="center"
        >
          {!hiddenLogo && (
            <img
              className="navbar-logo"
              width="50px"
              height="auto"
              src={newLogoSimbolo}
              alt="Logo"
              style={{ maxWidth: "70px" }}
            />
          )}
        </Box>

        {/* Menu hambúrguer alinhado à direita para telas menores */}
        <Box display={{ base: "block", md: "none" }}>
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              backgroundColor="#4497B3"
              _hover={{ backgroundColor: "#357f94" }}
              as={IconButton}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <MenuList bg="#171717" borderColor="gray.700">
              {navLinks.map((link) => (
                <MenuItem
                  key={link?.name}
                  onClick={onClose}
                  bg="#171717"
                  color="white"
                  _hover={{ bg: "#2c2c2c" }}
                >
                  <Link href={link?.href} color="white">
                    {link?.name}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>

        {/* Links para telas maiores */}
        <Box display={{ base: "none", md: "flex" }} flex="1" justifyContent="center">
          {navLinks.map((link) => (
            <NavLink href={link?.href} key={link?.name}>
              {link?.name}
            </NavLink>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};
