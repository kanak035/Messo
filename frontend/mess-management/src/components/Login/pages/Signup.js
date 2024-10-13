import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-neutral-900">
      <div className="border border-neutral-400 sm:max-w-xl sm:max-h-[38rem] h-full w-full  flex justify-center items-center rounded-lg bg-neutral-100">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Sign up"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <Signup />
        </div>
      </div>
    </div>
  );
}
