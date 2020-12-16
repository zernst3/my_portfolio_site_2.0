export interface Project {
  name: string;
  shortDescription: string;
  longDescription: string;
  moreInformation: string;
  images: Array<string>;
  links: Array<any>;
}

interface ProjectList {
  [key: string]: Project;
}

const projectList: ProjectList = {
  translationchatapp: {
    name: "Translation Chat App",
    shortDescription: "A basic chat application that translates messages",
    longDescription: `This is a chat application that uses sockets to connect users to rooms after selecting their desired language.  Once in the room, all messages are translated into their language automatically in real-time.  Technologies used: Typescript, React, Node, Express, Socket.io, Microsoft Azure, PWA`,
    moreInformation: `For the deployed demo, as it is on heroku, please allow some time for the client and server to load, thanks.`,
    images: [
      "/translation_chat_app/english_login.png",
      "/translation_chat_app/russian_login.png",
      "/translation_chat_app/room.png",
      "/translation_chat_app/users.png",
      "/translation_chat_app/english_chat.png",
      "/translation_chat_app/russian_chat.png",
    ],
    links: [
      {
        type: "Client Github",
        link: "https://github.com/zernst3/typescript_chat_app_client",
      },
      {
        type: "Server Github",
        link: "https://github.com/zernst3/typescript_chat_app_server",
      },
      {
        type: "Deployed Demo",
        link: "https://zernst-typescript-chat-app-c.herokuapp.com/",
      },
      {
        type: "Youtube Video",
        link: "https://youtu.be/IgKg1YVfEBg",
      },
    ],
  },
  shootar: {
    name: "ShootAR",
    shortDescription: "A mobile augmented reality game",
    longDescription: `This augmented reality game was created to demonstrate an understanding of new skills and technologies for my capstone project at FullStack Academy.  My main contributions included both animations and sound design.  In addition, I learned valuable skills working with a team of other engineers including communication skills.  Technologies used: ViroMedia, React-Native, Redux, Maya, Gravity Sketch, Three.js and Reaper (Digital Audio Workstation)`,
    moreInformation: `I would like to thank my team members: Christopher Smith, Daniel Lee and Valentyna Vasylieva`,
    images: [
      "/ShootAR_images/Logo.png",
      "/ShootAR_images/portal.png",
      "/ShootAR_images/main.png",
      "/ShootAR_images/gameplay1.png",
      "/ShootAR_images/reload.png",
      "/ShootAR_images/ak.png",
      "/ShootAR_images/br.png",
    ],
    links: [
      {
        type: "Github",
        link: "https://github.com/Nocturne-s-Nightmare-Mobile/ShootAR",
      },
      {
        type: "Youtube Video",
        link:
          "https://www.youtube.com/watch?v=ebHLsXIDKnc&ab_channel=ZacharyErnst",
      },
    ],
  },
  mysimplecrm: {
    name: "My Simple Crm",
    shortDescription:
      "A basic full-stack CRM (Client Relationship Management) project",
    longDescription: `This full-stack CRM application was what I decided to create as my final project for CS50x. This project includes four CRUD databases that are connected to each other, as well as an authentication system with permission levels.  Technologies used: HTML, CSS, Node, Express, Mongoose`,
    moreInformation: `For the deployed demo, use the following Credentials to login:
    Username: "Admin" or "Manager" or "User" (To observe the different user permissions),
    Password: "Password"`,
    images: [
      "/crm_images/Add Ticket.png",
      "/crm_images/Clients.png",
      "/crm_images/Dashboard.png",
      "/crm_images/Client Information.png",
      "/crm_images/Edit Transaction.png",
      "/crm_images/User Permissions.png",
    ],
    links: [
      {
        type: "Github",
        link: "https://github.com/zernst3/my-simple-crm",
      },
      {
        type: "Deployed Demo",
        link: "https://zernst-crm.herokuapp.com/login",
      },
      {
        type: "Youtube Video",
        link: "https://youtu.be/z4eN17EzBuo",
      },
    ],
  },
};

export default projectList;
