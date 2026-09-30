import React from 'react';
import { skillCategories } from '../../data/skillsData';
import './CategoryFilter.css';

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % skillCategories.length;
      onSelectCategory(skillCategories[nextIndex].id);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + skillCategories.length) % skillCategories.length;
      onSelectCategory(skillCategories[prevIndex].id);
    }
  };

  return (
    <div
      className="category-filter-bar"
      role="tablist"
      aria-label="Skill Category Filters"
    >
      <div className="filter-pill-strip">
        {skillCategories.map((cat, idx) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              role="tab"
              id={`cat-tab-${cat.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              className={`category-pill-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              data-magnetic="true"
            >
              <span className="pill-dot" />
              <span className="pill-label">{cat.label}</span>
              <span className="pill-count">{cat.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
