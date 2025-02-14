import { useEffect, useRef } from 'react';

interface CameraBackgroundProps {
    isCameraActive: boolean;
    setIsCameraActive: (active: boolean) => void;
    isBlurred: boolean;
    setIsBlurred: (blurred: boolean) => void;
}

export function CameraBackground({ isCameraActive, setIsCameraActive, isBlurred, setIsBlurred }: CameraBackgroundProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                streamRef.current = stream;
                setIsCameraActive(true);
            }
        } catch (err) {
            console.error("Error accessing the camera:", err);
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
            setIsCameraActive(false);
        }
    };

    useEffect(() => {
        if (isCameraActive) {
            startCamera();
        } else {
            stopCamera();
        }

        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, [isCameraActive]);

    return (
        <>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`fixed top-0 left-0 min-w-full min-h-full object-cover  transition-all duration-300 ${isBlurred ? 'blur-xl' : ''}`}
            />
        </>
    );
}
