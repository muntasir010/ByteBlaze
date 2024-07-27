import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData()
    const { cover_image, tags, body_html, url, title } = blog;
    return (
        <div
            className="p-2 rounded-xl mx-auto group">
            <img role="presentation" className="object-cover w-full rounded-xl  bg-gray-500" src={cover_image || placeholderImage} />
            <div className="flex flex-wrap py-6 gap-2  dark:border-gray-600">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</a>)
                }
            </div>
            <div className="space-y-3">
                <a href={url}
                target="_blank" className="text-3xl my-3 hover:underline" >{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;