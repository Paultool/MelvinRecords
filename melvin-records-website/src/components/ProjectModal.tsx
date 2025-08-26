import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import VideoPlayer from './VideoPlayer'
import { useEffect } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: string
    title: string
    description: string
    imageUrl: string
    videoUrl?: string
    year?: string
    type?: string
    director?: string
    duration?: string
  } | null
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  if (!project) return null
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    {project.year && (
                      <span className="bg-gray-800 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    )}
                    {project.type && (
                      <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    )}
                    {project.duration && (
                      <span className="text-gray-400">
                        {project.duration}
                      </span>
                    )}
                    {project.director && (
                      <span className="text-gray-400">
                        Dir: {project.director}
                      </span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                  aria-label="Cerrar modal"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6">
                {/* Media Player o Imagen */}
                <div className="mb-6">
                  {project.videoUrl ? (
                    <VideoPlayer
                      src={project.videoUrl}
                      poster={project.imageUrl}
                      title={project.title}
                      className="w-full rounded-lg overflow-hidden"
                    />
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  )}
                </div>
                
                {/* Description */}
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.description}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal