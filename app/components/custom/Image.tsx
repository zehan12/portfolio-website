/**
 * CustomImage Component
 * ---------------------
 * A reusable React component for rendering images with additional features 
 * like lazy loading, responsive layout, error handling, and custom styling.
 *
 * Author: Zehan Khan
 * Date: 2024-12-06
 *
 * Features:
 * - Lazy loading for improved performance.
 * - Custom placeholder while the main image is loading.
 * - Fallback image for error handling.
 * - Dynamic width and height.
 * - Responsive layout with `objectFit` styling.
 * - Support for static or dynamic images.
 * - Fixed layout with priority loading for critical images.
 *
 * Usage:
 * Import and use this component wherever you need enhanced image handling.
 */

import React, { useState } from 'react';

interface CustomImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    quality?: number; // Optional image quality setting
    className?: string;
    style?: React.CSSProperties;
    lazy?: boolean; // Enables lazy loading
    fallbackSrc?: string; // Fallback image on error
    placeholder?: string; // Placeholder image while loading
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    isStatic?: boolean; // Determines if the image is static
}

const CustomImage: React.FC<CustomImageProps> = ({
    src,
    alt,
    width = 100,
    height = 100,
    quality = 75,
    className = '',
    style = {},
    lazy = true,
    fallbackSrc = '/fallback.jpg',
    placeholder = '',
    objectFit = 'cover',
    isStatic = false,
}) => {
    const [imageSrc, setImageSrc] = useState<string>(placeholder || src);
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleError = () => {
        if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
    };

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <div
            style={{
                position: 'relative',
                width: `${width}px`,
                height: `${height}px`,
                overflow: 'hidden',
                ...style,
            }}
            className={className}
        >
            <img
                src={isStatic ? imageSrc : src}
                alt={alt}
                width={width}
                height={height}
                loading={lazy ? 'lazy' : 'eager'}
                style={{
                    objectFit,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
                onError={handleError}
                onLoad={handleLoad}
                className={`rounded-lg ${className}`}
            />
            {!loaded && placeholder && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${placeholder})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
            )}
        </div>
    );
};

export default CustomImage;
