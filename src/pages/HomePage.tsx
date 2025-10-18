const HomePage = () => {
    return (
        <div className="p-8 mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center bg-zinc-900 p-3 rounded-lg">
                Welcome to Workflows
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
                This is a curated collection of useful notes, instructions, and summaries/resources that would otherwise be difficult to find online. With the rise of AI-generated slop and search engines becoming infested with malignant SEO,
                it's increasingly challenging to find clear, concise instructions for tasks that were once accessible within a few clicks.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
                Most of the content here is focused on computing, mathematics, and other MOAE specialties. More categories will be added over time, however, this is designed for more technical areas.
            </p>

            <h2 className="text-3xl font-semibold mt-10 mb-4 bg-zinc-900 p-3 rounded-lg">
                Submitting Your Own Workflows
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
                If you're interested in contributing and using this platform for your content, I'm always happy to accept submissions! All you need is a basic understanding of Markdown, which you can conveniently 
                learn <a href="/workflows/#/computing/markdown/Introduction-to-Markdown" className="text-blue-500 underline">right here on this site</a>.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
                Please note that equation rendering is not a part of standard Markdown but is specific to how content is formatted on this site.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
                Once you've written your instructions, <a href="https://moaesaycto.github.io/#/contact" className="text-blue-500 underline">send them to me</a>. I'll review them, make necessary adjustments, and upload them as soon as possible.
            </p>

            <h2 className="text-3xl font-semibold mt-10 mb-4 bg-zinc-900 p-3 rounded-lg">
                About <i>MOAE</i>
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
                I'm Moae, and I enjoy creating projects like this. If you'd like to see more of my work, feel free to visit 
                <a href="https://moaesaycto.github.io" className="text-blue-500 underline"> my main site</a>.
            </p>
        </div>
    );
};

export default HomePage;
