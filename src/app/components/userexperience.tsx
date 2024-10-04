

 import SmoothAnimatedSection from "./animation"

function UserExperience() {
  return (
    <SmoothAnimatedSection>
    <div className="grid text-center sm:grid-cols-3 mb-10 ">
      
      <div>
        {" "}
        <h1 className="text-white sm:text-2xl text-2xl ">
          3800+ <span className="text-blue-500 font-bold">User Active</span>
        </h1>
      </div>
      <div>
        {" "}
        <h1 className="text-white sm:text-2xl text-2xl">
          230+ <span className="text-blue-500 font-bold">Trusted-By-Company</span>
        </h1>
      </div>
      <div>
        {" "}
        <h1 className="text-white sm:text-2xl text-2xl">
          $230+ <span className="text-blue-500 font-bold">Transaction</span>
        </h1>
      </div>
      
      
    </div>
    </SmoothAnimatedSection>
  );
}
export default UserExperience;
