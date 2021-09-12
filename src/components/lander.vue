<template>
    <div>
        <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="./../assets/IMG_8947.jpeg"   height="250px" width="200px">
                <h1 style="font-weight: bold;">Michael Jones</h1>
                <hr class="style2">
                <div class= "intro-list">
                  <ul>
                    <li>Software Engineer</li>
                    <li>Student at Syracuse Unviersity</li>
                    <li>Hometown: Boston, MA</li>
                  </ul>
                </div>
                <div class="row d-flex justify-content-center">
                  <!--Grid column-->
                  <div class="col-lg-9">
                  </div>
                  <!--Grid column-->
                </div>
            </div>
        </section>
        <section id="projects" class="portfolio">
            <h1>These are some of my recent projects</h1>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 d-flex align-items-stretch">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/asp.net.png">
                                    <h2>Nibble</h2>
                                </div>
                                <h5 class="card-subtitle mb-2">⭐Recipe Managemnet Software⭐</h5>
                                <h6 class="card-subtitle mb-2" style="color:#ffa07a;">March 2021</h6>
                                <hr>
                                <div class="card-body">
                                    <p>
                                      Each user could log and access their own recipes through an account system. The implementation of a virtual pantry allowed
                                      users to be able to see the contents of their physical pantrys from any web browser.
                                    </p>
                                    <hr>
                                    <p style = "color:#98FB98;">
                                      Asp.net, C#, Azzure database, SQL, MVC practices
                                    </p>
                          <!--<button type="button" class="btn btn-outline-secondary">
                            More
                            </button>-->
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-4 d-flex align-items-stretch">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/cloud2.png">
                                    <h2>FaceIT</h2>
                                </div>
                                 <h5 class="card-subtitle mb-2">⭐Winner of “Best use of Google Cloud by Google Cloud Platform and MLH"⭐</h5>
                                 <h6 class="card-subtitle mb-2" style="color:#ffa07a;">January 2021</h6>
                                <hr>
                                <div class="card-body">
                                    <p>
                                      The teams motive was to create an application to postively affect workers during covid. Utilizing google vision API and a front-faceing camera we were able to track user emotion throughout virtual workdays.
                                      Mood related data is stored and presented to the user to show them how their mood ranges throughout the workday.
                                    </p>
                                    <hr>
                                    <p style = "color:#98FB98;">
                                      Python, Matplotlib, Google firestone database, Google Vision API
                                    </p>
                                    <a href="https://devpost.com/software/faceit-j49gms" class="btn btn-outline-secondary">DevPost</a>
                                </div>
                            </div>
                        <br>
                    </div>  
                    <div class="col-md-4 d-flex align-items-stretch">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/spotify2.png">
                                <h2>Jukbox.live</h2>
                            </div>
                            <h5 class="card-subtitle mb-2">⭐Multi-device song queueing envrionment⭐</h5>
                            <h6 class="card-subtitle mb-2" style="color:#ffa07a;">Summer 2020</h6>
                            <hr>
                            <div class="card-body">
                                <p>
                                  This website allowed users to create password protected rooms to allow other devices to join. Once joined, devices could queue songs using a searchbar for their songs to be played next in order.
                                  Using Spotify developer API's the list of songs was then played on the room owners device. 
                                </p>
                                <p style = "color:#98FB98;">
                                      Java, JavaScript, Spring Boot, Maven 
                                    </p>
                                <a href="https://github.com/Spotify-Api-team/spotify-app/" class="btn btn-outline-secondary">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="jobs" class="work">
          <h1>Job Descriptions</h1>
          <br>
          <div class="container">
              <div class="row">
                  <div class="col-md-4 d-flex align-items-stretch">
                          <div class="card">
                              <div class="card-head">
                                  <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/garmin.jpg">
                                  <br>
                                  <h2>Garmin</h2>
                              </div>
                              <h5 class="card-subtitle mb-2">👔 Software Engineering Intern 👔</h5>
                              <h6 class="card-subtitle mb-2" style="color:#ffa07a;">Summer 2021</h6>
                              <hr>
                              <div class="card-body">
                                  <p>
                                    Created API endpoints for several Spring boot Maven projects that served core functionality for the Garmin Jr App. Devleoped a Nginx-Docker testing environment to locally deploy all projects simultaneously on the same machine. 
                                  </p>
                                  <hr>
                                  <p style = "color:#98FB98;">
                                    Java, Spring Boot, SQL
                                  </p>
                        <!--<button type="button" class="btn btn-outline-secondary">
                          More
                          </button>-->
                              </div>
                          </div>
                          <br>
                  </div>
                  <div class="col-md-4 d-flex align-items-stretch">
                    <div class="card">
                        <div class="card-head">
                            <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/anokiwave.jpg">
                            <br>
                            <h2>Anokiwave</h2>
                        </div>
                        <h5 class="card-subtitle mb-2">👔 IT Support and Development Intern 👔</h5>
                        <h6 class="card-subtitle mb-2" style="color:#ffa07a;">Summer 2020</h6>
                        <hr>
                        <div class="card-body">
                            <p>
                              Created API endpoints for several Spring boot Maven projects that served core functionality for the Garmin Jr App. Devleoped a Nginx-Docker testing environment to locally deploy all projects simultaneously on the same machine. 
                            </p>
                            <hr>
                            <p style = "color:#98FB98;">
                              Grails, Microsoft Power Automate, Excel VBA
                            </p>
                      <!--<button type="button" class="btn btn-outline-secondary">
                        More
                        </button>-->
                        </div>
                    </div>
                    <br>
                  </div>
                  <div class="col-md-4 d-flex align-items-stretch">
                    <div class="card">
                        <div class="card-head">
                            <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/anokiwave.jpg">
                            <br>
                            <h2>Anokiwave</h2>
                        </div>
                        <h5 class="card-subtitle mb-2">👔 Engineering Intern 👔</h5>
                        <h6 class="card-subtitle mb-2" style="color:#ffa07a;">Summer 2019</h6>
                        <hr>
                        <div class="card-body">
                            <p>
                              Modified Python used in manufacturing testing to improve device tracking and user feedback. Generated yeild plots and analyzed test results using Spotife and Excel.
                            </p>
                            <hr>
                            <p style = "color:#98FB98;">
                              Python, Excel
                            </p>
                      <!--<button type="button" class="btn btn-outline-secondary">
                        More
                        </button>-->
                        </div>
                    </div>
                    <br>
                  </div>
              </div>
          </div>
          
        </section>
    </div>
    
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

    .section{
        padding-top: 4%;
        padding-bottom: 10%;
        font-family: 'Poppins', sans-serif;
        background-color: #464866;
        color:#fff;
        
    }
    .portfolio{
      /*#f48f50*/
        background-color:#ffa07a;
        font-family: 'Poppins', sans-serif;
        padding-top: 9%;
        padding-bottom: 5%;
        /* padding:15% */
    }
    .work{
      /*#f48f50*/
        background-color:#ffa07a;
        font-family: 'Poppins', sans-serif;
        padding-top: 5%;
        padding-bottom: 9%;
        /* padding:15% */
    }
    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
    .card{
      background-color: #464866;
      color:#fff;
    }
    hr.style2 {
      border-top: 3px double #8c8b8b;
      width: 25%;
    }
    .intro-list{
        display: table;
        margin: 0 auto;
        text-align: left;
    }


</style>