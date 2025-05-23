export default {
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
      ],
    },
  ],
}
