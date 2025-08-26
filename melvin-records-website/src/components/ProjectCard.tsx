import { motion } from 'framer-motion'

interface ProjectCardProps {
  imageUrl: string
  title: string
  brief: string
  onClick: () => void
  className?: string
}

const ProjectCard = ({ 
  imageUrl, 
  title, 
  brief, 
  onClick, 
  className = '' 
}: ProjectCardProps) => {
  return (
    <motion.div
      className={`
        bg-gray-900 
        rounded-lg 
        overflow-hidden 
        cursor-pointer 
        group 
        transition-all 
        duration-300 
        ${className}
      `}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02, 
        y: -4,
        boxShadow: '0 20px 40px rgba(0, 255, 255, 0.15)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Imagen */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {brief}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectCard