import React, { useState } from 'react';
import { BlogPost } from '../types/coffee';
import { BLOG_POSTS } from '../data/coffeeData';
import { BookOpen, Clock, Calendar, ArrowRight, X, Share2, Check, Tag } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = ['all', 'Brew Guides', 'Origin Stories', 'Roasting Science', 'Cafe Culture'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#blog-${post.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#F4EFEA] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E07A5F]/20 text-[#9A3412] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Punch Love Coffee Journal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            Coffee Extraction, Origins & Brew Guides
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            Deepen your coffee knowledge with insights straight from our head roasters and baristas in Birmingham.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2C241D] text-white shadow-xs'
                  : 'bg-white border border-[#E2D8CF] text-[#4A3E37] hover:border-[#2C241D]'
              }`}
            >
              {cat === 'all' ? 'All Stories & Guides' : cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-[#E2D8CF] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-16/9 bg-[#2C241D] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#9A3412] font-bold text-[11px] px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2C241D] group-hover:text-[#9A3412] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#5A4E46] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-neutral-500 bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E8DFD8]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Read Action Footer */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#F0EBE5] flex items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#E2D8CF]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2C241D]">{post.author.name}</div>
                    <div className="text-[10px] text-neutral-500">{post.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9A3412] hover:text-[#2C241D] group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8DFD8] my-6">
            
            <div className="relative aspect-16/9 bg-neutral-900 overflow-hidden">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover filter brightness-90"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#E07A5F] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                  {selectedPost.category}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8DFD8]">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPost.author.image}
                    alt={selectedPost.author.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#E2D8CF]"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#2C241D]">{selectedPost.author.name}</div>
                    <div className="text-xs text-neutral-500">{selectedPost.author.role} · {selectedPost.publishDate}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleShare(selectedPost)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] hover:bg-neutral-100 text-xs font-semibold text-[#2C241D] border border-[#E2D8CF] cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-[#E07A5F]" />
                      <span>Share Article</span>
                    </>
                  )}
                </button>
              </div>

              {/* Full Article Text */}
              <div className="space-y-4 py-8 text-base text-[#4A3E37] leading-relaxed">
                {selectedPost.content.map((paragraph, i) => (
                  <p key={i} className="text-[#3D332A] leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-[#E8DFD8] flex items-center gap-2">
                <Tag className="w-4 h-4 text-neutral-400" />
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium text-neutral-600 bg-[#FAF7F2] px-2.5 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
