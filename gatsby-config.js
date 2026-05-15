module.exports = {
  siteMetadata: {
    siteUrl: `https://damiobakoya.github.io/`,

    name: 'Dami Obakoya',

    title: `Dami Obakoya | Computer Science Student`,

    description:
      'Computer Science student passionate about software development, web applications, and solving real-world problems through code.',

    author: `@damiobakoya`,

    github: `https://github.com/damiobakoya`,

    linkedin: `https://www.linkedin.com/in/oluwadamilola-obakoya-b9219b3aa/`,

    about: `I am a Computer Science student at Oakland City University with an interest in software development, web applications, and data-driven solutions.

I enjoy building projects that solve real problems and help me improve my programming skills. Through my coursework and personal projects, I have worked with Python, JavaScript, HTML, CSS, and SQL.

My experience includes building a quiz game with a database backend, a campus sports schedule website, and a web scraping project for collecting and organizing data.

I am focused on improving my full-stack development skills and learning how to build scalable and efficient applications. My goal is to gain internship experience where I can apply my skills in real-world environments and continue growing as a developer.`,

    experience: [
      {
        name: 'Oakland City University',
        description:
          'Bachelor of Science in Computer Science | Expected May 2027 | Relevant Coursework: Data Structures, Database Systems, Web Development, Software Engineering, Computer Networks',
        link: '',
      },
    ],

    skills: [
      {
        name: 'Programming Languages',
        description: 'Python, JavaScript, Java, SQL, HTML, CSS',
      },
      {
        name: 'Web Development',
        description: 'React, Node.js, Express, Tailwind CSS',
      },
      {
        name: 'Tools & Platforms',
        description: 'Git, GitHub, VS Code, Linux',
      },
      {
        name: 'Databases',
        description: 'MySQL, PostgreSQL, MongoDB',
      },
      {
        name: 'Concepts',
        description: 'REST APIs, OOP, Agile Development, Debugging',
      },
    ],

    projects: [
      {
        name: 'Quiz Game with Database',
        description:
          'Python-based quiz game that allows users to answer questions and stores scores using a database system. Built to practice backend logic and data handling.',
        link: '',
      },
      {
        name: 'Campus Sports Schedule Website',
        description:
          'Web application that displays college sports matches and events on campus. Helps students easily view schedules and upcoming games.',
        link: '',
      },
      {
        name: 'Web Scraping Data Project',
        description:
          'Python project that extracts data from websites and organizes it into structured formats for analysis and reporting.',
        link: '',
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
          `gatsby-remark-images`,
          `gatsby-remark-responsive-iframe`,
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
            title: 'Dami Obakoya RSS Feed',
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