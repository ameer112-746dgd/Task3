import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  isFeatured?: boolean;
  layout?: 'image-left' | 'text-left';
}

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase().trim()) {
    case 'javascript':
      return 'text-yellow-400';
    case 'nextjs':
      return 'text-brand-light-blue';
    default:
      return 'text-brand-pink';
  }
};

export const PostCard = ({ post, isFeatured = false, layout = 'image-left' }: PostCardProps) => {
  if (isFeatured) {
    const TextBlock = () => (
      <div>
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-brand-gray mb-3">{post.date}</p>
        <div className="flex flex-wrap gap-x-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className={`text-sm font-semibold ${getTagColor(tag)}`}>
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-brand-gray mb-4">{post.snippet}</p>
        <div className="flex items-center space-x-2 text-sm text-brand-gray">
          <Clock size={16} />
          <span>{post.readTime}</span>
        </div>
      </div>
    );

    const ImageBlock = () => (
       <Image 
          src={post.image} 
          alt={post.title} 
          width={550} 
          height={350} 
          className="rounded-lg object-cover w-full h-auto"
        />
    );

    return (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {layout === 'image-left' ? (
          <>
            <ImageBlock />
            <TextBlock />
          </>
        ) : (
          <>
            <TextBlock />
            <ImageBlock />
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#161B22] border border-brand-border rounded-lg overflow-hidden">
        <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <div className="flex space-x-2 mb-3">
            {post.tags.map(tag => (
                <span key={tag} className={`text-xs font-semibold ${getTagColor(tag)}`}>
                #{tag}
                </span>
            ))}
            </div>
            <p className="text-brand-gray text-sm mb-4 line-clamp-3">{post.snippet}</p>
            <div className="flex justify-between items-center text-xs text-brand-gray">
            <div className="flex items-center space-x-1.5">
                <Clock size={14} />
                <span>{post.readTime}</span>
            </div>
            <span>{post.date}</span>
            </div>
        </div>
    </div>
  );
};