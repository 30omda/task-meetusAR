import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import LoginForm from "../Auth/Loginform";
import mainLogo from "@/assets/images/mainLogo.png";
import meetus from "@/assets/images/meetus.png";

export default function LoginPage() {
    const mainLogoRef = useRef(null);
    const meetusLogoRef = useRef(null);
    const loginFormRef = useRef(null);

    const gradientBlobs = [
        {
            top: "top-0",
            left: "left-[155px]",
            width: "w-[807px]",
            height: "h-[807px]",
            bg: "bg-[#9e77f6]",
            rounded: "rounded-[403.5px]",
            blur: "blur-[400px]",
            opacity: "opacity-60",
        },
        {
            top: "top-[1018px]",
            left: "left-0",
            width: "w-[813px]",
            height: "h-[813px]",
            bg: "bg-[#b0d2e5]",
            rounded: "rounded-[406.5px]",
            blur: "blur-[400px]",
            opacity: "opacity-60",
        },
        {
            top: "top-[1039px]",
            left: "left-[1200px]",
            width: "w-[667px]",
            height: "h-[667px]",
            bg: "bg-[#9e77f6]",
            rounded: "rounded-[333.5px]",
            blur: "blur-[200px]",
            opacity: "",
        },
        {
            top: "top-[125px]",
            left: "left-[755px]",
            width: "w-[667px]",
            height: "h-[667px]",
            bg: "bg-[#e477f6]",
            rounded: "rounded-[333.5px]",
            blur: "blur-[200px]",
            opacity: "",
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            
            tl.fromTo(
                mainLogoRef.current,
                { x: 300, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
            )
                .fromTo(
                    meetusLogoRef.current,
                    { y: 150, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                    "-=0.6"
                );
            gsap.fromTo(
                loginFormRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0 z-0">
                {gradientBlobs.map((blob, index) => (
                    <div
                        key={`blob-${index}`}
                        className={`absolute ${blob.width} ${blob.height} ${blob.top} ${blob.left} ${blob.bg} ${blob.rounded} ${blob.blur} ${blob.opacity}`}
                    />
                ))}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
                {/* LoginForm */}
                <div
                    ref={loginFormRef}
                    className="col-span-1 lg:col-span-5 flex items-center justify-center backdrop-blur-sm"
                >
                    <LoginForm />
                </div>

                {/* Right section with images */}
                <div className="hidden lg:block lg:col-span-7 relative backdrop-blur-sm rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Meetus logo */}
                        <div
                            ref={meetusLogoRef}
                            className="absolute w-[413px] h-[75px] top-[661px] left-1/2 -translate-x-1/2"
                        >
                            <img className="w-full h-full" alt="MeetusVR logo" src={meetus} />
                        </div>

                        {/* Main logo */}
                        <div className="absolute w-full min-h-screen top-[138px] left-0">
                            <img
                                ref={mainLogoRef}
                                className="absolute w-[754px] bottom-36 left-1/2 -translate-x-1/2 object-cover"
                                alt="MeetusVR design element"
                                src={mainLogo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
