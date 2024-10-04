import SmoothAnimatedSection from "./animation";

function Quotes() {
  return (
    <SmoothAnimatedSection>
      <div className="flex flex-col items-center justify-center w-auto h-[150px] bg-gray-700 text-center p-4">
        <h1 className="text-white font-bold text-3xl mb-2">
          Let’s Create Something{" "}
          <span className="text-blue-500">Amazing Together</span>
        </h1>
        <p className="capitalize text-white text-lg">
          Ready to bring your next project to life? Connect and discuss how I
          can help you achieve your goals.
        </p>
      </div>
    </SmoothAnimatedSection>
  );
}
export default Quotes;
