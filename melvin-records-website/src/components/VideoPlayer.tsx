import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'
import { motion } from 'framer-motion'

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
  className?: string
  autoplay?: boolean
  controls?: boolean
  lazy?: boolean
}

const VideoPlayer = ({ 
  src, 
  poster, 
  title, 
  className = '', 
  autoplay = false, 
  controls = true,
  lazy = true 
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(!lazy)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Detect video type
  const getVideoType = (url: string) => {
    if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
      return 'youtube'
    }
    if (url.includes('vimeo.com')) {
      return 'vimeo'
    }
    if (url.includes('bandcamp.com')) {
      return 'bandcamp'
    }
    return 'direct'
  }
  
  const videoType = getVideoType(src)
  
  // Extract video ID for embedded players
  const getVideoId = (url: string, type: string) => {
    if (type === 'youtube') {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
      return match?.[1] || ''
    }
    if (type === 'vimeo') {
      const match = url.match(/vimeo\.com\/(\d+)/)
      return match?.[1] || ''
    }
    return ''
  }
  
  const videoId = getVideoId(src, videoType)
  
  // Handle intersection observer for lazy loading
  useEffect(() => {
    if (!lazy) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => observer.disconnect()
  }, [lazy])
  
  // Video event handlers for direct videos
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const total = videoRef.current.duration
      setCurrentTime(current)
      setProgress((current / total) * 100)
    }
  }
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }
  
  const handleError = () => {
    setError('No se pudo cargar el video. Verifica que el enlace sea válido.')
  }
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      const time = percent * duration
      videoRef.current.currentTime = time
    }
  }
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
  
  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        containerRef.current.requestFullscreen()
      }
    }
  }
  
  // Auto-hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const resetTimeout = () => {
      clearTimeout(timeout)
      setShowControls(true)
      timeout = setTimeout(() => {
        if (isPlaying) setShowControls(false)
      }, 3000)
    }
    
    if (isPlaying) {
      resetTimeout()
    } else {
      setShowControls(true)
    }
    
    return () => clearTimeout(timeout)
  }, [isPlaying])
  
  if (!isLoaded) {
    return (
      <div 
        ref={containerRef}
        className={`relative bg-melvin-bg-secondary rounded-lg overflow-hidden ${className}`}
      >
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-melvin-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-melvin-text-secondary">Cargando video...</p>
          </div>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className={`relative bg-melvin-bg-secondary rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-400 text-2xl">⚠</span>
            </div>
            <p className="text-melvin-text-secondary mb-2">Error al cargar el video</p>
            <p className="text-sm text-melvin-text-secondary/70">{error}</p>
          </div>
        </div>
      </div>
    )
  }
  
  // Render embedded players for YouTube and Vimeo
  if (videoType === 'youtube' && videoId) {
    return (
      <div ref={containerRef} className={`relative bg-melvin-bg-secondary rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
  
  if (videoType === 'vimeo' && videoId) {
    return (
      <div ref={containerRef} className={`relative bg-melvin-bg-secondary rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?color=00FFFF&title=0&byline=0&portrait=0`}
            title={title}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
  
  // Render Bandcamp player
  if (videoType === 'bandcamp') {
    return (
      <div ref={containerRef} className={`relative bg-melvin-bg-secondary rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video">
          <iframe
            src={src}
            title={title}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
  
  // Render direct video player
  return (
    <div 
      ref={containerRef}
      className={`relative bg-melvin-bg-secondary rounded-lg overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover aspect-video"
        poster={poster}
        autoPlay={autoplay}
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
        Tu navegador no soporta el elemento video.
      </video>
      
      {/* Custom Controls */}
      {controls && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-melvin-accent-cyan/20 hover:bg-melvin-accent-cyan/30 rounded-full flex items-center justify-center transition-all pointer-events-auto"
          >
            {isPlaying ? (
              <Pause className="text-white" size={24} />
            ) : (
              <Play className="text-white ml-1" size={24} />
            )}
          </button>
          
          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
            {/* Progress Bar */}
            <div 
              className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-melvin-accent-cyan rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={togglePlay} className="text-white hover:text-melvin-accent-cyan transition-colors">
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button onClick={toggleMute} className="text-white hover:text-melvin-accent-cyan transition-colors">
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              
              <button onClick={handleFullscreen} className="text-white hover:text-melvin-accent-cyan transition-colors">
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default VideoPlayer