import { Experience, experience } from "@/data/experience";
import { RoughNotation } from "react-rough-notation";

export default function WorkPage() {
    return (
        <div className="main-container text-center h-screen w-full">
            <h1 className="text-6xl font-mono font-medium py-20 text-green-600">
                Work Experience
            </h1>
            <div className="flex flex-row justify-center gap-3">
                {experience.map(
                    ({
                        logo,
                        name,
                        color,
                        overlayColor,
                        companyName,
                        subTitle,
                    }: Experience) => (
                        <ImageCard
                            key={name}
                            src={logo}
                            alt={name}
                            color={color}
                            overlayColor={overlayColor}
                            title={companyName}
                            subtitle={subTitle}
                        />
                    )
                )}
            </div>
        </div>
    );
}

interface ImageCardProps {
    src: string;
    alt: string;
    color: string;
    overlayColor: string;
    title: string;
    subtitle: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
    src,
    alt,
    color,
    overlayColor,
    title,
    subtitle,
}) => {
    return (
        <div className={`relative group ${color}`}>
            <img
                className="h-[439px] w-[439px] object-contain"
                src={src}
                alt={alt}
            />
            <div
                className={`flex justify-center items-center opacity-0 ${overlayColor} group-hover:opacity-95 absolute top-0 left-0 h-full w-full transition-opacity duration-300`}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex-row text-center">
                    <h3 className="text-gray-50 font-mono font-bold text-2xl">
                        {title}
                    </h3>
                    <p className="text-white font-mono font-medium text-md px-10">
                        <RoughNotation
                            type="box"
                            show={true}
                            color={"#FFE9D0"}
                        >
                            {subtitle}
                        </RoughNotation>
                    </p>
                </div>
            </div>
        </div>
    );
};
