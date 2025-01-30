const HomePage = () => {
    return (
        <div className="p-4">
            <p className="text-3xl">
                Welcome to Workflows
            </p>
            <p>
                This is a collection of useful notes, instructions and summaries that would otherwise be too difficult to find online. With the rise of AI slop and search engines being infested with malignant SEO, it's
                getting harder to find quick and simple instructions for the things we once had within a few clicks. Most of the notes here are designed mostly for use in computing, mathematics and other MOAE specialities
            </p>
            <p className="text-3xl">
                Submitting Your Own Workflows
            </p>
            <p>
                If you are ineterested in helping me grow this site and use it for your content as well, I am always happy to accept submissions! To begin, all you need is a simple understanding of Markdown, which conveniently
                learn <a href="/workflows/#/computing/markdown/Introduction-to-Markdown">on this very site</a>. Please note that the equation rendering is not part of Markdown, rather specific to how the content is rendered here.
            </p>
            <p>
                Once you've written up your instructions, <a href="https://moaesaycto.github.io/#/contact">send it to me</a>! I will look through it, fix up any discrepencies that may cause problems and I'll upload it when
                I can. 
            </p>
        </div>
    )
}

export default HomePage;