
const speakerData = [
    {
      name: "Brendan Eich",
      role: "CEO of Brave Software",
      bio: " An American computer programmer and technology executive. He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation",
      img: 'bren.webp'

    },
    {
      name: "Isaac Akeredolu",
      role: "Team Lead Ecobank Ghana",
      bio: " Lead in validating Database and Infrastructure designs for all new solution deployments to meet emerging business needs for customer delight, and customer attraction. He led the team that designed and implemented High Availability and Disaster. Recovery Solutions for Core Banking Platforms for the Ecobank Group across 33 affiliates with the aim of providing uninterrupted services.",
      img: "akeredolu.jfif"
    },
    {
      name: "Ryan Dahl",
      role: "Created Nodejs Javascript runtime",
      bio: "  An American software engineer who is best known for creating the Node.js JavaScript runtime as well as the Deno JavaScript/TypeScript runtime",
      img: "ryan.jpg"
    },
    {
      name: "Isaac Z. Schlueter",
      role: "Created the Node Package Manager",
      bio: "  Npm, inc. designs and develops software solutions. The Company offers software platform which allows developers to install and publish those packages. npm serves customers in the United States.",
      img: 'isaac.jpg'
    },
    {
      name: "Jordan Walke",
      role: "Created ReactJs",
      bio: " Jordan Walke, who is the creator of ReactJS recently announced in the micro-blogging platform, that after a decade he is leaving Facebook. Walke had been working as a software engineer at the social media giant, where he was working on the React JavaScript library.",
      img: 'jordan.jpg'
    },
    {
      name: "Guillermo Rauch",
      role: "CEO and Founder of Vercel",
      bio: "  Guillermo Rauch is the CEO and founder of Vercel, a cloud infrastructure company that offers advanced deployment capabilities for front-end JavaScript, edge, and serverless functions.",
      img: 'rauch.png'
    }
  ]

  document.getElementById('speakersList').innerHTML =  speakerData.map(speaker => `
  <div class="speaker">
                        <div class="speaker-image">
                          <img src="./img/speakers/${speaker.img}" alt="${speaker.name}"/>
                        </div>
                        <div class="speaker-profile pt-3">
                          <div class="name">
                            <h4>${speaker.name}</h4>
                          </div>
                          <div class="role">${speaker.role}</div>
                          <div class="bio">
                          ${speaker.bio}
                          </div>
                        </div>
                      </div>
  
  ` ).join('')
  