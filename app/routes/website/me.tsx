import { MouseTrailSection } from "~/components/core/mouse-trail-section";
import { Route } from "./+types";
import { motion } from "framer-motion";
import { memo, useState } from "react";
import Cards from "~/components/card/Card";
import { Project } from "~/components/project/Project";
import { ShapeChanger } from "~/components/shapes/Shapes";

const TOTAL_BOXES = 740;
const arr = Array.from({ length: TOTAL_BOXES }, (_, index) => index);

// Generate colors for all boxes
const generateColor = (index: number, total: number) => {
    const hue = (index * (360 / total)) % 360;
    return `hsl(${hue}, 70%, 50%)`;
};

const COLOR_PALETTE = [
    "#0B8250",
    "#75CCFC",
    "#FFBF43",
    "#C286FF",
    "#FF8383",
    "#FFF574",
    "#A1D6CB",
    "#A19AD3",
    "#CB9DF0",
    "#F0C1E1",
    "#FDDBBB",
    "#FFF9BF",
    "#FFE893",
    "#FB9EC6",
    "#FF77B7",
    "#FFCCEA",
    "#FFF6E3",
    "#CDC1FF",
    "#BFECFF",
];

// const colors = arr.map((index) => generateColor(index, TOTAL_BOXES));
const colors = arr.map((index) => COLOR_PALETTE[index % COLOR_PALETTE.length]);

const GridItem = memo(({ ele }: any) => (
    <div
        key={ele}
        className="w-10 h-10 border flex items-center justify-center 
                bg-gray-200 transition-all duration-300 
                hover:bg-blue-500 hover:scale-110 
                hover:shadow-lg"
    >
        {/* Content */}
    </div>
));

