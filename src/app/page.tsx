import { RoughNotation } from "react-rough-notation";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center main-container pt-10 md:pt-0 sm:pb-20 lg:pb-0">
                <h1 className="text-[#0A5029] font-space text-xl mb-10 sm:pt-16 sm:text-3xl md:text-5xl lg:pt-20 lg:mb-0 lg:text-5xl leading-snug">
                    Hi, I'm Zehan Khan.
                    <span className="text-amber-500">✰</span> <br />{" "}
                    <span className="text-orange-500">✺</span> A Full Stack
                    Software Engineer
                    <span className="text-purple-600">⋆</span>
                    <span className="text-orange-600">✽</span>
                    <span className="text-emerald-500">⋆</span>
                    <span className="text-purple-600">✷</span>
                </h1>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-10 my-3">
                <div className="flex flex-col justify-start gap-10 font-mono px-4 md:px-0 w-full md:w-3/6">
                    <p>
                        <b className="text-4xl text-green-700">Hello,</b> I'm
                        Zehan, a dedicated and passionate{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="#fff176"
                        >
                            Lead Frontend
                        </RoughNotation>{" "}
                        and{" "}
                        <br />
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="hotpink"
                        >
                            Full Stack Software Engineer
                        </RoughNotation>{" "}
                        with{" "}
                        <RoughNotation type="box" show={true} color="green">
                            3 years
                        </RoughNotation>{" "}
                        of experience in developing robust and innovative web
                        applications. With expertise in various frontend
                        frameworks, including{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="red"
                        >
                            React
                        </RoughNotation>{" "}
                        and{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="blue"
                        >
                            Svelte
                        </RoughNotation>
                        , I pride myself on creating seamless and intuitive user
                        experiences. My journey in software development has led
                        me to work on diverse projects, ranging from{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="#BEC6A0"
                        >
                            microfrontend applications
                        </RoughNotation>{" "}
                        to{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="#B4E380"
                        >
                            sophisticated microservices
                        </RoughNotation>
                        .
                    </p>
                    <p>
                        Currently, I'm immersed in exploring new challenges and
                        expanding my skill set. My recent endeavors include
                        integrating{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="purple"
                        >
                            OAuth logins
                        </RoughNotation>
                        , developing{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="purple"
                        >
                            Chrome extensions
                        </RoughNotation>
                        , and implementing complex server-side applications with{" "}
                        <RoughNotation
                            type="box"
                            show={true}
                            color="#E3A5C7"
                        >
                            Node.js
                        </RoughNotation>{" "}
                        and{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="#B692C2"
                        >
                            Next.js
                        </RoughNotation>
                        . I also have hands-on experience with{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="lime"
                        >
                            TypeScript
                        </RoughNotation>
                        ,{" "}
                        <RoughNotation
                            type="highlight"
                            show={true}
                            color="orange"
                        >
                            React Native
                        </RoughNotation>.
                    </p>

                    <p>
                        I thrive on solving complex problems and am constantly
                        on the lookout for innovative solutions that can enhance
                        user interactions and overall application performance.
                        My portfolio showcases a variety of projects, including
                        a{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="orange"
                        >
                            URL shortener
                        </RoughNotation>
                        , a{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="orange"
                        >
                            blog application
                        </RoughNotation>
                        , and a{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="orange"
                        >
                            trending product carousel
                        </RoughNotation>
                        , reflecting my versatility and commitment to
                        excellence.
                    </p>
                </div>
                <div className="w-full flex items-center justify-center md:w-2/6">
                    <img className="w-9/12" src="/me.jpg" alt="Zehan Khan" />
                </div>
            </div>
        </main>
    );
}
