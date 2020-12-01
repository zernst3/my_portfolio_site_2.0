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
  mysimplecrm: {
    name: "My Simple Crm",
    shortDescription:
      "A basic full-stack CRM (Client Relationship Management) project.",
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
