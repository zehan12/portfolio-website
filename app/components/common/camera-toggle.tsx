import React from 'react';
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";
import { Video, VideoOff } from 'lucide-react';

interface CameraToggleProps {
    isCameraActive: boolean;
    setIsCameraActive: (active: boolean) => void;
    isBlurred: boolean;
    setIsBlurred: (blurred: boolean) => void;
}

const CameraToggle: React.FC<CameraToggleProps> = ({ isCameraActive, setIsCameraActive, isBlurred, setIsBlurred }) => {
    const handleToggleCamera = () => {
        setIsCameraActive(prev => !prev);
    };

    return (
        <div className="flex items-center space-x-4">
            <Button
                onClick={handleToggleCamera}
                variant="outline"
                size="sm"
            >
                {
                    isCameraActive ? (<>
                        <VideoOff /> Stop Camera
                    </>) :
                        (<>
                            <Video />
                            Start Camera
                        </>)
                }
            </Button>
            <div className="flex items-center space-x-2">
                <Switch
                    id="blur-mode"
                    checked={isBlurred}
                    onCheckedChange={setIsBlurred}
                    disabled={!isCameraActive}
                />
                <Label htmlFor="blur-mode" className="text-white"> Blur Background</Label>
            </div>
        </div>
    );
};

export default CameraToggle;
