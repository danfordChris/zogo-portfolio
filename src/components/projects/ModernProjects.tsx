import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Project, ProjectImage } from '../../store/projectStore';
import ModernProjectCard from './ModernProjectCard';
import ProjectModal from './ProjectModal';
import clsx from 'clsx';

interface ModernProjectsProps {
  projects: Project[];
  mode: string;
}

const ModernProjects: React.FC<ModernProjectsProps> = ({ projects, mode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const isDark = mode === 'dark';

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    projects.forEach((p) => {
      if (p.category) {
        if (Array.isArray(p.category)) {
          p.category.forEach(cat => cats.add(cat));
        } else {
          cats.add(p.category);
        }
      }
    });
    return Array.from(cats).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const projectCategories = Array.isArray(project.category)
        ? project.category
        : project.category ? [project.category] : [];

      const matchesCategory =
        selectedCategory === 'all' || projectCategories.includes(selectedCategory as any);
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleDownloadImages = (images: ProjectImage[]) => {
    // This is a placeholder for download functionality
    // In a real app, you would zip and download the images
    console.log('Downloading images:', images);
    alert(`Download functionality would download ${images.length} image(s)`);
  };

  return (
    <section
      id="projects"
      className={clsx(
        'py-16 sm:py-24 px-4 sm:px-6 lg:px-8',
        isDark
          ? 'bg-gradient-to-b from-transparent via-slate-900/40 to-transparent'
          : 'bg-gradient-to-b from-transparent via-slate-100/40 to-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={clsx(
              'text-4xl sm:text-5xl font-bold font-archivo mb-4',
              isDark ? 'text-white' : 'text-gray-900'
            )}
          >
            Featured Projects
          </h2>
          <p
            className={clsx(
              'text-lg max-w-2xl mx-auto',
              isDark ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            Explore my portfolio of innovative projects built with modern technologies
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={clsx(
                'w-full px-4 py-3 rounded-lg border transition-all duration-300',
                'glass-card',
                isDark
                  ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                  : 'bg-gray-900/10 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'
              )}
            />
            <svg
              className={clsx(
                'absolute right-3 top-3.5 w-5 h-5',
                isDark ? 'text-gray-400' : 'text-gray-500'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={clsx(
                  'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
                  selectedCategory === 'all'
                    ? isDark
                      ? 'bg-blue-600/40 text-blue-300 border border-blue-500/50'
                      : 'bg-blue-600/30 text-blue-700 border border-blue-500/30'
                    : isDark
                    ? 'glass-card bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    : 'glass-card bg-gray-900/10 text-gray-700 hover:bg-gray-900/20 border border-gray-200'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Projects
              </motion.button>

              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category || 'all')}
                  className={clsx(
                    'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
                    selectedCategory === category
                      ? isDark
                        ? 'bg-blue-600/40 text-blue-300 border border-blue-500/50'
                        : 'bg-blue-600/30 text-blue-700 border border-blue-500/30'
                      : isDark
                      ? 'glass-card bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      : 'glass-card bg-gray-900/10 text-gray-700 hover:bg-gray-900/20 border border-gray-200'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.p
          className={clsx(
            'mb-6 text-sm font-medium',
            isDark ? 'text-gray-400' : 'text-gray-600'
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.p>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ModernProjectCard
                key={project.id}
                project={project}
                mode={mode}
                onImageClick={() => setSelectedProject(project)}
                index={idx}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p
              className={clsx(
                'text-lg',
                isDark ? 'text-gray-400' : 'text-gray-600'
              )}
            >
              No projects found matching your criteria
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          mode={mode}
          onClose={() => setSelectedProject(null)}
          onDownload={handleDownloadImages}
        />
      )}
    </section>
  );
};

export default ModernProjects;
