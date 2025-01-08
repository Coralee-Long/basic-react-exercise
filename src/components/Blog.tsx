import image1 from '../assets/images/unsplash1.jpg';
import image2 from '../assets/images/unsplash2.jpg';
import {Resources} from "./Resources.tsx";


export const Blog = () => {

return (
    <>
        <div className="container">
            <h1>
                5 ChatGPT Secrets To Finally Achieve Your New Year’s Goals In 2025
            </h1>

            <div className="article-link">
                <a href="https://www.forbes.com/sites/torconstantino/2025/01/02/5-chatgpt-secrets-to-finally-achieve-your-new-years-goals-in-2025/">Read
                    Full Article Here</a>
            </div>

            <figure>
                <img src={image1} alt="Tokenization example"/>
                <figcaption>Photo by <a
                    href="https://unsplash.com/@alesnesetril?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ales
                    Nesetril</a> on <a
                    href="https://unsplash.com/photos/gray-and-black-laptop-computer-on-surface-Im7lZjxeLhg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </figcaption>
            </figure>

            <p>
                Roughly 80% of the people who make resolutions at the start of a new year truly believe they can achieve
                their goals. The reality is that less than 10% stick to their resolution and make it a reality.
                Psychologists state that a key factor to achieving life goals — such as New Year’s resolutions — is
                having a plan, and ChatGPT can help with that planning.
            </p>
            <p>
                Whether it’s improving your health, learning more about AI, losing weight, boosting your finances,
                spending more time with your family or any other area you want to improve in 2025, the five ChatGPT
                prompts below can help increase your chances for success.
            </p>
            <p>
                Each of the prompts was designed using a structured combination of different goal-setting models and
                methods that have a proven record of success along with a brainstorming session with ChatGPT to
                fine-tune the queries. Just cut and paste the customizable prompts — in quotes below — into any free AI
                model.
            </p>

            <h2>ChatGPT Secret 1 - Resolution Roadmap Generator</h2>

            <p>
                <strong>Prompt:</strong> "Act as my personal strategist. My New Year’s resolution is [insert
                resolution]. Help me break this goal into specific, measurable, actionable, realistic and time-bound
                (SMART) steps that span the next 12 months. Include checkpoints to ensure I can measure progress and
                adjust the plan if necessary. Organize the plan month by month, starting with foundational steps in the
                first quarter that build momentum toward achieving the resolution by year-end. Provide suggestions for
                overcoming common obstacles and maintaining motivation."
            </p>
            <p>
                <strong>Rationale:</strong> The only way to successfully overcome a big goal is to break it down into
                smaller, achievable steps. Having laid down incremental progress on a monthly basis, the roadmap allows
                for consistent checks and changes to prevent boredom or burnout.
            </p>

            <figure>
                <img src={image2}
                     alt="ChatGPT's wrong answer to the question: How many 'R's are in the word 'strawberry'?"/>
                <figcaption>Photo by <a
                    href="https://unsplash.com/@glenncarstenspeters?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Glenn
                    Carstens-Peters</a> on <a
                    href="https://unsplash.com/photos/person-using-macbook-pro-npxXWgQ33ZQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </figcaption>
            </figure>
        </div>

        <Resources />
    </>
)
}

