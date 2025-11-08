export default defineAppConfig({
  ui: {
    colors: {
      // primary: "amber",
    },
    button: {
      slots: {
        base: ["cursor-pointer"],
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
