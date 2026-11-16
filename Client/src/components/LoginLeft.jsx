import React from "react";

const LoginLeft = () => {
  return (
    <div className="hidden lg:flex lg:w-2/5 bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat flex-col justify-between p-12 shrink-0 select-none">
      <div>
        <img src="/logo.svg" alt="Logo" className="size-9.5" />
        <span className="text-4xl font-medium text-white">Builder AI</span>
      </div>
      <div>
        <h2 className="text-3xl text-white font-medium leading-snug mb-3 tracking-tight ">
          Build Your Presence On Web
        </h2>
        <p className="text-zinc-300 ">
          Describe what you need preview instantly and customize your site in
          real-time with clean JSX verified Layouts and instant code exports
        </p>
        <p className="text-zinc-300 text-sm mt-12">
          copyright {new Date().getFullYear()}Builder AI
        </p>
      </div>
    </div>
  );
};

export default LoginLeft;
