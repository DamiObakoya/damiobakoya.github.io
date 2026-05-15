module.exports = {
  siteMetadata: {
    siteUrl: `https://damiobakoya.github.io/`,

    name: 'Dami Obakoya',

    title: `Dami Obakoya | Computer Science Student`,

    description: `Computer Science student passionate about software development, web applications, and solving real-world problems through code.`,

    author: `@damiobakoya`,

    github: `https://github.com/damiobakoya`,

    linkedin: `https://www.linkedin.com/in/your-link-here`,

    about: `I am a Computer Science student at Oakland City University with a strong interest in software development and building practical applications. I have experience working with Python, JavaScript, HTML, CSS, and SQL through coursework and personal projects.

I enjoy solving problems and turning ideas into working code. My recent projects include building a quiz game with a database backend and working on data analysis using Python.

I am particularly interested in full-stack development and learning how front-end and back-end systems work together. My goal is to gain internship experience where I can continue improving my skills and contribute to real-world projects.`,

    projects: [
  {
    name: 'Quiz Game with Database',
    description:
      'Python-based quiz game that allows users to answer questions and stores scores using a database system. Built to practice backend logic, data storage, and user interaction.',
    link: '',
  },
  {
    name: 'Campus Sports Schedule Website',
    description:
      'Web application designed to help students and staff view sports events and college matches happening on campus. Displays schedules in a clear and organized format for easy access.',
    link: '',
  },
  {
    name: 'Web Scraping Data Collection Project',
    description:
      'Python web scraping project that extracts and organizes data from online sources. Focused on collecting structured information and handling real-world messy data.',
    link: '',
  },
],
    experience: [
      {
        name: 'Oakland City University',
        description: 'Computer Science Student',
        link: '',
      },
    ],

    skills: [
      {
        name: 'Programming Languages',
        description: 'Python, JavaScript, HTML, CSS, SQL, C',
      },
      {
        name: 'Tools & Technologies',
        description: 'Git, GitHub, VS Code, Node.js',
      },
      {
        name: 'Interests',
        description: 'Web Development, Data Analysis, Full-Stack Development',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { 'content:encoded': edge.node.html },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Dami Obakoya RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dami-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};