"use client";

import { useState, useEffect } from 'react';
import { Post } from '@/types';
import { PostCard } from '@/components/PostCard';
import { Search } from 'lucide-react';

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/data/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const featuredPost = filteredPosts.find(p => p.id === 1);
  const typescriptPost = filteredPosts.find(p => p.id === 2);
  const otherPosts = filteredPosts.filter(p => p.id > 2);

  return (
    <main className="space-y-16">
      <div className="container mx-auto px-4">
        
        {/* LATEST Section */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-4xl font-black">LATEST</h1>
            <div className="relative w-full md:w-auto">
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#161B22] border border-brand-border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue w-full md:w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-gray" />
            </div>
          </div>
          
          {/* Featured Post */}
          {featuredPost && <PostCard post={featuredPost} isFeatured layout="image-left" />}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {otherPosts.map(post => <PostCard key={`latest-${post.id}-${Math.random()}`} post={post} />)}
          </div>
        </section>

        <section className="py-12">
          <h1 className="text-4xl font-black mb-8">JAVASCRIPT</h1>
          {typescriptPost && <PostCard post={typescriptPost} isFeatured layout="text-left" />}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
             {otherPosts.map(post => <PostCard key={`js-${post.id}-${Math.random()}`} post={post} />)}
          </div>
        </section>

      </div>
    </main>
  );
}