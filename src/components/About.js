import React from "react";
import warrior from "../images/warrior.jpg"
import natasha from "../images/natasha.jpg"

function About() {
    return (
      <div className="about">
        <div className="about-title">
          <h3>About ADHD</h3>
          <p>
            ADHD, or Attention-deficit/hyperactivity disorder, is usually
            characterized by the inability to sit still, control impulse, and
            pay attention. This happens to everyone once in a while, but for
            some people the problems are so pervasive and persistent that they
            interfere with every aspect of their life: home, academic, social
            and work. ADHD is a neurodevelopmental disorder that affects 11
            percent of school-age children, but what about those of us
            struggling with it as adults?. We are 100% capable of being very
            successful in life. However, without identification and proper
            treatment, ADHD may have serious consequences, including school
            failure, family stress and disruption, depression, problems with
            relationships, substance abuse, delinquency, accidental injuries and
            job failure.
          </p>
          <p>
            Adults with ADHD often cope with difficulties at work and in their
            personal and family lives related to ADHD symptoms. Many have
            inconsistent performance at work or in their careers; have
            difficulties with day-to-day responsibilities; experience
            relationship problems; and may have chronic feelings of frustration,
            guilt or blame. Individuals with ADHD may also have difficulties
            with maintaining attention, executive function and working memory.
            Recently, deficits in executive function have emerged as key factors
            affecting academic and career success. Executive function is the
            brain’s ability to prioritize and manage thoughts and actions. This
            ability permits individuals to consider the long-term consequences
            of their actions and guide their behavior across time more
            effectively. Individuals who have issues with executive functioning
            may have difficulties completing tasks or may forget important
            things.
          </p>
          <p>
            There are three different types of ADHD: Predominantly Inattentive
            Presentation: It is hard for the individual to organize or finish a
            task, to pay attention to details, or to follow instructions or
            conversations. The person is easily distracted or forgets details of
            daily routines. Predominantly Hyperactive-Impulsive Presentation:
            The person fidgets and talks a lot. It is hard to sit still for long
            (e.g., for a meal or while doing homework). The individual feels
            restless and has trouble with impulsivity. Someone who is impulsive
            may interrupt others a lot, grab things from people, or speak at
            inappropriate times. It is hard for the person to wait their turn or
            listen to directions. A person with impulsiveness may have more
            accidents and injuries than others. Combined Presentation: Symptoms
            of the above two types are equally present in the person. Because
            symptoms can change over time, the presentation may change over time
            as well.
          </p>
        </div>
        <img src={warrior} className="warrior-img" />
        <div className="about-app">
          <h3>What makes this app different</h3>
          <p>
            This app was made by someone, me, who has struggled with ADHD and
            knows what works and what doesn't when it comes to trying to manage
            tasks. Everyone is different, which is why other sources and persons
            with ADHD were approached with their thoughts on how they organize
            themselves. ADHD brains are tricky and often times we have different
            needs. This app was made with those needs in mind. Even the colors
            were are meant to stimulate the ADHD brain!
          </p>
          <h4>Let's look at some of the unique features!</h4>
          <p>
            The fidget spinner in the 2nd nav bar is for those times when you
            forgot a thought a need a moment to pause and reflect. Or, just to
            have a fidget moment. The brain dump feature is for those moments
            when you have a thought throughout the day and you need to jot it
            down so you don't forget it. Whether it be an awesome insiration
            driven idea, or just a reminder. Then of course we have our task
            lister, which has two buttons one is the star which is to remind us
            which tasks are the ones that MUST be prioritized. Sometimes, by
            thinking about the consequences of not completeing these tasks we
            can put more weight on the task which increases the likelyhood of
            completing it. The other button is the calendar button, which will
            then route the task to the "future tasks" tab. This is for tasks
            that are important, but that don't necessarily have to be completed
            today. They can be left for tomorrow or even next week.
          </p>
        </div>
        <div className="about-me">
          <h3>About the creator</h3>
          <h4>Natasha</h4>
          <img className="aboutpic" src={natasha} alt="natasha"></img>
          <p>
            Natasha is a jack of all trades. Holding a Master's in International
            Education and an undergraduate degree in Anthropology and music. She
            is always looking for a challenge and has traveled around the world
            picking up various languages along the way. Coding is her newest
            passion and she feels like she is finally where she belongs. She has 
            is a diversity champion and lovs to meet other latinx in tech as well
                    as a big supporter of embracing mental health and knowing when to get help. 
                    
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
        </div>
        <p>
          Sources: https://chadd.org/about-adhd/overview/
          https://www.cdc.gov/ncbddd/adhd/facts.html
        </p>
      </div>
    );  
}

export default About;