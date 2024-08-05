import React from 'react';
import BlogBullet from '@/components/entities/Blog bullet/BlogBullet'

const BlogGallery: React.FC = () => {
  const param = "calculator-guide";
  return (
    <div className="grid grid-cols-2 gap-4 w-2/3 p-4">
      <BlogBullet section="Ремонт" link={param} text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?" />
      <BlogBullet section="Ремонт" link={param} text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?" />
      <BlogBullet section="Ремонт" link={param} text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?" />
      <BlogBullet section="Ремонт" link={param} text="Как рассчитать стоимость через онлайн-калькулятор FIX-ремонт?" />
    </div>
  );
};

export default BlogGallery;
