/**
 * Design tokens for Architect Enterprise CMS
 * Based on the visual system in the provided images
 */

export const tokens = {
   "colorPrimary": "#ff9500",
    "colorInfo": "#ff9500",
    "colorSuccess": "#80f438",
    "fontSize": 14,
  colorWarning: "#ff9900",
  colorError: "#ba1a1a",
  tertiary: "#9e3d00",
  colorTextBase: "#0b1c30",
  colorTextSecondary: "#5c6d82",
  colorBgBase: "#f8f9ff",
  colorBgContainer: "#ffffff",
  colorBgLayout: "#f8f9ff",
  colorBgElevated: "#ffffff",
  colorBorder: "#dce9ff",
  colorSidebar: "#eff4ff",
  borderRadius: 8,
  fontFamily: "'Inter', sans-serif",
  fontFamilyHeadline: "'Plus Jakarta Sans', sans-serif",
};

export const themeConfig = {
  token: {
    colorPrimary: tokens.colorPrimary,
    borderRadius: tokens.borderRadius,
    fontFamily: tokens.fontFamily,
    colorTextBase: tokens.colorTextBase,
    colorBgBase: tokens.colorBgBase,
  },
  components: {
    Layout: {
      siderBg: tokens.colorSidebar,
      headerBg: "rgba(248, 249, 255, 0.8)",
    },
    Button: {
      borderRadius: 8,
      controlHeight: 40,
    },
    Input: {
      borderRadius: 8,
      controlHeight: 40,
    },
    Select: {
      borderRadius: 8,
      controlHeight: 40,
    },
  },
};
