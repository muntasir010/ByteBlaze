import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg';
import { MdDeleteForever } from 'react-icons/md';

const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { id, cover_image, title, description, published_at } = blog;

    return (
        <div className='flex relative justify-end'>
            <div className='border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 p-1 rounded-xl'>
                <Link
                    to={`/blog/${id}`}
                    className="max-w-sm mx-auto group transition hover:no-underline focus:no-underline sky-200 dark:bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded-xl h-44 bg-gray-500" src={cover_image || placeholderImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
                </Link>
            </div>
            {deletable && 
            <div 
            onClick={()=> handleDelete(id)} 
            className='absolute text-2xl -top-3 -right-2 text-secondary bg-primary rounded-full p-1 hover:scale-105 cursor-pointer hover:bg-secondary hover:text-primary'><MdDeleteForever/></div>}
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
    deletable: PropTypes.bool,
    handleDelete: PropTypes.func
};

export default BlogCard;