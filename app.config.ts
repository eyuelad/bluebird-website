export default defineAppConfig({
  ui: {
    colors: {
      primary: "sky",
    },
    button: {
      slots: {
        base: ["rounded-lg cursor-pointer "],
      },
      colors: {
        primary: "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500",
      },
      variants: {
        size: {
          xl: {
            base: "px-8 py-4 text-base gap-2",
            leadingIcon: "size-6",
            leadingAvatarSize: "xs",
            trailingIcon: "size-6",
          },
        },
      },
    },
    card: {
      slots: {
        root: "rounded-md",
        header: "p-3 sm:px-4",
        body: "p-3 sm:p-4",
        footer: "p-3 sm:px-4",
      },
    },
  },
});