export function meta({ data }: Route.MetaArgs) {
    console.log(data, "data");
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader() {
    return { message: "Hello, world!" };
}

export default function AboutMe({ loaderData }: Route.ComponentProps) {
    console.log(loaderData);
    return (
        <section className="w-full">
            <section>
                <MouseTrailSection />
            </section>
            <section className="overflow-hidden relative">
                <div className="flex flex-wrap">
                    {arr.map((ele) => (
                        <Box
                            key={ele}
                            color={colors[ele]}
                            index={ele}
                            total={TOTAL_BOXES}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <ShapeChanger />
                </div>
            </section>
            <section className="min-h-screen flex items-center justify-center transition-colors duration-1000">
                <Cards />
            </section>
        </section>
    );
}

const Box = memo(({ color, index, total }: any) => {
    const delay = 0;
    // (index % 100) * 0.05;

    return (
        <motion.div
            className="w-10 h-10 flex items-center justify-center relative cursor-pointer"
            whileHover={{
                backgroundColor: color,
                transition: { delay: -1 },
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            animate={{
                transition: { delay: delay },
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            }}
            transition={{ duration: 5 }}
        ></motion.div>
    );
});

export function ProjectStackedLogoSVG() {
    return (
        <div>
            <svg
                width="187"
                height="202"
                viewBox="0 0 187 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M95.877 29.3372C83.6516 29.3361 71.6881 32.8979 61.4355 39.5913C51.1829 46.2847 43.0812 55.8225 38.1115 67.0494L25.3962 54.269L0 80.5348L32.6513 113.36V201.143H71.6017V150.858C79.0769 153.989 87.2809 156.388 95.8839 156.388C104.241 156.475 112.532 154.897 120.278 151.743C128.025 148.589 135.072 143.923 141.012 138.014C146.952 132.105 151.668 125.071 154.887 117.318C158.105 109.566 159.762 101.249 159.762 92.8487C159.762 84.4484 158.105 76.1315 154.887 68.379C151.668 60.6265 146.952 53.5924 141.012 47.6836C135.072 41.7747 128.025 37.1084 120.278 33.9546C112.532 30.8007 104.234 29.2496 95.877 29.3372ZM95.877 120.148C90.51 120.148 85.2635 118.548 80.801 115.551C76.3385 112.554 72.8604 108.294 70.8066 103.311C68.7527 98.3267 68.2153 92.8426 69.2624 87.5518C70.3094 82.261 72.8939 77.401 76.6889 73.5865C80.484 69.772 85.3191 67.1744 90.583 66.1219C95.8469 65.0695 101.303 65.6097 106.262 67.6741C111.22 69.7384 115.458 73.2343 118.44 77.7197C121.422 82.205 123.013 87.4784 123.013 92.8729C123.013 96.4547 122.311 100.001 120.947 103.311C119.584 106.62 117.585 109.626 115.065 112.159C112.545 114.692 109.554 116.701 106.262 118.072C102.969 119.442 99.4405 120.148 95.877 120.148Z"
                    fill="#0B8250"
                />
                <path
                    d="M102.689 22.004C90.4641 22.0029 78.5006 25.5647 68.248 32.2581C57.9954 38.9515 49.8937 48.4893 44.924 59.7162L32.2087 46.9358L6.8125 73.2016L39.4638 106.027V193.81H78.4142V143.525C85.8894 146.656 94.0934 149.055 102.696 149.055C111.053 149.142 119.345 147.563 127.091 144.41C134.837 141.256 141.884 136.589 147.824 130.681C153.765 124.772 158.481 117.738 161.699 109.985C164.917 102.233 166.575 93.9158 166.575 85.5155C166.575 77.1152 164.917 68.7983 161.699 61.0458C158.481 53.2933 153.765 46.2592 147.824 40.3504C141.884 34.4415 134.837 29.7752 127.091 26.6214C119.345 23.4675 111.047 21.9164 102.689 22.004ZM102.689 112.815C97.3225 112.815 92.076 111.215 87.6135 108.218C83.151 105.221 79.6729 100.961 77.6191 95.9774C75.5652 90.9935 75.0278 85.5094 76.0749 80.2186C77.1219 74.9278 79.7064 70.0678 83.5014 66.2533C87.2965 62.4389 92.1316 59.8412 97.3955 58.7888C102.659 57.7363 108.116 58.2765 113.074 60.3409C118.032 62.4052 122.271 65.9011 125.252 70.3865C128.234 74.8718 129.826 80.1452 129.826 85.5397C129.826 89.1215 129.124 92.6682 127.76 95.9774C126.396 99.2865 124.397 102.293 121.878 104.826C119.358 107.359 116.366 109.368 113.074 110.738C109.782 112.109 106.253 112.815 102.689 112.815Z"
                    fill="#75CCFC"
                />
                <path
                    d="M109.494 14.6705C97.2687 14.6694 85.3053 18.2312 75.0527 24.9246C64.8001 31.618 56.6984 41.1558 51.7287 52.3827L39.0134 39.6023L13.6172 65.8682L46.2684 98.6935V186.477H85.2189V136.191C92.694 139.323 100.898 141.721 109.501 141.721C117.858 141.809 126.15 140.23 133.896 137.076C141.642 133.922 148.689 129.256 154.629 123.347C160.57 117.438 165.285 110.404 168.504 102.652C171.722 94.8992 173.379 86.5823 173.379 78.182C173.379 69.7817 171.722 61.4648 168.504 53.7123C165.285 45.9599 160.57 38.9257 154.629 33.0169C148.689 27.108 141.642 22.4417 133.896 19.2879C126.15 16.134 117.851 14.5829 109.494 14.6705ZM109.494 105.481C104.127 105.481 98.8807 103.882 94.4182 100.885C89.9557 97.8875 86.4776 93.6277 84.4238 88.6439C82.3699 83.66 81.8325 78.1759 82.8796 72.8851C83.9266 67.5943 86.5111 62.7343 90.3061 58.9198C94.1011 55.1054 98.9363 52.5077 104.2 51.4553C109.464 50.4028 114.92 50.943 119.879 53.0074C124.837 55.0717 129.075 58.5676 132.057 63.053C135.039 67.5383 136.63 72.8117 136.63 78.2062C136.63 81.788 135.928 85.3347 134.565 88.6439C133.201 91.953 131.202 94.9598 128.682 97.4925C126.162 100.025 123.171 102.034 119.879 103.405C116.586 104.776 113.058 105.481 109.494 105.481Z"
                    fill="#FFBF43"
                />
                <path
                    d="M116.307 7.33711C104.081 7.33601 92.1178 10.8979 81.8652 17.5912C71.6126 24.2846 63.5109 33.8224 58.5412 45.0493L45.8259 32.2689L20.4297 58.5348L53.0809 91.3601V179.143H92.0314V128.858C99.5065 131.989 107.711 134.388 116.314 134.388C124.671 134.475 132.962 132.897 140.708 129.743C148.454 126.589 155.501 121.923 161.442 116.014C167.382 110.105 172.098 103.071 175.316 95.3183C178.535 87.5658 180.192 79.2489 180.192 70.8486C180.192 62.4483 178.535 54.1314 175.316 46.3789C172.098 38.6265 167.382 31.5924 161.442 25.6835C155.501 19.7747 148.454 15.1083 140.708 11.9545C132.962 8.80064 124.664 7.2495 116.307 7.33711ZM116.307 98.1478C110.94 98.1478 105.693 96.5481 101.231 93.5511C96.7682 90.5541 93.2901 86.2943 91.2363 81.3105C89.1824 76.3266 88.645 70.8425 89.6921 65.5517C90.7391 60.2609 93.3236 55.4009 97.1186 51.5864C100.914 47.772 105.749 45.1743 111.013 44.1219C116.277 43.0695 121.733 43.6096 126.691 45.674C131.65 47.7384 135.888 51.2343 138.869 55.7196C141.851 60.205 143.443 65.4783 143.443 70.8728C143.443 74.4546 142.741 78.0013 141.377 81.3105C140.013 84.6196 138.015 87.6264 135.495 90.1591C132.975 92.6918 129.983 94.7009 126.691 96.0716C123.399 97.4423 119.87 98.1478 116.307 98.1478Z"
                    fill="#C286FF"
                />
                <path
                    className="fill-purple-50 dark:fill-white"
                    d="M123.111 0.00351361C110.886 0.00240605 98.9224 3.56425 88.6699 10.2576C78.4173 16.951 70.3155 26.4888 65.3458 37.7157L52.6306 24.9353L27.2344 51.2012L59.8856 84.0265V171.81H98.8361V121.524C106.311 124.656 114.515 127.054 123.118 127.054C131.475 127.142 139.767 125.563 147.513 122.409C155.259 119.255 162.306 114.589 168.246 108.68C174.187 102.771 178.903 95.7371 182.121 87.9847C185.339 80.2322 186.996 71.9153 186.996 63.515C186.996 55.1147 185.339 46.7978 182.121 39.0453C178.903 31.2929 174.187 24.2588 168.246 18.3499C162.306 12.4411 155.259 7.77474 147.513 4.62089C139.767 1.46704 131.468 -0.0840977 123.111 0.00351361ZM123.111 90.8142C117.744 90.8142 112.498 89.2145 108.035 86.2175C103.573 83.2205 100.095 78.9607 98.0409 73.9769C95.9871 68.993 95.4497 63.5089 96.4967 58.2181C97.5438 52.9273 100.128 48.0673 103.923 44.2528C107.718 40.4384 112.554 37.8407 117.817 36.7883C123.081 35.7359 128.537 36.276 133.496 38.3404C138.454 40.4048 142.692 43.9007 145.674 48.386C148.656 52.8714 150.247 58.1447 150.247 63.5392C150.247 67.121 149.546 70.6677 148.182 73.9769C146.818 77.286 144.819 80.2928 142.299 82.8255C139.78 85.3582 136.788 87.3673 133.496 88.738C130.204 90.1087 126.675 90.8142 123.111 90.8142Z"
                />
            </svg>
        </div>
    );
}
