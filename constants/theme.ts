export const theme = {
  colors: {
    brand: "#adf4cf",
    background: "#fafafa",
    text: "#1c1c1e",
  },
  breakpoints: ["40em", "52em", "64em"],
  boxShadow: "rgb(222 222 222) 0px 0px 10px 1px",
  fonts: {
    body: "'Karla', sans-serif",
    heading: "'Inter', sans-serif",
    link: "'Inter', sans-serif",
    monospace: "'IBM Plex Mono', monospace",
  },
  variants: {
    navbar: {
      borderBottom: "1px solid #eee",
      backgroundColor: "rgba(255,255,255, 0.7)",
      backdropFilter: "saturate(180%) blur(20px)",
      px: 1,
    },
    footer: {
      backgroundColor: "#f5f5f7",
      borderTop: "1px solid #eee",
      py: 2,
      px: 2,
    },
    activeTab: {
      fontWeight: "bold",
      borderBottom: "4px solid #adf4cf",
    },
    link: {
      color: "#1c1c1e",
      textDecoration: "none",
      fontWeight: "bold",
      borderBottom: "4px solid #adf4cf",
      fontFamily: "'Inter', sans-serif",
    },
    blogCard: {
      backgroundColor: "#f5f5f7",
      border: "1px solid #dedede",
      borderRadius: 8,
    },
  },
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
};
