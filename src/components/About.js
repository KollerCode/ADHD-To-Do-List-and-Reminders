import React from "react";
import warrior from "../images/warrior.jpg"
import natasha from "../images/natasha.jpg"

function About() {
    return (
      <div className="about">
        <div className="about-title">
          <h3 className="about-h3">About ADHD</h3>
          <p>
            ADHD, or <em>Attention-deficit/hyperactivity disorder</em>, is
            usually characterized by the inability to sit still, control
            impulse, and pay attention. This happens to everyone once in a
            while, but for some people the problems are so pervasive and
            persistent that they interfere with every aspect of their life:
            home, academic, social and work.{" "}
            <b>
              ADHD is a neurodevelopmental disorder that affects 11% of
              school-age children, but what about those of us struggling with it
              as adults?
            </b>{" "}
            We are 100% capable of being very successful in life. However,
            without identification and proper treatment, ADHD may have serious
            consequences, including school failure, family stress and
            disruption, depression, problems with relationships, substance
            abuse, delinquency, accidental injuries and job failure.
          </p>
          <p>
            <b>
              Adults with ADHD often cope with difficulties at work and in their
              personal and family lives related to ADHD symptoms.
            </b>{" "}
            Many have inconsistent performance at work or in their careers; have
            difficulties with day-to-day responsibilities; experience
            relationship problems; and may have{" "}
            <u>chronic feelings of frustration, guilt or blame</u>.Recently,
            deficits in executive function have emerged as key factors affecting
            academic and career success.{" "}
            <em>
              Executive function is the brain’s ability to prioritize and manage
              thoughts and actions.{" "}
            </em>{" "}
            This ability permits individuals to consider the long-term
            consequences of their actions and guide their behavior across time
            more effectively. Individuals who have issues with executive
            functioning may have difficulties completing tasks or may forget
            important things.
          </p>
          <ol>
            <strong>
              <u>There are three different types of ADHD:</u>
            </strong>
            <li>
              <strong>Predominantly Inattentive Presentation:</strong>
            </li>{" "}
            It is hard for the individual to organize or finish a task, to pay
            attention to details, or to follow instructions or conversations.
            The person is easily distracted or forgets details of daily
            routines.{" "}
            <li>
              <strong>Predominantly Hyperactive-Impulsive Presentation:</strong>
            </li>
            The person fidgets and talks a lot. It is hard to sit still for long
            (e.g., for a meal or while doing homework). The individual feels
            restless and has trouble with impulsivity. Someone who is impulsive
            may interrupt others a lot, grab things from people, or speak at
            inappropriate times. It is hard for the person to wait their turn or
            listen to directions. A person with impulsiveness may have more
            accidents and injuries than others.{" "}
            <li>
              <strong>Combined Presentation:</strong>
            </li>{" "}
            Symptoms of the above two types are equally present in the person.
            Because symptoms can change over time, the presentation may change
            over time as well.
            </ol>
        </div>
        <img src={warrior} className="warrior-img" />
        <div className="about-app">
          <h3 className="about-h3">What makes this app different</h3>
          <p>
            This app was made by someone, <em>aka me</em>, who has struggled
            with ADHD and knows what works and what doesn't when it comes to
            trying to manage tasks. Everyone is different, which is why what
            works for me may not work for everyone. Therefore multiple sources
            were researched and persons with ADHD were approached. After all of
            the feedback and data was collected we were left with this app "I
            Can ADHD!"
            <p>
              ADHD brains are tricky and often times we have different needs at
              different times. This app was made with those needs in mind.{" "}
              <b>
                Even the colors chosen are are meant to stimulate the ADHD
                brain!
              </b>
            </p>
          </p>
          <h4>Let's look at some of the unique features!</h4>
          <ul>
            <li>
              <b>The fidget spinner</b> below the navigation bar is for those
              times when you forgot a thought and need a moment to pause and
              reflect. Or, just have a fidget moment and want to click something
              fun.
            </li>
            <li>
              <b>The brain dump feature</b> is SUPER important! It is for all
              those thoughts you have throughout the day that you don't want to
              forget. Whether it be an awesome insiration driven idea, or just a
              reminder.
            </li>
            <li>
              <b>Then of course we have our task lister</b>, which has two KEY
              parts:
              <ul>
                <li>
                  One is the <b>star button</b> which, when clicked, is to{" "}
                  <u>
                    remind us which tasks are the ones that MUST be prioritized.
                  </u>{" "}
                  Sometimes, by thinking about the consequences of not
                  completeing these tasks we can put more weight on the task
                  which increases the likelyhood of completing it.
                </li>
                <li>
                  The other is the <b>calendar button</b>, which will then route
                  the task to the "future tasks" tab. This is for tasks that are
                  important, but that don't necessarily have to be completed
                  today. <u>They can be left for tomorrow or even next week.</u>
                </li>
              </ul>
            </li>
          <li>
            In the future it is the hopes that there will be a community space
            for a all to communicate as well as a calendar and more advanced
            features. It also hopes to add a "take a break" feature. People with ADHD
            tend to <em>hyperfocus</em> and sometimes it's hard to break away.
            This function will serve as a reminder to the user to take a break and
            take care of themselves. 
          </li>
          </ul>
        </div>
        <div className="about-me">
          <h3>About the creator</h3>
          <h4>Natasha Koller aka @KollerCode</h4>
          <img className="aboutpic" src={natasha} alt="natasha"></img>
          <p>
            Natasha is a jack of all trades. Holding a Master's in International
            Education and an undergraduate degree in Anthropology and music. She
            is always looking for a challenge and has traveled around the world
            picking up various languages along the way. Coding is her newest
            passion and she feels like she is finally where she belongs. She has
            is a diversity champion and loves to meet other latinx in tech as
            well as a big supporter of embracing mental health and knowing when
            to get help. Natasha also loves to teach and help others as it is a
            great way to learn as well. She teaches Lua (video game dev) to
            children for Roblox on the weekends. Her biggest passion is UI
            design and she aspires to be a UI developer/Front-end Developer. She
            is currently #opentowork and contributing to projects and can be
            contacted at the links below.
          </p>
          <p>
            <a href="https://github.com/KollerCode" className="aboutlink">
              https://github.com/KollerCode
            </a>{" "}
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/kollernatasha/"
              className="aboutlink"
            >
              https://www.linkedin.com/in/kollernatasha/
            </a>{" "}
          </p>
          <a href="https://twitter.com/KollerCode" className="aboutlink">
            https://twitter.com/KollerCode
          </a>{" "}
          <a href="https://dev.to/kollercode" className="aboutlink">
            https://dev.to/kollercode
          </a>{" "}
        </div>
        <p>
          Sources:
          <a href="https://chadd.org/about-adhd/overview/">
            https://chadd.org/about-adhd/overview/
          </a>
          <a href="https://www.cdc.gov/ncbddd/adhd/facts.html">
            https://www.cdc.gov/ncbddd/adhd/facts.html
          </a>
        </p>
      </div>
    );  
}

export default About;