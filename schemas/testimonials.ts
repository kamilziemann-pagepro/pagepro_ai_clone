export default {
  name: "testimonials",
  title: "Testimonials Section",
  type: "document",
  fields: [
    {
      name: "videoThumbnail",
      title: "Video Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "testimonialItems",
      title: "Testimonial Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quote",
              title: "Quote",
              type: "text",
            },
            {
              name: "author",
              title: "Author",
              type: "string",
            },
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            {
              name: "backgroundColor",
              title: "Background Color",
              type: "string",
              options: {
                list: [
                  { title: "Red", value: "red" },
                  { title: "Light Gray", value: "light-gray" },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
