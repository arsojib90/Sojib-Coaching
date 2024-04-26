/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our Platform</h1>
            <p className="mb-5">
              We're excited to have you join us! Our platform is built with you
              in mind, aiming to provide you with the best experience possible.
              Dive in, explore, and embark on a journey of discovery and growth.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
