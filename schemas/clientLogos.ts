export default {
  name: "clientLogos",
  title: "Client Logos Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "logos",
      title: "Client Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Client Name",
              type: "string",
            },
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
