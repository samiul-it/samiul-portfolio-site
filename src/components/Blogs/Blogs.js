import React from 'react';
import useProjects from './../../hooks/useProjects';


const Blogs = () => {

    
   
    return (
      <div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="text-5xl font-bold mb-5"
            >
              Blogs
            </h1>
            <div data-aos="zoom-in" className="collapse mb-5 ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                Difference between Authrization and Authentication
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>
                  Authorization is giving permissions to the users to use the
                  role.In otherwords giving some one previlage of doing
                  anywork.For example giving admin access to a user to write
                  over the system is an authrization. Authentication is also a
                  part of ensuring system security,to ensure that unauthorized
                  persons will not enter to the system.Checking with proper
                  credentials ensure the authentication.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="collapse mb-5">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                Why are you using firebase?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>
                  Firebase is a platform of developing mobile and
                  webapps.Firebase is developed by google and it has a high
                  quality security system.In useing authentication firebase
                  provides us most secure platform of storing user
                  indformations. It's authenication systema and database is most
                  secure amoung the third party applications.Other
                  authentication providers are Auth0,Okta, ActiveDictionary etc.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="collapse mb-5">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                Some other features of firebase.
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>
                  Firebase provides user authentications.Also it has website
                  hosting,database,Cloud Storage,Firebase Machine Leaning etc.It
                  also provides feature of Mobile app development SDK.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="collapse mb-5">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                When to use Node JS and MongoDB
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>
                  Node js used to create connection between server and client.
                  MongoDB is a Database used to store data.Node Js is also used
                  to make connection between Database and Client Side
                  application.MongoDB is a Nosql database.MongoDB provides
                  flexibility in storing data.Flexibility in filtering data
                  query.Easy usuablity with JSON Data.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="collapse mb-5">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                Difference Between SQL and NoSql Database.
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>
                  SQL is a relational Database System. SQL works effectively in
                  insert,search,update,delete operations. Popular SQL databases
                  are MySql Database,Oracle etc. NoSql is non relational
                  database system.It provides flexible query operations that
                  free of joining tables. NoSql database is used in large
                  applications also efficient in realtime websites.MongoDB is a
                  popular NoSql database.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="collapse mb-5">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                Deifference Between JS Vs Node JS
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>
                  JavaScript is a scripting language.Javascript is a high level
                  programming language based on Object Oriented
                  Programming.Javascript allows dynamic rendering and make
                  changes in HTML DOM.It has some frameworks like ANgular,VUE
                  and Librariy Like React JS Node JS is a javascript runtime
                  environment. Node JS used to create connection between Client
                  and Server Side.Node Js is mostly used in server side
                  development.Node js can not make changes in HTML Dom.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="collapse mb-5">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content">
                See More
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-700 peer-checked:text-secondary-content">
                <p>Comming Soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;